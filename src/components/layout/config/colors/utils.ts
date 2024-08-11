import type { HslColor } from "react-colorful";

import { ColorsReducer } from "./types";

export const colorsReducer: ColorsReducer = (colors, action) => {
  switch (action.type) {
    case "ADD": {
      return [...colors, action.color];
    }
    case "DELETE": {
      return [
        ...colors.slice(0, action.idx),
        ...colors.slice(action.idx + 1, colors.length),
      ];
    }
    default: {
      // @ts-expect-error • shouldn't be reached
      throw new Error(`Unhandled action type: ${action.type}`);
    }
  }
};

export function convertHslToString(color: HslColor) {
  return `hsl(${color.h}, ${color.s}%, ${color.l}%)`;
}
