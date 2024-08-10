import { Checkbox } from "@/components/ui/checkbox";
import { INITIAL_GUMMYGRID_CONFIG } from "@/contexts/gummygrid/constants";
import { useGummyGrid } from "@/contexts/gummygrid/provider";

const INITIAL = INITIAL_GUMMYGRID_CONFIG.svg.flow;

export const FlowInput = () => {
  const gg = useGummyGrid();

  return (
    <div className="flex items-center gap-2">
      <Checkbox
        defaultChecked={INITIAL}
        onCheckedChange={(checked: boolean) => {
          gg.reconfig((config) => {
            config.svg.flow = checked;
          });
        }}
      />
      <span className="text-sm text-neutral-700">flow</span>
    </div>
  );
};
