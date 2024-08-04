import { useLayoutEffect, useState } from "react";
import { getThemeFromChoice } from "./utils";
import type {
  Theme,
  ThemeChoice,
  ThemeProviderProps,
  ThemeProviderState,
} from "./types";
import { INITIAL_THEME_STATE } from "./constants";
import { createContext } from "react";

export const ThemeProviderContext =
  createContext<ThemeProviderState>(INITIAL_THEME_STATE);

export function ThemeProvider({
  children,
  defaultTheme = "system",
  storageKey = "ui-theme",
  ...props
}: ThemeProviderProps) {
  const [choice, setChoice] = useState<ThemeChoice>(
    () => (localStorage.getItem(storageKey) as ThemeChoice) || defaultTheme,
  );
  const [theme, setTheme] = useState<Theme>(getThemeFromChoice(choice));

  useLayoutEffect(() => {
    setTheme(getThemeFromChoice(choice));
  }, [choice]);

  useLayoutEffect(() => {
    const root = window.document.documentElement;
    root.classList.remove("light", "dark");
    root.classList.add(theme);
  }, [theme]);

  const value = {
    theme,
    themeChoice: choice,
    setThemeChoice: (theme: ThemeChoice) => {
      localStorage.setItem(storageKey, theme);
      setChoice(theme);
    },
  };

  return (
    <ThemeProviderContext.Provider {...props} value={value}>
      {children}
    </ThemeProviderContext.Provider>
  );
}
