import { INITIAL_GUMMYGRID_CONFIG } from "@/contexts/gummygrid/constants";
import { useGummyGrid } from "@/contexts/gummygrid/provider";
import { ForcedMinMaxInput } from "../forced-min-max-input";

const INITIAL = INITIAL_GUMMYGRID_CONFIG.svg.strokeWidth * 2;
const OUTLINE_MIN = 0;
const OUTLINE_MAX = 9;

export const OutlineInput = () => {
  const gg = useGummyGrid();

  return (
    <div className="flex items-center gap-2">
      <ForcedMinMaxInput
        id="thingy"
        type="number"
        initial={INITIAL}
        min={OUTLINE_MIN}
        max={OUTLINE_MAX}
        className="h-6 w-6 p-0 pl-2"
        onChangeValue={(value) => {
          gg.reconfig((config) => {
            config.svg.strokeWidth = value / 2;
          });
        }}
      />
      <span className="text-sm text-neutral-700">outline</span>
    </div>
  );
};
