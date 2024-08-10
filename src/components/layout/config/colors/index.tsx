import PlusIcon from "@/assets/icons/plus.svg?react";
import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { ColorPicker } from "./picker";
import { useEffect, useReducer, useRef, useState } from "react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { useGummyGrid } from "@/contexts/gummygrid/provider";
import { ColorsReducer } from "./types";
import { colorsReducer } from "./utils";
import { PickedColor } from "./picked-color";
import { DEFAULT_PICKED_COLORS, MAX_PICKED_COLORS } from "./constants";
import { darkenColors } from "@/lib/utils";

export const ColorsInput = () => {
  const [pickerOpen, setPickerOpen] = useState(false);
  const [pickerDisabledTooltipOpen, setPickerDisabledTooltipOpen] =
    useState(false);
  const [colors, updateColors] = useReducer<ColorsReducer>(
    colorsReducer,
    DEFAULT_PICKED_COLORS,
  );
  const canAddColors = colors.length < MAX_PICKED_COLORS;
  const canDeleteColors = colors.length > 1;
  const gg = useGummyGrid();
  const addColorBtnRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    gg.reconfig((config) => {
      const colorsDarkened = darkenColors(colors);
      config.svg.colors.cellFill = colors;
      config.svg.colors.cellStroke = colorsDarkened;
      config.svg.colors.dropShadow = colorsDarkened;
    });
  }, [colors]);

  return (
    <div className="flex items-center gap-1">
      <div className="flex items-center gap-1">
        {colors.map((color, idx) => (
          <PickedColor
            key={idx}
            color={color}
            canDeleteColors={canDeleteColors}
            onClick={() => {
              updateColors({ type: "DELETE", idx });
              addColorBtnRef.current!.focus();
            }}
          />
        ))}
      </div>

      <Popover
        open={pickerOpen}
        onOpenChange={(open) => setPickerOpen(open && canAddColors)}
      >
        <TooltipProvider>
          <Tooltip open={pickerDisabledTooltipOpen}>
            <TooltipTrigger asChild>
              <PopoverTrigger asChild>
                <span
                  tabIndex={canAddColors ? -1 : 0}
                  onMouseOver={() =>
                    setPickerDisabledTooltipOpen(!canAddColors)
                  }
                  onFocus={() => setPickerDisabledTooltipOpen(!canAddColors)}
                  onMouseOut={() => setPickerDisabledTooltipOpen(false)}
                  onBlur={() => setPickerDisabledTooltipOpen(false)}
                  className="flex focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                >
                  <Button
                    ref={addColorBtnRef}
                    tabIndex={canAddColors ? 0 : -1}
                    disabled={!canAddColors}
                    className="group h-6 w-6"
                    variant="ghost"
                    size="icon"
                  >
                    <PlusIcon className="w-5 stroke-neutral-600 group-hover:stroke-neutral-800" />
                  </Button>
                </span>
              </PopoverTrigger>
            </TooltipTrigger>
            <TooltipContent>
              no more than {MAX_PICKED_COLORS} colors allowed in this demo
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>

        <PopoverContent
          asChild
          sideOffset={10}
          onCloseAutoFocus={(e) => {
            e.preventDefault();
            if (canAddColors) addColorBtnRef.current!.focus();
          }}
        >
          <ColorPicker
            onApply={(color) => {
              updateColors({ type: "ADD", color });
              setPickerOpen(false);
            }}
          />
        </PopoverContent>
      </Popover>
    </div>
  );
};
