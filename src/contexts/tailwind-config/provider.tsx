import { createContext } from "react";
import type { ReactNode } from "react";
import resolveConfig from "tailwindcss/resolveConfig";
import tailwindConfig from "../../../tailwind.config";
import type { Config as TailwindConfig } from "tailwindcss";

type ResolvedConfig = ReturnType<typeof resolveConfig>;
type ProviderContextState = ResolvedConfig & TailwindConfig;

const TAILWIND_CONFIG = resolveConfig(tailwindConfig) as ProviderContextState;

export const TailwindConfigContext =
  createContext<ProviderContextState>(TAILWIND_CONFIG);

type Props = {
  children: ReactNode;
};

export const TailwindConfigProvider = ({ children }: Props) => {
  return (
    <TailwindConfigContext.Provider value={TAILWIND_CONFIG}>
      {children}
    </TailwindConfigContext.Provider>
  );
};
