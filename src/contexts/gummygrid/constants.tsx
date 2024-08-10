import { GummyGridProviderState, StrictGummyGridConfig } from "./types";
import GummyGrid from "gummygrid";
import { darkenColors } from "@/lib/utils";

const cellColors = [
  "hsl(12, 90%, 62%)",
  "hsl(187, 60%, 52%)",
  "hsl(293, 63%, 51%)",
  "hsl(94, 21%, 62%)",
];
const cellColorsDarkened = darkenColors(cellColors);

export const INITIAL_GUMMYGRID_CONFIG: StrictGummyGridConfig = {
  randomizer: {
    salt: 0,
    bias: {
      cellFillProbability: 0.5,
      // @ts-ignore
      colorWeights: {},
    },
  },
  grid: {
    size: {
      rows: 5,
      columns: 5,
    },
    ensureFill: {
      topBottom: true,
      leftRight: true,
    },
    verticalSymmetry: false,
  },
  svg: {
    patternAreaRatio: 0.85,
    colors: {
      background: ["#ededfe"],
      cellFill: cellColors,
      cellStroke: cellColorsDarkened,
      dropShadow: cellColorsDarkened,
    },
    lockColors: ["cellFill", "cellStroke", "dropShadow"],
    cellRounding: {
      outer: 0,
      inner: 0,
    },
    gutter: 0,
    flow: true,
    strokeWidth: 0.5,
    // @ts-ignore
    filters: {
      dropShadow: ["0", "0", "0.5px"],
    },
    paintOrder: "stroke",
    strokeLineJoin: "miter",
  },
};

export const INITIAL_GUMMYGRID_PROVIDER_STATE: GummyGridProviderState = {
  generator: new GummyGrid(INITIAL_GUMMYGRID_CONFIG),
  reconfig: () => {},
};
