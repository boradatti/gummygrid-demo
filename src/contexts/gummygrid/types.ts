import type { ReactNode } from "react";

import type { GummyGridConfig } from "gummygrid";
import type GummyGrid from "gummygrid";

export type GummyGridProviderProps = {
  children: ReactNode;
};

export type GummyGridProviderState = {
  generator: GummyGrid;
  reconfig: (cb: GummyGridReconfigCallback) => void;
};

export type GummyGridReconfigCallback = (config: StrictGummyGridConfig) => void;

export type StrictGummyGridConfig = RecursiveRequired<GummyGridConfig>;

type RecursiveRequired<T> = Required<{
  [P in keyof T]: T[P] extends object | undefined
    ? RecursiveRequired<Required<T[P]>>
    : T[P];
}>;
