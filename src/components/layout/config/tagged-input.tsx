import { Input } from "@/components/ui/input";
import clsx from "clsx";
import { FC, ForwardedRef, forwardRef } from "react";

type Props = {
  tag: string;
  value?: number;
  min?: number;
  max?: number;
  onChange?: (val: number) => any;
  size?: "sm" | "md";
};

export const TaggedNumberInput: FC<Props> = forwardRef(
  ({ tag, min, max, value, onChange, size = "md", ...props }, ref) => {
    return (
      <div className="relative w-fit">
        <Input
          className={clsx("textfield h-8", {
            "w-16": size == "md",
            "w-14": size == "sm",
          })}
          type="number"
          min={min}
          max={max}
          value={value}
          onChange={(e) => onChange?.(+e.currentTarget.value)}
          ref={ref as ForwardedRef<HTMLInputElement>}
          {...props}
        />
        <span className="absolute right-2 top-0 grid h-full place-items-center text-neutral-500">
          {tag}
        </span>
      </div>
    );
  },
);
