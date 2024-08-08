import PlusIcon from "@/assets/icons/plus.svg?react";

export const ColorsInput = () => {
  return (
    <div className="flex items-center gap-2">
      <div className="flex items-center gap-1">
        <div className="h-6 w-6 cursor-pointer border-2 bg-[hsl(12,90%,62%)]"></div>
        <div className="h-6 w-6 cursor-pointer border-2 bg-[hsl(187,90%,62%)]"></div>
        <div className="h-6 w-6 cursor-pointer border-2 bg-[hsl(293,63%,51%)]"></div>
      </div>
      <button className="group h-6 w-6">
        <PlusIcon className="w-5 stroke-neutral-600 group-hover:stroke-neutral-800" />
      </button>
    </div>
  );
};
