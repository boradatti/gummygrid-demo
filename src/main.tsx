import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { ThemeProvider } from "./contexts/theme";
import { GummyGridProvider } from "./contexts/gummygrid/provider.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThemeProvider>
      <GummyGridProvider>
        <App />
      </GummyGridProvider>
    </ThemeProvider>
  </React.StrictMode>,
);
