import { useContext } from "react";

import { TailwindConfigContext } from "./provider";

export const useTailwindConfig = () => {
  return useContext(TailwindConfigContext);
};
