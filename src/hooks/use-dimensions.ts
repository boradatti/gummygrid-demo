import { useTailwindConfig } from "@/contexts/tailwind-config";
import { useEffect, useReducer } from "react";

export const useDimensions = () => {
  const [dimensions, resetDimensions] = useReducer(
    getCurrentDimensions,
    getCurrentDimensions(),
  );
  const tailwindConfig = useTailwindConfig();

  useEffect(() => {
    window.addEventListener("resize", resetDimensions);
    return () => {
      window.removeEventListener("resize", resetDimensions);
    };
  }, []);

  const isMobile = dimensions.width < parseInt(tailwindConfig.theme.screens.md);
  const isTablet =
    !isMobile && dimensions.width < parseInt(tailwindConfig.theme.screens.lg);
  const isDesktop = !isTablet;

  return {
    ...dimensions,
    isMobile,
    isTablet,
    isDesktop,
  };
};

function getCurrentDimensions() {
  return {
    width: window.innerWidth,
    height: window.innerHeight,
  };
}
