import { createContext, useContext } from "react";
import type { ReactNode } from "react";
import resolveConfig from "tailwindcss/resolveConfig";
import tailwindConfig from "../../../tailwind.config";
import type { Config as TailwindConfig } from "tailwindcss";

type ResolvedConfig = ReturnType<typeof resolveConfig>;
type ProviderContextState = ResolvedConfig & TailwindConfig;

// @ts-ignore
const TailwindConfigContext = createContext<ProviderContextState>(null);

export const TailwindConfigProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const config = resolveConfig(tailwindConfig) as ProviderContextState;

  return (
    <TailwindConfigContext.Provider value={config}>
      {children}
    </TailwindConfigContext.Provider>
  );
};

export const useTailwindConfig = () => {
  return useContext(TailwindConfigContext);
};
