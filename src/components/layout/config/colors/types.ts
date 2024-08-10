import type { HslColor } from "react-colorful";

export type ColorsReducer = (
  colors: string[],
  action: ColorsReducerAction,
) => string[];

type ColorsReducerAction =
  | { type: "ADD"; color: string }
  | {
      type: "DELETE";
      idx: number;
    };

export type HslColorReducer = (
  color: HslColor,
  update: Partial<HslColor>,
) => HslColor;
