import { useEffect, useState } from "react";
import { Input } from "../ui/input";
import { useGummyGrid } from "@/contexts/gummygrid/provider";
import { useTheme } from "@/contexts/theme";
import { Theme } from "@/contexts/theme/types";

const BACKGROUND_COLORS_BY_THEME: Record<Theme, string> = {
  dark: "white",
  light: "black",
};

export const AvatarShowcase = () => {
  const gg = useGummyGrid();
  const [usernameInput, setUsernameInput] = useState("");
  const { theme } = useTheme();

  const svg = gg.generator.buildFrom(usernameInput);

  useEffect(() => {
    gg.reconfig((config) => {
      config.svg.colors.background = [BACKGROUND_COLORS_BY_THEME[theme]];
    });
  }, [theme]);

  return (
    <div className="flex w-fit flex-col gap-3">
      <div className="border-[3px] border-solid">
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
