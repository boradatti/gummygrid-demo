import { Header } from "@/components/layout/header";
import { AvatarShowcase } from "@/components/layout/avatar-showcase";
import { SettingsPanel } from "@/components/layout/settings-panel";

function App() {
  return (
    <div className="font-mono md:grid md:h-[100svh] md:place-items-center">
      <div className="mx-auto mt-4 flex w-[95svw] max-w-fit flex-col gap-3 md:max-w-[45rem]">
        <Header />
        <div className="flex w-fit flex-col gap-3 self-center md:w-auto md:flex-row md:gap-7 md:self-auto">
          <AvatarShowcase />
          <SettingsPanel />
        </div>
      </div>
    </div>
  );
}

export default App;
