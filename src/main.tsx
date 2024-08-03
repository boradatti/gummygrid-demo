import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { ColorSchemeContextProvider } from './contexts/color-scheme/provider.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ColorSchemeContextProvider>
      <App />
    </ColorSchemeContextProvider>
  </React.StrictMode>
);
