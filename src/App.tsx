import MonitorIcon from "@/assets/icons/monitor.svg?react";
import PlusIcon from "@/assets/icons/plus.svg?react";
import LinkIcon from "@/assets/icons/link.svg?react";
import UnlinkIcon from "@/assets/icons/unlink.svg?react";
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
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "./components/ui/tooltip";
import { Checkbox } from "./components/ui/checkbox";

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
    <div className="font-mono md:grid md:h-[100svh] md:place-items-center">
      <div className="mx-auto mt-4 flex w-[95svw] max-w-[60rem] flex-col gap-3">
        <header className="flex items-center gap-5">
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
                    className={`flex gap-3 ${buttonVariants({ variant: "outline" })}`}
                  >
                    <GithubIcon className="w-5" />
                    view repo
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

        <div className="flex gap-7">
          <div className="flex w-fit flex-col gap-3">
            <div className="border-[3px] border-solid">
              <img
                className="w-72"
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

          <div className="flex flex-grow gap-24">
            <div className="flex flex-col justify-between">
              <div className="flex flex-col gap-1">
                <span className="text-neutral-700">dimensions</span>
                <div className="flex items-center gap-2">
                  <div className="relative w-fit">
                    <Input
                      className="textfield h-8 w-14"
                      type="number"
                      defaultValue={5}
                    />
                    <span className="absolute right-2 top-0 grid h-full place-items-center text-neutral-500">
                      w
                    </span>
                  </div>
                  <div className="relative w-fit">
                    <Input
                      className="textfield h-8 w-14"
                      type="number"
                      defaultValue={5}
                    />
                    <span className="absolute right-2 top-0 grid h-full place-items-center text-neutral-500">
                      h
                    </span>
                  </div>
                  <button className="group">
                    <LinkIcon className="w-5 -rotate-45 cursor-pointer stroke-neutral-600 group-hover:stroke-neutral-800" />
                  </button>
                </div>
              </div>

              <div className="flex flex-col gap-1">
                <span className="text-neutral-700">area ratio</span>
                <div className="relative w-fit">
                  <Input
                    className="textfield h-8 w-16"
                    type="number"
                    min={0}
                    max={100}
                    defaultValue={75}
                  />
                  <span className="absolute right-2 top-0 grid h-full place-items-center text-neutral-500">
                    %
                  </span>
                </div>
              </div>

              <div className="flex flex-col gap-1">
                <span className="text-neutral-700">rounding</span>
                <div className="flex items-center gap-2">
                  <div className="relative w-fit">
                    <Input
                      className="textfield h-8 w-16"
                      type="number"
                      min={0}
                      max={100}
                      defaultValue={0}
                    />
                    <span className="absolute right-2 top-0 grid h-full place-items-center text-neutral-500">
                      %
                    </span>
                  </div>
                  <div className="h-[0.5px] w-3 bg-neutral-300"></div>
                  <span className="text-neutral-700">outer</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="relative w-fit">
                    <Input
                      className="textfield h-8 w-16"
                      type="number"
                      min={0}
                      max={100}
                      defaultValue={0}
                    />
                    <span className="absolute right-2 top-0 grid h-full place-items-center text-neutral-500">
                      %
                    </span>
                  </div>
                  <div className="h-[0.5px] w-3 bg-neutral-300"></div>
                  <span className="text-neutral-700">inner</span>
                </div>
              </div>

              <div className="flex flex-col gap-1">
                <span className="text-neutral-700">density</span>
                <div className="relative w-fit">
                  <Input
                    className="textfield h-8 w-16"
                    type="number"
                    min={0}
                    max={100}
                    defaultValue={50}
                  />
                  <span className="absolute right-2 top-0 grid h-full place-items-center text-neutral-500">
                    %
                  </span>
                </div>
              </div>
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
                    <Checkbox />
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
