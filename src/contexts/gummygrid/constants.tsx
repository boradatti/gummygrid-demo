import { GummyGridProviderState, StrictGummyGridConfig } from "./types";
import GummyGrid from "gummygrid";

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
    patternAreaRatio: 0.75,
    colors: {
      background: ["#ededfe"],
      cellFill: [
        "#019244",
        "#11adc8",
        "#2e3192",
        "#3aa17e",
        "#3e72bd",
        "#4f00bc",
        "#662d8c",
        "#8e78ff",
        "#d4145a",
        "#ed1f26",
        "#fbb03b",
        "#fd811d",
      ],
      cellStroke: [],
      dropShadow: [],
    },
    lockColors: [],
    cellRounding: {
      outer: 0,
      inner: 0,
    },
    gutter: 0,
    flow: true,
    strokeWidth: 0,
    // @ts-ignore
    filters: {
      dropShadow: ["0", "0", "0px"],
    },
    paintOrder: "stroke",
    strokeLineJoin: "miter",
  },
};

export const INITIAL_GUMMYGRID_PROVIDER_STATE: GummyGridProviderState = {
  gg: new GummyGrid(INITIAL_GUMMYGRID_CONFIG),
  ggReconfig: () => {},
};
