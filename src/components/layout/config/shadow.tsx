import { useCallback } from "react";

import { useGummyGrid } from "@/contexts/gummygrid";
import { INITIAL_GUMMYGRID_CONFIG } from "@/contexts/gummygrid/constants";

import { ForcedMinMaxInput } from "../forced-min-max-input";

const INITIAL =
  parseFloat(INITIAL_GUMMYGRID_CONFIG.svg.filters.dropShadow[2]) * 2;
const SHADOW_MIN = 0;
const SHADOW_MAX = 9;

export const ShadowInput = () => {
  const { reconfig: ggReconfig } = useGummyGrid();

  const handleValueChange = useCallback(
    (value: number) => {
      ggReconfig((config) => {
        const { dropShadow } = config.svg.filters;
        dropShadow.splice(-1, 1, `${value / 3}px`);
      });
    },
    [ggReconfig],
  );

  return (
    <div className="flex items-center gap-2">
      <ForcedMinMaxInput
        type="number"
        initial={INITIAL}
        min={SHADOW_MIN}
        max={SHADOW_MAX}
        className="h-6 w-6 p-0 pl-2"
        onChangeValue={handleValueChange}
      />
      <span className="text-sm text-neutral-700">shadow</span>
    </div>
  );
};
