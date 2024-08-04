export type ThemeChoice = "dark" | "light" | "system";
export type Theme = Exclude<ThemeChoice, "system">;

export type ThemeProviderProps = {
  children: React.ReactNode;
  defaultTheme?: ThemeChoice;
  storageKey?: string;
};

export type ThemeProviderState = {
  themeChoice: ThemeChoice;
  theme: Theme;
  setThemeChoice: (theme: ThemeChoice) => void;
};
