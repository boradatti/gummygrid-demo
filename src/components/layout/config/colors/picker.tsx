import "./picker.css";
import { Button } from "@/components/ui/button";
import { ComponentProps, forwardRef, useReducer } from "react";
import { HslColorPicker } from "react-colorful";
import { TaggedNumberInput } from "../tagged-input";
import { cn } from "@/lib/utils";
import { HslColorReducer } from "./types";
import { INITIAL_PICKED_COLOR } from "./constants";

type Props = ComponentProps<"div"> & {
  onApply: (color: string) => any;
};

export const ColorPicker = forwardRef<HTMLDivElement, Props>(
  ({ onApply, className, ...props }, ref) => {
    const [pickedColor, updatePickedColor] = useReducer<HslColorReducer>(
      (color, update) => ({ ...color, ...update }),
      INITIAL_PICKED_COLOR,
    );

    return (
      <div
        className={cn(className, "flex w-fit flex-col gap-3 p-5")}
        {...props}
        ref={ref}
      >
        <HslColorPicker color={pickedColor} onChange={updatePickedColor} />
        <div className="flex justify-between">
          <TaggedNumberInput
            size="sm"
            tag="h"
            min={0}
            max={360}
            value={pickedColor.h}
            onChange={(h) => updatePickedColor({ h })}
          />
          <TaggedNumberInput
            size="sm"
            tag="s"
            min={0}
            max={100}
            value={pickedColor.s}
            onChange={(s) => updatePickedColor({ s })}
          />
          <TaggedNumberInput
            size="sm"
            tag="l"
            min={0}
            max={100}
            value={pickedColor.l}
            onChange={(l) => updatePickedColor({ l })}
          />
        </div>
        <Button
          onClick={() =>
            onApply(
              `hsl(${pickedColor.h}, ${pickedColor.s}%, ${pickedColor.l}%)`,
            )
          }
          size="sm"
          variant="default"
        >
          apply
        </Button>
      </div>
    );
  },
);
