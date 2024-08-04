import { createContext, useContext, useReducer } from "react";
import { GummyGridProviderState, type GummyGridProviderProps } from "./types";
import GummyGrid from "gummygrid";
import {
  INITIAL_GUMMYGRID_CONFIG,
  INITIAL_GUMMYGRID_PROVIDER_STATE,
} from "./constants";
import { ggConfigReducer } from "./utils";

const GummyGridContext = createContext<GummyGridProviderState>(
  INITIAL_GUMMYGRID_PROVIDER_STATE,
);

export const GummyGridProvider = ({
  children,
  ...props
}: GummyGridProviderProps) => {
  const [ggConfig, ggReconfig] = useReducer(
    ggConfigReducer,
    INITIAL_GUMMYGRID_CONFIG,
  );
  const gg = new GummyGrid(ggConfig);

  return (
    <GummyGridContext.Provider {...props} value={{ gg, ggReconfig }}>
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
