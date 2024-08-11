import { useContext } from "react";
import { GummyGridContext } from "./provider";

export const useGummyGrid = () => {
  const context = useContext(GummyGridContext);

  if (context === undefined)
    throw new Error("useGummyGrid must be used within a GummyGridProvider");

  return context;
};
