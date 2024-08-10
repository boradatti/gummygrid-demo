import { Input } from "@/components/ui/input";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { useGummyGrid } from "@/contexts/gummygrid/provider";

export const SaltInput = () => {
  const gg = useGummyGrid();

  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <Input
            type="number"
            className="h-8"
            defaultValue={42}
            onChange={(e) => {
              gg.reconfig((config) => {
                config.randomizer.salt = +e.target.value;
              });
            }}
          />
        </TooltipTrigger>
        <TooltipContent side="bottom" align="start" sideOffset={6}>
          determines how the grid is generated
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};
