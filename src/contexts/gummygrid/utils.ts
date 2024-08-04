import type { GummyGridReconfigCallback, StrictGummyGridConfig } from "./types";

export function ggConfigReducer(
  state: StrictGummyGridConfig,
  callback: GummyGridReconfigCallback,
) {
  callback(state);
  return structuredClone(state);
}
