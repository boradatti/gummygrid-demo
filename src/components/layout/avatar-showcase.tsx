import { useEffect, useLayoutEffect, useState } from "react";

import { useGummyGrid } from "@/contexts/gummygrid";
import { useTheme } from "@/contexts/theme";
import { getComputedCssProperty } from "@/lib/utils";

import { Input } from "../ui/input";

export const AvatarShowcase = () => {
  const { reconfig: ggReconfig, generator: ggGenerator } = useGummyGrid();
  const [usernameInput, setUsernameInput] = useState("");
  const { theme } = useTheme();

  const svg = ggGenerator.buildFrom(usernameInput);
  const svgDataUrl = svg.toURLEncodedString({ withPrefix: true });

  useLayoutEffect(() => {
    ggReconfig((config) => {
      config.svg.colors.background = [
        `hsl(${getComputedCssProperty("--background")})`,
      ];
    });
  }, [theme, ggReconfig]);

  useEffect(() => {
    (document.getElementById("favicon") as HTMLLinkElement).href = svgDataUrl;
  }, [svgDataUrl]);

  return (
    <div className="flex w-fit flex-col gap-3">
      <div className="border-2 border-solid">
        <img className="w-96 md:w-72" src={svgDataUrl} alt="generated avatar" />
      </div>
      <Input
        placeholder="enter username..."
        value={usernameInput}
        onChange={(e) => setUsernameInput(e.currentTarget.value)}
      />
    </div>
  );
};
