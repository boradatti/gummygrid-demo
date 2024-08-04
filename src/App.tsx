import PlusIcon from "@/assets/icons/plus.svg?react";

import { Input } from "@/components/ui/input";

import { Checkbox } from "@/components/ui/checkbox";
import { useGummyGrid } from "./contexts/gummygrid/provider";
import { Header } from "@/components/layout/header";
import { AvatarShowcase } from "@/components/layout/avatar-showcase";
import { InputGroup } from "@/components/layout/config/input-group";
import { DimensionsInput } from "@/components/layout/config/dimensions";
import { AreaRatioInput } from "./components/layout/config/area-ratio";
import { RoundingInput } from "./components/layout/config/rounding";
import { DensityInput } from "./components/layout/config/density";

function App() {
  const { ggReconfig } = useGummyGrid();

  return (
    <div className="font-mono md:grid md:h-[100svh] md:place-items-center">
      <div className="mx-auto mt-4 flex w-[95svw] max-w-[60rem] flex-col gap-3">
        <Header />

        <div className="flex gap-7">
          <AvatarShowcase />

          <div className="flex flex-grow gap-24">
            <div className="flex flex-col justify-between">
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

            <div className="flex flex-col justify-between">
              <div className="flex flex-col gap-1">
                <span className="text-neutral-700">colors</span>
                <div className="flex items-center gap-2">
                  <div className="flex items-center gap-1">
                    <div className="h-6 w-6 cursor-pointer border-2 bg-[hsl(12,90%,62%)]"></div>
                    <div className="h-6 w-6 cursor-pointer border-2 bg-[hsl(187,90%,62%)]"></div>
                    <div className="h-6 w-6 cursor-pointer border-2 bg-[hsl(293,63%,51%)]"></div>
                  </div>
                  <button className="group h-6 w-6">
                    <PlusIcon className="w-5 stroke-neutral-600 group-hover:stroke-neutral-800" />
                  </button>
                </div>
              </div>

              <div className="flex flex-col gap-1">
                <span className="text-neutral-700">effects</span>

                <div className="flex flex-col gap-2">
                  <div className="flex items-center gap-2">
                    <Checkbox defaultChecked={true} />
                    <span className="text-sm text-neutral-700">flow</span>
                  </div>

                  <div className="flex items-center gap-2">
                    <Checkbox
                      onCheckedChange={(checked: boolean) => {
                        ggReconfig((config) => {
                          config.grid.verticalSymmetry = checked;
                        });
                      }}
                    />
                    <span className="text-sm text-neutral-700">
                      vertical symmetry
                    </span>
                  </div>

                  <div className="flex items-center gap-2">
                    <Input
                      type="number"
                      defaultValue={0}
                      min={0}
                      max={9}
                      className="h-6 w-6 p-0 pl-2"
                    />
                    <span className="text-sm text-neutral-700">outline</span>
                  </div>

                  <div className="flex items-center gap-2">
                    <Input
                      type="number"
                      defaultValue={0}
                      min={0}
                      max={9}
                      className="h-6 w-6 p-0 pl-2"
                    />
                    <span className="text-sm text-neutral-700">gutter</span>
                  </div>

                  <div className="flex items-center gap-2">
                    <Input
                      type="number"
                      defaultValue={0}
                      min={0}
                      max={9}
                      className="h-6 w-6 p-0 pl-2"
                    />
                    <span className="text-sm text-neutral-700">shadow</span>
                  </div>
                </div>
              </div>

              <div className="flex flex-col gap-1">
                <span className="text-neutral-700">salt</span>
                <Input type="number" className="h-8" defaultValue={42} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
