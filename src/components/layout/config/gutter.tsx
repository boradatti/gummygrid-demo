import { Input } from "@/components/ui/input";
import { INITIAL_GUMMYGRID_CONFIG } from "@/contexts/gummygrid/constants";
import { useGummyGrid } from "@/contexts/gummygrid/provider";

const INITIAL = INITIAL_GUMMYGRID_CONFIG.svg.gutter;

export const GutterInput = () => {
  const { ggReconfig } = useGummyGrid();

  return (
    <div className="flex items-center gap-2">
      <Input
        type="number"
        defaultValue={INITIAL}
        min={0}
        max={9}
        className="h-6 w-6 p-0 pl-2"
        onChange={(e) => {
          ggReconfig((config) => {
            config.svg.gutter = +e.target.value / 2;
          });
        }}
      />
      <span className="text-sm text-neutral-700">gutter</span>
    </div>
  );
};
