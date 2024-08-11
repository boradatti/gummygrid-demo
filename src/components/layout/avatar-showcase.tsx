import { useLayoutEffect, useState } from "react";
import { Input } from "../ui/input";
import { useGummyGrid } from "@/contexts/gummygrid/provider";
import { useTheme } from "@/contexts/theme";
import { getComputedCssProperty } from "@/lib/utils";

export const AvatarShowcase = () => {
  const gg = useGummyGrid();
  const [usernameInput, setUsernameInput] = useState("");
  const { theme } = useTheme();

  const svg = gg.generator.buildFrom(usernameInput);

  useLayoutEffect(() => {
    gg.reconfig((config) => {
      config.svg.colors.background = [
        `hsl(${getComputedCssProperty("--background")})`,
      ];
    });
  }, [theme]);

  return (
    <div className="flex w-fit flex-col gap-3">
      <div className="border-2 border-solid">
        <img
          className="w-96 md:w-72"
          src={svg.toURLEncodedString({ withPrefix: true })}
          alt="generated avatar"
        />
      </div>
      <Input
        placeholder="enter username..."
        value={usernameInput}
        onChange={(e) => setUsernameInput(e.currentTarget.value)}
      />
    </div>
  );
};
