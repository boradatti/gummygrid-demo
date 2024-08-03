import GithubIcon from "@/assets/icons/github.svg?react";
import MoonIcon from "@/assets/icons/moon.svg?react";
import SunIcon from "@/assets/icons/sun.svg?react";
import { Button, buttonVariants } from "@/components/ui/button";
import { useTheme } from "./contexts/theme";

function App() {
  const { theme } = useTheme();

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

          <div className="h-[0.5px] flex-grow bg-stone-800"></div>

          <div className="flex gap-3">
            <a
              href="https://github.com/boradatti/gummygrid"
              target="_blank"
              className={`flex gap-3 ${buttonVariants({ variant: "outline" })}`}
            >
              <GithubIcon className="w-5" />
              view repo
            </a>
            <Button variant={"outline"} size={"icon"}>
              <ThemeIcon className="w-5" />
            </Button>
          </div>
        </header>

        <div className="h-1 w-[80vw] max-w-[40rem]"></div>
      </div>
    </div>
  );
}

export default App;
