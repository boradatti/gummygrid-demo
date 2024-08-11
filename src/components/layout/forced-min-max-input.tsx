import { forwardRef, useEffect, useReducer, type ComponentProps } from "react";
import { Input } from "@/components/ui/input";

type Props = Exclude<ComponentProps<"input">, "type" | "value"> & {
  initial: number;
  min: number;
  max: number;
  onChangeValue?: (value: number) => any;
};

export const ForcedMinMaxInput = forwardRef<HTMLInputElement, Props>(
  (
    {
      initial,
      min,
      max,
      onInput,
      onChange,
      onChangeValue,
      type: _type,
      value: _value,
      ...props
    },
    ref,
  ) => {
    const [value, setValue] = useReducer((_cur: number, newValue: number) => {
      if (newValue < min) return min;
      if (newValue > max) return max;
      return newValue;
    }, initial);

    useEffect(() => {
      setValue(initial);
    }, [initial]);

    useEffect(() => {
      onChangeValue?.(value);
    }, [value]);

    return (
      <Input
        type="number"
        value={value}
        onInput={(e) => {
          onInput?.(e);
          e.currentTarget.value = e.currentTarget.value.replace(/^0+/, "");
        }}
        onChange={(e) => {
          onChange?.(e);
          setValue(+e.target.value);
        }}
        ref={ref}
        {...props}
      />
    );
  },
);
