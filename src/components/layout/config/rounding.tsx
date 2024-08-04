import { useEffect, useReducer } from "react";
import { TaggedNumberInput } from "./tagged-input";
import { INITIAL_GUMMYGRID_CONFIG } from "@/contexts/gummygrid/constants";
import { useGummyGrid } from "@/contexts/gummygrid/provider";

const INITIAL_ROUNDING = {
  outer: INITIAL_GUMMYGRID_CONFIG.svg.cellRounding.outer * 100,
  inner: INITIAL_GUMMYGRID_CONFIG.svg.cellRounding.inner * 100,
};

type Rounding = typeof INITIAL_ROUNDING;

export const RoundingInput = () => {
  const [rounding, changeRounding] = useReducer(
    (rounding: Rounding, update: Partial<Rounding>) => ({
      ...rounding,
      ...update,
    }),
    INITIAL_ROUNDING,
  );
  const { ggReconfig } = useGummyGrid();

  useEffect(() => {
    ggReconfig((config) => {
      config.svg.cellRounding = {
        outer: rounding.outer / 100,
        inner: rounding.inner / 100,
      };
    });
  }, [rounding]);

  return (
    <div className="flex flex-col gap-2">
      <div className="flex items-center gap-2">
        <TaggedNumberInput
          tag="%"
          min={0}
          max={100}
          value={rounding.outer}
          onChange={(outer) => changeRounding({ outer })}
        />
        <div className="h-[0.5px] w-3 bg-neutral-300"></div>
        <span className="text-neutral-700">outer</span>
      </div>
      <div className="flex items-center gap-2">
        <TaggedNumberInput
          tag="%"
          min={0}
          max={100}
          value={rounding.inner}
          onChange={(inner) => changeRounding({ inner })}
        />
        <div className="h-[0.5px] w-3 bg-neutral-300"></div>
        <span className="text-neutral-700">inner</span>
      </div>
    </div>
  );
};
