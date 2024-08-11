import { createContext, useReducer } from "react";
import { GummyGridProviderState, type GummyGridProviderProps } from "./types";
import GummyGrid from "gummygrid";
import {
  INITIAL_GUMMYGRID_CONFIG,
  INITIAL_GUMMYGRID_PROVIDER_STATE,
} from "./constants";
import { gummyGridConfigReducer } from "./utils";

export const GummyGridContext = createContext<GummyGridProviderState>(
  INITIAL_GUMMYGRID_PROVIDER_STATE,
);

export const GummyGridProvider = ({
  children,
  ...props
}: GummyGridProviderProps) => {
  const [config, reconfig] = useReducer(
    gummyGridConfigReducer,
    INITIAL_GUMMYGRID_CONFIG,
  );
  const generator = new GummyGrid(config);

  return (
    <GummyGridContext.Provider {...props} value={{ generator, reconfig }}>
      {children}
    </GummyGridContext.Provider>
  );
};
