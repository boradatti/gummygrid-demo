import React from "react";
import ReactDOM from "react-dom/client";

import { GummyGridProvider } from "@/contexts/gummygrid";
import { TailwindConfigProvider } from "@/contexts/tailwind-config";
import { ThemeProvider } from "@/contexts/theme";

import App from "./App.tsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <TailwindConfigProvider>
      <ThemeProvider>
        <GummyGridProvider>
          <App />
        </GummyGridProvider>
      </ThemeProvider>
    </TailwindConfigProvider>
  </React.StrictMode>,
);
