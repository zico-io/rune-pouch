import { useContext } from "react";
import { CalcContext } from "./Context";
import { CalcWorker } from "./Worker";
import { CalcProvider } from "./Provider";

const useCalc = () => useContext(CalcContext)

export { useCalc, CalcProvider, CalcWorker }
