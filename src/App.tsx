import { Header } from "@/components/layout/header";
import { AvatarShowcase } from "@/components/layout/avatar-showcase";
import { SettingsPanel } from "@/components/layout/settings-panel";

function App() {
  return (
    <div className="font-mono md:grid md:h-[100svh] md:place-items-center">
      <div className="mx-auto mt-4 flex w-[95svw] max-w-[45rem] flex-col gap-3">
        <Header />
        <div className="flex gap-7">
          <AvatarShowcase />
          <SettingsPanel />
        </div>
      </div>
    </div>
  );
}

export default App;
