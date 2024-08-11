import "./picker.css";
import { Button } from "@/components/ui/button";
import {
  ComponentProps,
  forwardRef,
  useCallback,
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
  onApply: (color: string) => unknown;
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

    const applyPickedColor = useCallback(() => {
      onApply(pickedColorStringRef.current);
    }, [onApply]);

    useEffect(() => {
      pickedColorStringRef.current = convertHslToString(pickedColor);
    }, [pickedColor]);

    useEffect(() => {
      const keyboardSubmit = (e: KeyboardEvent) => {
        if (!e.ctrlKey || e.key != "Enter") return;
        applyPickedColor();
      };
      document.addEventListener("keydown", keyboardSubmit);
      return () => document.removeEventListener("keydown", keyboardSubmit);
    }, [applyPickedColor]);

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
            onChangeValue={useCallback(
              (h: number) => updatePickedColor({ h }),
              [],
            )}
          />
          <TaggedNumberInput
            size="sm"
            tag="s"
            min={0}
            max={100}
            value={pickedColor.s}
            onChangeValue={useCallback(
              (s: number) => updatePickedColor({ s }),
              [],
            )}
          />
          <TaggedNumberInput
            size="sm"
            tag="l"
            min={0}
            max={100}
            value={pickedColor.l}
            onChangeValue={useCallback(
              (l: number) => updatePickedColor({ l }),
              [],
            )}
          />
        </div>
        <Button onClick={applyPickedColor} size="sm" variant="default">
          apply
        </Button>
      </div>
    );
  },
);
ColorPicker.displayName = "ColorPicker";
