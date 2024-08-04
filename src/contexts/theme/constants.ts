import { ThemeProviderState } from "./types";
import { getThemeFromChoice } from "./utils";

export const DEFAULT_THEME_CHOICE = "system";

export const INITIAL_THEME_STATE: ThemeProviderState = {
  theme: getThemeFromChoice(DEFAULT_THEME_CHOICE),
  themeChoice: DEFAULT_THEME_CHOICE,
  setThemeChoice: () => null,
};
