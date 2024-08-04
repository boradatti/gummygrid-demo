import type { GummyGridConfig } from "gummygrid";
import type GummyGrid from "gummygrid";
import type { ReactNode } from "react";

export type GummyGridProviderProps = {
  children: ReactNode;
};

export type GummyGridProviderState = {
  gg: GummyGrid;
  ggReconfig: (cb: GummyGridReconfigCallback) => void;
};

export type GummyGridReconfigCallback = (config: StrictGummyGridConfig) => void;

export type StrictGummyGridConfig = RecursiveRequired<GummyGridConfig>;

type RecursiveRequired<T> = Required<{
  [P in keyof T]: T[P] extends object | undefined
    ? RecursiveRequired<Required<T[P]>>
    : T[P];
}>;
