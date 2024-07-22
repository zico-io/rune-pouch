import { useContext } from 'react'
import { GlobalState } from './GlobalState'
import { StoreContext, StoreProvider } from './StoreProvider'

const useStore = () => useContext(StoreContext)
export { GlobalState, StoreProvider, useStore }
