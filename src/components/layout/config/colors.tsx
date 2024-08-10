import PlusIcon from "@/assets/icons/plus.svg?react";
import { Button } from "@/components/ui/button";

export const ColorsInput = () => {
  return (
    <div className="flex items-center gap-1">
      <div className="flex items-center gap-1">
        <div className="h-6 w-6 cursor-pointer border-2 bg-[hsl(12,90%,62%)]"></div>
        <div className="h-6 w-6 cursor-pointer border-2 bg-[hsl(187,90%,62%)]"></div>
        <div className="h-6 w-6 cursor-pointer border-2 bg-[hsl(293,63%,51%)]"></div>
      </div>
      <Button className="group h-6 w-6" variant="ghost" size="icon">
        <PlusIcon className="w-5 stroke-neutral-600 group-hover:stroke-neutral-800" />
      </Button>
    </div>
  );
};
