import { useCallback } from "react";

import { useGummyGrid } from "@/contexts/gummygrid";
import { INITIAL_GUMMYGRID_CONFIG } from "@/contexts/gummygrid/constants";

import { ForcedMinMaxInput } from "../forced-min-max-input";

const INITIAL = INITIAL_GUMMYGRID_CONFIG.svg.gutter;
const GUTTER_MIN = 0;
const GUTTER_MAX = 9;

export const GutterInput = () => {
  const { reconfig: ggReconfig } = useGummyGrid();

  const handleValueChange = useCallback(
    (value: number) => {
      ggReconfig((config) => {
        config.svg.gutter = value / 2;
      });
    },
    [ggReconfig],
  );

  return (
    <div className="flex items-center gap-2">
      <ForcedMinMaxInput
        type="number"
        initial={INITIAL}
        min={GUTTER_MIN}
        max={GUTTER_MAX}
        className="h-6 w-6 p-0 pl-2"
        onChangeValue={handleValueChange}
      />
      <span className="text-sm text-neutral-700">gutter</span>
    </div>
  );
};
