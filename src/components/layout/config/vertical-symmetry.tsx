import { Checkbox } from "@/components/ui/checkbox";
import { INITIAL_GUMMYGRID_CONFIG } from "@/contexts/gummygrid/constants";
import { useGummyGrid } from "@/contexts/gummygrid";

const INITIAL = INITIAL_GUMMYGRID_CONFIG.grid.verticalSymmetry;

export const VerticalSymmetryInput = () => {
  const gg = useGummyGrid();

  return (
    <div className="flex items-center gap-2">
      <Checkbox
        defaultChecked={INITIAL}
        onCheckedChange={(checked: boolean) => {
          gg.reconfig((config) => {
            config.grid.verticalSymmetry = checked;
          });
        }}
      />
      <span className="text-sm text-neutral-700">vertical symmetry</span>
    </div>
  );
};
