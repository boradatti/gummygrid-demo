import { ComponentProps, forwardRef } from "react";

import clsx from "clsx";

import { ForcedMinMaxInput } from "../forced-min-max-input";

type Props = Omit<ComponentProps<"input">, "size"> & {
  tag: string;
  value?: number;
  min?: number;
  max?: number;
  onChangeValue?: (val: number) => unknown;
  size?: "sm" | "md";
};

export const TaggedNumberInput = forwardRef<HTMLInputElement, Props>(
  ({ tag, min, max, value, onChangeValue, size = "md", ...props }, ref) => {
    return (
      <div className="relative w-fit">
        <ForcedMinMaxInput
          className={clsx("textfield h-8", {
            "w-16 p-3": size == "md",
            "w-14 p-2": size == "sm",
          })}
          initial={value ?? 0}
          min={min ?? -Infinity}
          max={max ?? Infinity}
          onChangeValue={onChangeValue}
          ref={ref}
          {...props}
        />
        <span className="absolute right-2 top-0 grid h-full place-items-center text-neutral-500">
          {tag}
        </span>
      </div>
    );
  },
);

TaggedNumberInput.displayName = "TaggedNumberInput";
