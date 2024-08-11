import { type FC, useCallback, useEffect, useReducer } from "react";

import LinkIcon from "@/assets/icons/link.svg?react";
import UnlinkIcon from "@/assets/icons/unlink.svg?react";

import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import { useGummyGrid } from "@/contexts/gummygrid";
import { INITIAL_GUMMYGRID_CONFIG } from "@/contexts/gummygrid/constants";

import { TaggedNumberInput } from "./tagged-input";

type GridSize = { rows: number; columns: number };
type Dimensions = { width: number; height: number };
type Dimension = keyof Dimensions;

const GRID_SIZE_CONFIG = INITIAL_GUMMYGRID_CONFIG.grid.size as GridSize;
const INITIAL_DIMENSIONS = {
  width: GRID_SIZE_CONFIG.rows,
  height: GRID_SIZE_CONFIG.columns,
};

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
  const { reconfig: ggReconfig } = useGummyGrid();

  useEffect(() => {
    if (locked) {
      changeDimensions({
        height: dimensions.width,
      });
    }
  }, [locked, dimensions.width]);

  useEffect(() => {
    ggReconfig((config) => {
      config.grid.size = {
        rows: dimensions.height,
        columns: dimensions.width,
      };
    });
  }, [dimensions.height, dimensions.width, ggReconfig]);

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
        onChangeValue={useCallback(
          (width: number) => changeDimensions({ width }),
          [],
        )}
        min={1}
        size="sm"
      />
      <TaggedNumberInput
        tag="h"
        value={dimensions.height}
        onChangeValue={useCallback(
          (height: number) => changeDimensions({ height }),
          [],
        )}
        min={1}
        size="sm"
      />

      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <Button
              className="group h-8 w-8"
              size="icon"
              variant="ghost"
              onClick={toggleLocked}
            >
              <LockIcon className="w-5 -rotate-45 cursor-pointer stroke-neutral-600 group-hover:stroke-neutral-800" />
            </Button>
          </TooltipTrigger>
          <TooltipContent className="mb-1">{lockTooltipText}</TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </div>
  );
};
