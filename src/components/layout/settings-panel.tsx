import { AreaRatioInput } from "./config/area-ratio";
import { ColorsInput } from "./config/colors";
import { DensityInput } from "./config/density";
import { DimensionsInput } from "./config/dimensions";
import { FlowInput } from "./config/flow";
import { GutterInput } from "./config/gutter";
import { OutlineInput } from "./config/outline";
import { RoundingInput } from "./config/rounding";
import { SaltInput } from "./config/salt";
import { ShadowInput } from "./config/shadow";
import { VerticalSymmetryInput } from "./config/vertical-symmetry";
import { InputGroup } from "./input-group";

export const SettingsPanel = () => (
  <div className="scrollbar-mini mb-4 flex max-h-96 flex-grow flex-col justify-between gap-3 overflow-y-auto border-[1px] px-3 py-2 pb-4 md:m-0 md:max-h-none md:flex-row md:gap-0 md:overflow-visible md:border-none md:p-0">
    <div className="flex flex-col justify-between gap-3 md:gap-0">
      <InputGroup label="dimensions">
        <DimensionsInput />
      </InputGroup>

      <InputGroup label="area ratio">
        <AreaRatioInput />
      </InputGroup>

      <InputGroup label="rounding">
        <RoundingInput />
      </InputGroup>

      <InputGroup label="density">
        <DensityInput />
      </InputGroup>
    </div>

    <div className="flex flex-col justify-between gap-3 md:gap-0">
      <InputGroup label="colors">
        <ColorsInput />
      </InputGroup>

      <InputGroup label="effects">
        <div className="flex flex-col gap-2">
          <FlowInput />
          <VerticalSymmetryInput />
          <OutlineInput />
          <GutterInput />
          <ShadowInput />
        </div>
      </InputGroup>

      <InputGroup label="salt">
        <SaltInput />
      </InputGroup>
    </div>
  </div>
);
