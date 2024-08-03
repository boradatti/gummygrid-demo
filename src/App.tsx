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

function App() {
  const { theme, themeChoice, setThemeChoice } = useTheme();

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
    <div className="grid h-[100svh] place-items-center font-mono">
      <div className="flex flex-col gap-3">
        <header className="flex items-center gap-5">
          <div className="flex items-baseline gap-3">
            <div className="h-3 w-3 bg-foreground"></div>
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
                  <span>dark</span>
                  <MoonIcon className="w-5" />
                </DropdownMenuItem>
                <DropdownMenuItem
                  onClick={() => setThemeChoice("light")}
                  className={clsx("flex justify-between", {
                    "bg-neutral-100 bg-opacity-80": themeChoice == "light",
                  })}
                >
                  <span>light</span>
                  <SunIcon className="w-5" />
                </DropdownMenuItem>
                <DropdownMenuItem
                  onClick={() => setThemeChoice("system")}
                  className={clsx("flex justify-between", {
                    "bg-neutral-100 bg-opacity-80": themeChoice == "system",
                  })}
                >
                  <span>system</span>
                  <MonitorIcon className="w-5" />
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </header>

        <div className="h-1 w-[80vw] max-w-[40rem]"></div>
      </div>
    </div>
  );
}

export default App;
