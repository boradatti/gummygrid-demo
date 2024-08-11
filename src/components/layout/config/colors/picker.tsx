import "./picker.css";
import { Button } from "@/components/ui/button";
import {
  ComponentProps,
  forwardRef,
  useEffect,
  useReducer,
  useRef,
} from "react";
import { HslColorPicker } from "react-colorful";
import { TaggedNumberInput } from "../tagged-input";
import { cn } from "@/lib/utils";
import { HslColorReducer } from "./types";
import { INITIAL_PICKED_COLOR } from "./constants";
import { useLocalForwardedRef } from "@/hooks/use-local-forwarded-ref";
import { convertHslToString } from "./utils";

type Props = ComponentProps<"div"> & {
  onApply: (color: string) => any;
};

export const ColorPicker = forwardRef<HTMLDivElement, Props>(
  ({ onApply, className, ...props }, ref) => {
    const refLocal = useLocalForwardedRef<HTMLDivElement>(ref);

    const [pickedColor, updatePickedColor] = useReducer<HslColorReducer>(
      (color, update) => ({ ...color, ...update }),
      INITIAL_PICKED_COLOR,
    );
    const pickedColorStringRef = useRef<string>(
      convertHslToString(pickedColor),
    );

    useEffect(() => {
      pickedColorStringRef.current = convertHslToString(pickedColor);
    }, [pickedColor]);

    useEffect(() => {
      document.addEventListener("keydown", onKeyboardSubmit);
      return () => document.removeEventListener("keydown", onKeyboardSubmit);
    }, []);

    function onKeyboardSubmit(e: KeyboardEvent) {
      if (!e.ctrlKey || e.key != "Enter") return;
      applyPickedColor();
    }

    function applyPickedColor() {
      onApply(pickedColorStringRef.current);
    }

    return (
      <div
        ref={refLocal}
        className={cn(className, "flex w-fit flex-col gap-3 p-5")}
        {...props}
      >
        <HslColorPicker color={pickedColor} onChange={updatePickedColor} />
        <div className="flex justify-between">
          <TaggedNumberInput
            size="sm"
            tag="h"
            min={0}
            max={360}
            value={pickedColor.h}
            onChangeValue={(h) => updatePickedColor({ h })}
          />
          <TaggedNumberInput
            size="sm"
            tag="s"
            min={0}
            max={100}
            value={pickedColor.s}
            onChangeValue={(s) => updatePickedColor({ s })}
          />
          <TaggedNumberInput
            size="sm"
            tag="l"
            min={0}
            max={100}
            value={pickedColor.l}
            onChangeValue={(l) => updatePickedColor({ l })}
          />
        </div>
        <Button onClick={applyPickedColor} size="sm" variant="default">
          apply
        </Button>
      </div>
    );
  },
);
