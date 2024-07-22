import { createContext } from "react";

export const CalcContext = createContext<CalcWorker>(
  // no default context is available, since we can't register a teardown method without useEffect
  undefined as unknown as CalcWorker,
)

