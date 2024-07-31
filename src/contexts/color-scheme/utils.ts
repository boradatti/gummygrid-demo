import {
  ColorScheme,
  ColorSchemeReducerAction,
  ColorSchemeReducerState,
  ColorSchemeSource,
} from './types';

const COLOR_SCHEME_STORAGE_KEY = 'color-scheme';

export function colorSchemeReducer(
  state: ColorSchemeReducerState,
  action: ColorSchemeReducerAction
): ColorSchemeReducerState {
  switch (action.type) {
    case 'SET': {
      const [oldScheme, newScheme] = [state.scheme, action.newScheme];
      localStorage.setItem(COLOR_SCHEME_STORAGE_KEY, newScheme);
      document.documentElement.classList.remove(oldScheme);
      document.documentElement.classList.add(newScheme);
      return {
        scheme: newScheme,
        source: 'storage',
      };
    }
    case 'TOGGLE': {
      const [oldScheme, newScheme] = [
        state.scheme,
        getOppositeColorScheme(state.scheme),
      ];
      localStorage.setItem(COLOR_SCHEME_STORAGE_KEY, newScheme);
      document.documentElement.classList.remove(oldScheme);
      document.documentElement.classList.add(newScheme);
      return {
        scheme: newScheme,
        source: 'storage',
      };
    }
    case 'DROP': {
      const [oldScheme, defaultScheme] = [state.scheme, getSystemColorScheme()];
      localStorage.removeItem(COLOR_SCHEME_STORAGE_KEY);
      document.documentElement.classList.remove(oldScheme);
      document.documentElement.classList.add(defaultScheme);
      return {
        scheme: defaultScheme,
        source: 'system',
      };
    }
    default:
      // @ts-expect-error
      throw new Error(`Unrecognized action type: "${action.type}"`);
  }
}

export const initialColorSchemeState = getInitialColorSchemeState();

function getInitialColorSchemeState(): ColorSchemeReducerState {
  let scheme = getStoredColorScheme();
  let source: ColorSchemeSource = 'storage';
  if (scheme == null) {
    scheme = getSystemColorScheme();
    source = 'system';
  }
  document.documentElement.classList.add(scheme);
  return { scheme, source };
}

function getStoredColorScheme(): ColorScheme | null {
  let scheme = localStorage.getItem(COLOR_SCHEME_STORAGE_KEY);
  if (typeof scheme == 'string' && scheme !== 'light' && scheme !== 'dark') {
    localStorage.removeItem(COLOR_SCHEME_STORAGE_KEY);
    scheme = null;
  }
  return scheme;
}

function getSystemColorScheme(): ColorScheme {
  return window.matchMedia('(prefers-color-scheme: dark)').matches
    ? 'dark'
    : 'light';
}

function getOppositeColorScheme(scheme: ColorScheme): ColorScheme {
  return scheme == 'light' ? 'dark' : 'light';
}
