import { INITIAL_GUMMYGRID_CONFIG } from "@/contexts/gummygrid/constants";

export const DEFAULT_PICKED_COLORS = INITIAL_GUMMYGRID_CONFIG.svg.colors
  .cellFill as string[];

export const MAX_PICKED_COLORS = 5;

export const INITIAL_PICKED_COLOR = {
  h: 221,
  s: 77,
  l: 48,
};
