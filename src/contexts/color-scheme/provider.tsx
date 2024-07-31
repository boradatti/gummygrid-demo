import { createContext, useReducer } from 'react';
import type { FC, ReactNode } from 'react';
import { ColorSchemeContextValue } from './types';
import { colorSchemeReducer, initialColorSchemeState } from './utils';

type Props = {
  children: ReactNode;
};

export const ColorSchemeContext = createContext<ColorSchemeContextValue | null>(
  null
);

export const ColorSchemeContextProvider: FC<Props> = ({ children }) => {
  const [state, dispatchSchemeAction] = useReducer(
    colorSchemeReducer,
    initialColorSchemeState
  );

  return (
    <ColorSchemeContext.Provider
      value={{
        colorScheme: state.scheme,
        setColorScheme: (newScheme) =>
          dispatchSchemeAction({ type: 'SET', newScheme }),
        toggleColorScheme: () => dispatchSchemeAction({ type: 'TOGGLE' }),
        dropColorScheme: () => dispatchSchemeAction({ type: 'DROP' }),
        colorSchemeSource: state.source,
      }}
    >
      {children}
    </ColorSchemeContext.Provider>
  );
};
