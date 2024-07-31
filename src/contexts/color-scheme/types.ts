export type ColorScheme = 'light' | 'dark';

export type ColorSchemeSource = 'storage' | 'system';

export type ColorSchemeReducerState = {
  scheme: ColorScheme;
  source: ColorSchemeSource;
};

export type ColorSchemeReducerAction =
  | ColorSchemeReducerAction_Set
  | ColorSchemeReducerAction_Toggle
  | ColorSchemeReducerAction_Drop;

type ColorSchemeReducerAction_Set = { type: 'SET'; newScheme: ColorScheme };
type ColorSchemeReducerAction_Toggle = { type: 'TOGGLE' };
type ColorSchemeReducerAction_Drop = { type: 'DROP' };

export type ColorSchemeContextValue = {
  colorScheme: ColorScheme;
  setColorScheme: (scheme: ColorScheme) => void;
  toggleColorScheme: () => void;
  dropColorScheme: () => void;
  colorSchemeSource: ColorSchemeSource;
};
