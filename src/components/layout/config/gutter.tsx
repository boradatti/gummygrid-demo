import { INITIAL_GUMMYGRID_CONFIG } from "@/contexts/gummygrid/constants";
import { useGummyGrid } from "@/contexts/gummygrid/provider";
import { ForcedMinMaxInput } from "../forced-min-max-input";

const INITIAL = INITIAL_GUMMYGRID_CONFIG.svg.gutter;
const GUTTER_MIN = 0;
const GUTTER_MAX = 9;

export const GutterInput = () => {
  const gg = useGummyGrid();

  return (
    <div className="flex items-center gap-2">
      <ForcedMinMaxInput
        type="number"
        initial={INITIAL}
        min={GUTTER_MIN}
        max={GUTTER_MAX}
        className="h-6 w-6 p-0 pl-2"
        onChangeValue={(value) => {
          gg.reconfig((config) => {
            config.svg.gutter = value / 2;
          });
        }}
      />
      <span className="text-sm text-neutral-700">gutter</span>
    </div>
  );
};
