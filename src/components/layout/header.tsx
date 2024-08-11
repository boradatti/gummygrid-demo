import MoonIcon from "@/assets/icons/moon.svg?react";
import SunIcon from "@/assets/icons/sun.svg?react";
import MonitorIcon from "@/assets/icons/monitor.svg?react";
import GithubIcon from "@/assets/icons/github.svg?react";
import { Button, buttonVariants } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import clsx from "clsx";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { useTheme } from "@/contexts/theme";
import { useDimensions } from "@/hooks/use-dimensions";

export const Header = () => {
  const { theme, themeChoice, setThemeChoice } = useTheme();
  const { isMobile } = useDimensions();

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
    <header className="mb-1 flex items-center gap-5 md:mb-0">
      <div className="ml-1 flex items-center gap-3 md:ml-0">
        <div className="h-2.5 w-2.5 bg-foreground"></div>
        <h1 className="text-2xl font-medium">GummyGrid</h1>
      </div>

      <div className="h-[0.5px] flex-grow bg-neutral-200"></div>

      <div className="flex gap-2">
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <a
                href="https://github.com/boradatti/gummygrid"
                target="_blank"
                rel="noreferrer"
                className={`flex gap-3 ${buttonVariants({ variant: "outline", size: isMobile ? "icon" : "default" })}`}
              >
                <GithubIcon className="w-5" />
                {!isMobile ? "view repo" : ""}
              </a>
            </TooltipTrigger>
            <TooltipContent className="mb-1">
              more customizable in code
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>

        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant={"outline"} size={"icon"}>
              <ThemeIcon className="w-5" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="mt-1" align="end">
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
  );
};
