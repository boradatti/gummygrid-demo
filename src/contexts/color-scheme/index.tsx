import { useContext } from 'react';
import { ColorSchemeContext } from './provider';

export { ColorSchemeContextProvider } from './provider';

export const useColorScheme = () => useContext(ColorSchemeContext)!;
