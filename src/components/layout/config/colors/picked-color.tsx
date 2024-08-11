import { FC } from "react";

import DeleteIcon from "@/assets/icons/delete.svg?react";

import clsx from "clsx";

type Props = {
  onClick: () => unknown;
  canDeleteColors: boolean;
  color: string;
};

export const PickedColor: FC<Props> = ({ canDeleteColors, onClick, color }) => (
  <button
    disabled={!canDeleteColors}
    onClick={onClick}
    className={clsx(
      "group h-7 w-7 border-2 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-neutral-700",
      { "cursor-default": !canDeleteColors },
    )}
    style={{ backgroundColor: color }}
  >
    <div
      className={clsx(
        "grid h-full w-full place-items-center transition-colors",
        {
          "group-hover:bg-neutral-50/60 group-focus-visible:bg-neutral-50/60":
            canDeleteColors,
        },
      )}
    >
      <DeleteIcon
        className={clsx("h-4 w-4 opacity-0 transition-opacity", {
          "group-hover:opacity-100 group-focus-visible:opacity-100":
            canDeleteColors,
        })}
      />
    </div>
  </button>
);
