import { type ForwardedRef, useEffect, useRef } from "react";

export function useLocalForwardedRef<T extends HTMLElement>(
  ref: ForwardedRef<T>,
) {
  const refLocal = useRef<T>(null);

  useEffect(() => {
    if (ref) {
      if (typeof ref === "function") {
        ref(refLocal.current);
      } else if ("current" in ref) {
        ref.current = refLocal.current;
      }
    }
  }, [ref]);

  return refLocal;
}
