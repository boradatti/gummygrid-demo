import { useEffect, useState } from "react";
import { TaggedNumberInput } from "./tagged-input";
import { INITIAL_GUMMYGRID_CONFIG } from "@/contexts/gummygrid/constants";
import { useGummyGrid } from "@/contexts/gummygrid";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const INITIAL_DENSITY =
  INITIAL_GUMMYGRID_CONFIG.randomizer.bias.cellFillProbability * 100;

export const DensityInput = () => {
  const [density, setDensity] = useState(INITIAL_DENSITY);
  const { reconfig: ggReconfig } = useGummyGrid();

  useEffect(() => {
    ggReconfig((config) => {
      config.randomizer.bias.cellFillProbability = density / 100;
    });
  }, [density, ggReconfig]);

  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <TaggedNumberInput
            tag="%"
            min={1}
            max={100}
            value={density}
            onChangeValue={setDensity}
          />
        </TooltipTrigger>
        <TooltipContent side="bottom" align="start" sideOffset={6}>
          sets how likely a cell is to be filled
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};
