import type { FC, ReactNode } from "react";

export const InputGroup: FC<{ label: string; children: ReactNode }> = ({
  label,
  children,
}) => {
  return (
    <div className="flex flex-col gap-1">
      <span className="text-neutral-700">{label}</span>
      <div>{children}</div>
    </div>
  );
};
