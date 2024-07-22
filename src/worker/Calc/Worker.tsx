'use client'

import {
  CalcRequestsUnion,
  CalcResponse,
  CalcResponsesUnion,
  WORKER_JSON_REPLACER,
  WORKER_JSON_REVIVER,
  WorkerRequestType,
} from '@/worker/CalcWorkerTypes'
import { Debouncer, DeferredPromise } from '@/utils'

export class CalcWorker {
  private static SELF_ID: number = 0

  // for some log tracking
  private id: number

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  private pendingPromise?: DeferredPromise<any>

  private worker?: Worker

  private debouncers: { [k in WorkerRequestType]?: Debouncer } = {}

  private sequenceId: number = 0

  constructor() {
    this.id = CalcWorker.SELF_ID
    CalcWorker.SELF_ID += 1

    for (const t of Object.values(WorkerRequestType)) {
      this.debouncers[t as WorkerRequestType] = new Debouncer(250)
    }
  }

  public initWorker() {
    if (!this.worker) {
      console.debug(`[CalcWorker ${this.id}] Init`)
      this.worker = new Worker(new URL('./worker.ts', import.meta.url))
      this.worker.onmessage = (ev: MessageEvent<string>) => this.onResponse(ev)
    }
  }

  public shutdown() {
    if (this.worker) {
      const w = this.worker
      this.worker = undefined
      w.terminate()
    }
  }

  public isReady(): boolean {
    return this.worker !== undefined
  }

  public async do<
    Req extends CalcRequestsUnion,
    Resp extends CalcResponse<Req['type']>,
  >(req: Req): Promise<Resp> {
    // this can be hit early on during page load
    if (!this.worker) {
      return Promise.reject(
        new Error('worker is not initialized and cannot handle requests'),
      )
    }

    await this.debouncers[req.type]?.debounce()

    // we use these ids to map the response back to the promise
    this.sequenceId += 1
    req.sequenceId = this.sequenceId

    // deferred promise so that we can invoke the callback in onResponse
    this.pendingPromise = new DeferredPromise<Resp>()

    const payload = JSON.stringify(req, WORKER_JSON_REPLACER)
    this.worker.postMessage(payload)
    console.debug(
      `[CalcWorker ${this.id}] OUTBOUND ${req.sequenceId} ${WorkerRequestType[req.type]} | ${payload}`,
    )

    return this.pendingPromise.promise
  }

  private onResponse(e: MessageEvent<string>) {
    const data = JSON.parse(e.data, WORKER_JSON_REVIVER) as CalcResponsesUnion
    const { sequenceId, error } = data
    console.debug(
      `[CalcWorker ${this.id}] INBOUND ${sequenceId} ${WorkerRequestType[data.type]} | ${e.data}`,
    )

    if (sequenceId !== this.sequenceId) {
      // another request has been sent off before this one returned
      console.debug(
        `[CalcWorker ${this.id}] Ignoring response ${sequenceId} as stale`,
      )
      return
    }

    // fetch the deferred promise, id must match
    const promise = this.pendingPromise
    if (!promise) {
      console.warn(
        `[CalcWorker ${this.id}] Request ID ${sequenceId} did not have a matching promise!`,
      )
      return
    }
    this.pendingPromise = undefined

    // fail early on error, none of the other properties should be considered valid
    if (error) {
      promise.reject(new Error(error))
      return
    }

    promise.resolve(data)
  }
}



