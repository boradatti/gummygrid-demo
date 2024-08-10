import type { GummyGridReconfigCallback, StrictGummyGridConfig } from "./types";

export function gummyGridConfigReducer(
  state: StrictGummyGridConfig,
  callback: GummyGridReconfigCallback,
) {
  callback(state);
  return structuredClone(state);
}
