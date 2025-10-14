import { useContext } from "react";
import AppContext from "./AppContext";

export function useAppContext() {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error("useAppContext deve ser usado dentro de um AppContext.Provider");
  }
  return context;
}
