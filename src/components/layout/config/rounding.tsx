import { useCallback, useEffect, useReducer } from "react";

import { useGummyGrid } from "@/contexts/gummygrid";
import { INITIAL_GUMMYGRID_CONFIG } from "@/contexts/gummygrid/constants";

import { TaggedNumberInput } from "./tagged-input";

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
  const { reconfig: ggReconfig } = useGummyGrid();

  useEffect(() => {
    ggReconfig((config) => {
      config.svg.cellRounding = {
        outer: rounding.outer / 100,
        inner: rounding.inner / 100,
      };
    });
  }, [rounding, ggReconfig]);

  return (
    <div className="flex flex-col gap-2">
      <div className="flex items-center gap-2">
        <TaggedNumberInput
          tag="%"
          min={0}
          max={100}
          value={rounding.outer}
          onChangeValue={useCallback(
            (outer: number) => changeRounding({ outer }),
            [],
          )}
        />
        <span className="text-sm text-neutral-700">outer</span>
      </div>
      <div className="flex items-center gap-2">
        <TaggedNumberInput
          tag="%"
          min={0}
          max={100}
          value={rounding.inner}
          onChangeValue={useCallback(
            (inner: number) => changeRounding({ inner }),
            [],
          )}
        />
        <span className="text-sm text-neutral-700">inner</span>
      </div>
    </div>
  );
};
