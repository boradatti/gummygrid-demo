import MonitorIcon from "@/assets/icons/monitor.svg?react";
import GithubIcon from "@/assets/icons/github.svg?react";
import MoonIcon from "@/assets/icons/moon.svg?react";
import SunIcon from "@/assets/icons/sun.svg?react";
import { Button, buttonVariants } from "@/components/ui/button";
import { useTheme } from "./contexts/theme";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./components/ui/dropdown-menu";
import clsx from "clsx";
import GummyGrid from "gummygrid";
import { Input } from "./components/ui/input";
import { useState } from "react";

function App() {
  const { theme, themeChoice, setThemeChoice } = useTheme();
  const [usernameInput, setUsernameInput] = useState("");
  const gg = new GummyGrid({
    grid: { ensureFill: { leftRight: true, topBottom: true } },
  });
  const svg = gg.buildFrom(usernameInput);

  let ThemeIcon;
  switch (theme) {
    case "dark": {
      ThemeIcon = MoonIcon;
      break;
    }
    case "light": {
      ThemeIcon = SunIcon;
      break;
    }
  }

  return (
    <div className="h-[100svh] font-mono md:grid md:place-items-center">
      <div className="mx-auto mt-4 flex w-[95svw] max-w-[50rem] flex-col gap-3">
        <header className="flex items-center gap-5">
          <div className="ml-3 flex items-center gap-3 md:ml-0">
            <div className="h-2.5 w-2.5 bg-foreground"></div>
            <h1 className="text-2xl font-medium">GummyGrid</h1>
          </div>

          <div className="h-[0.5px] flex-grow bg-neutral-200"></div>

          <div className="flex gap-2">
            <a
              href="https://github.com/boradatti/gummygrid"
              target="_blank"
              className={`flex gap-3 ${buttonVariants({ variant: "outline" })}`}
            >
              <GithubIcon className="w-5" />
              view repo
            </a>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant={"outline"} size={"icon"}>
                  <ThemeIcon className="w-5" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent sideOffset={7} align="end">
                <DropdownMenuItem
                  onClick={() => setThemeChoice("dark")}
                  className={clsx("flex justify-between", {
                    "bg-neutral-100 bg-opacity-80": themeChoice == "dark",
                  })}
                >
                  dark
                  <MoonIcon className="w-5" />
                </DropdownMenuItem>
                <DropdownMenuItem
                  onClick={() => setThemeChoice("light")}
                  className={clsx("flex justify-between", {
                    "bg-neutral-100 bg-opacity-80": themeChoice == "light",
                  })}
                >
                  light
                  <SunIcon className="w-5" />
                </DropdownMenuItem>
                <DropdownMenuItem
                  onClick={() => setThemeChoice("system")}
                  className={clsx("flex justify-between", {
                    "bg-neutral-100 bg-opacity-80": themeChoice == "system",
                  })}
                >
                  system
                  <MonitorIcon className="w-5" />
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </header>

        <div>
          <div className="flex w-fit flex-col gap-3">
            <div className="border-[3px] border-solid">
              <img
                className="w-56"
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
        </div>
      </div>
    </div>
  );
}

export default App;
