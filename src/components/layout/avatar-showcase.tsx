import { useState } from "react";
import { Input } from "../ui/input";
import { useGummyGrid } from "@/contexts/gummygrid/provider";

export const AvatarShowcase = () => {
  const { gg } = useGummyGrid();
  const [usernameInput, setUsernameInput] = useState("");
  const svg = gg.buildFrom(usernameInput);

  return (
    <div className="flex w-fit flex-col gap-3">
      <div className="border-[3px] border-solid">
        <img
          className="w-72"
          src={svg.toURLEncodedString({ withPrefix: true })}
          alt="generated avatar"
        />
      </div>
      <Input
        placeholder="enter username..."
        value={usernameInput}
        onChange={(e) => setUsernameInput(e.currentTarget.value)}
      />
    </div>
  );
};
