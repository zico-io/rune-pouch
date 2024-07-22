import { useEffect, useState } from "react"
import { CalcContext } from "./Context"
import { CalcWorker } from "./Worker"

export const CalcProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [worker] = useState<CalcWorker>(new CalcWorker())
  useEffect(() => {
    worker.initWorker()
    return () => worker.shutdown()
  }, []) // eslint-disable-line react-hooks/exhaustive-deps

  return <CalcContext.Provider value={worker}>{children}</CalcContext.Provider>
}

