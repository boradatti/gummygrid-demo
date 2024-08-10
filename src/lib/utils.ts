import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import tinycolor from "tinycolor2";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function darkenColors(colors: string[]) {
  return colors.map((clr) => tinycolor(clr).darken(20).toHslString());
}
