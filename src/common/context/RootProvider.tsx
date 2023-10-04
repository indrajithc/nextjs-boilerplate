"use client";

import { RootState, RootProviderProps, ReactChildren } from "@lib/types";
import { createContext, useContext, useState, useCallback } from "react";

// Create the context.
const RootContext = createContext({} as RootProviderProps);

// Create a custom hook to use the context.
export function useRootContext() {
  return useContext(RootContext);
}

/**
 * The RootProvider component.
 */
const RootProvider = ({ children }: ReactChildren) => {
  const [state, setState] = useState<RootState>({
    isOpenSideBar: false,
  });

  const updateOpenSideBar = useCallback((status: Boolean) => {
    setState((prevState) => ({
      ...prevState,
      isOpenSideBar: status,
    }));
  }, []);

  return <RootContext.Provider value={{ ...state, updateOpenSideBar }}>{children}</RootContext.Provider>;
};

export default RootProvider;
