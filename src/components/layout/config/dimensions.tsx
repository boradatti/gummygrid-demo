import LinkIcon from "@/assets/icons/link.svg?react";
import UnlinkIcon from "@/assets/icons/unlink.svg?react";
import { type FC, useEffect, useReducer } from "react";
import { TaggedNumberInput } from "./tagged-input";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { useGummyGrid } from "@/contexts/gummygrid/provider";

type Dimensions = { width: number; height: number };
type Dimension = keyof Dimensions;
const INITIAL_DIMENSIONS = { width: 5, height: 5 };

export const DimensionsInput: FC = () => {
  const [locked, toggleLocked] = useReducer((locked) => !locked, false);
  const [dimensions, changeDimensions] = useReducer(
    (state: Dimensions, update: Partial<Dimensions>) => {
      const newValue = (update.width ?? update.height)!;
      if (locked)
        return {
          width: newValue,
          height: newValue,
        };
      const changedKey = Object.keys(update).find(
        (key) => update[key as Dimension],
      );
      return {
        ...state,
        [changedKey as Dimension]: newValue,
      };
    },
    INITIAL_DIMENSIONS,
  );
  const { ggReconfig } = useGummyGrid();

  useEffect(() => {
    if (locked) {
      changeDimensions({
        height: dimensions.width,
      });
    }
  }, [locked]);

  useEffect(() => {
    ggReconfig((config) => {
      config.grid.size = {
        rows: dimensions.height,
        columns: dimensions.width,
      };
    });
  }, [dimensions]);

  let LockIcon = LinkIcon;
  let lockTooltipText = "link values";
  if (locked) {
    LockIcon = UnlinkIcon;
    lockTooltipText = "unlink values";
  }

  return (
    <div className="flex items-center gap-2">
      <TaggedNumberInput
        tag="w"
        value={dimensions.width}
        onChange={(width) => changeDimensions({ width })}
        min={0}
        size="sm"
      />
      <TaggedNumberInput
        tag="h"
        value={dimensions.height}
        onChange={(height) => changeDimensions({ height })}
        min={0}
        size="sm"
      />

      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <button className="group" onClick={toggleLocked}>
              <LockIcon className="w-5 -rotate-45 cursor-pointer stroke-neutral-600 group-hover:stroke-neutral-800" />
            </button>
          </TooltipTrigger>
          <TooltipContent className="mb-1">{lockTooltipText}</TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </div>
  );
};
