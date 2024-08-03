import { createContext, useContext, useLayoutEffect, useState } from "react";

type ThemeChoice = "dark" | "light" | "system";
type Theme = Exclude<ThemeChoice, "system">;

type ThemeProviderProps = {
  children: React.ReactNode;
  defaultTheme?: ThemeChoice;
  storageKey?: string;
};

type ThemeProviderState = {
  themeChoice: ThemeChoice;
  theme: Theme;
  setThemeChoice: (theme: ThemeChoice) => void;
};

const DEFAULT_THEME_CHOICE = "system";

const initialState: ThemeProviderState = {
  theme: getThemeFromChoice(DEFAULT_THEME_CHOICE),
  themeChoice: DEFAULT_THEME_CHOICE,
  setThemeChoice: () => null,
};

const ThemeProviderContext = createContext<ThemeProviderState>(initialState);

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

export const useTheme = () => {
  const context = useContext(ThemeProviderContext);

  if (context === undefined)
    throw new Error("useTheme must be used within a ThemeProvider");

  return context;
};

// * utils

function getThemeFromChoice(choice: ThemeChoice): Theme {
  let theme = choice;

  if (theme === "system") {
    theme = window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light";
  }

  return theme;
}
