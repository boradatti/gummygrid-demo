import { FC, useEffect, useState } from "react";
import { TaggedNumberInput } from "./tagged-input";
import { INITIAL_GUMMYGRID_CONFIG } from "@/contexts/gummygrid/constants";
import { useGummyGrid } from "@/contexts/gummygrid";

export const AreaRatioInput: FC = () => {
  const [ratio, setRatio] = useState(
    INITIAL_GUMMYGRID_CONFIG.svg.patternAreaRatio * 100,
  );
  const { reconfig: ggReconfig } = useGummyGrid();

  useEffect(() => {
    ggReconfig((config) => {
      config.svg.patternAreaRatio = ratio / 100;
    });
  }, [ratio, ggReconfig]);

  return (
    <TaggedNumberInput
      tag="%"
      min={1}
      max={100}
      value={ratio}
      onChangeValue={setRatio}
    />
  );
};
