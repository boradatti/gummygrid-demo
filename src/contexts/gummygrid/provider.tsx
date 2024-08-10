import { createContext, useContext, useReducer } from "react";
import { GummyGridProviderState, type GummyGridProviderProps } from "./types";
import GummyGrid from "gummygrid";
import {
  INITIAL_GUMMYGRID_CONFIG,
  INITIAL_GUMMYGRID_PROVIDER_STATE,
} from "./constants";
import { gummyGridConfigReducer } from "./utils";

const GummyGridContext = createContext<GummyGridProviderState>(
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

export const useGummyGrid = () => {
  const context = useContext(GummyGridContext);

  if (context === undefined)
    throw new Error("useGummyGrid must be used within a GummyGridProvider");

  return context;
};
