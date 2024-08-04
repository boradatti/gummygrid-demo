import type { Theme, ThemeChoice } from "./types";

export function getThemeFromChoice(choice: ThemeChoice): Theme {
  let theme = choice;

  if (theme === "system") {
    theme = window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light";
  }

  return theme;
}
