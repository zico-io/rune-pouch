import { createContext } from "react"
import { GlobalState } from "./GlobalState"

export const StoreContext = createContext<GlobalState>(new GlobalState())

export const StoreProvider: React.FC<{
  store: GlobalState
  children: React.ReactNode
}> = ({ store, children }) => (
  <StoreContext.Provider value={store}>{children}</StoreContext.Provider>
)

