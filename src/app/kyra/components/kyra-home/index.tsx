import { KyraChat } from "@/app/components/kyra-chat";

import { DesktopPanel } from "./desktop-panel";
import { PanelNavigator } from "./panel-navigator";

export const KyraHome = () => (
  <main className="relative flex h-full w-full max-w-500 flex-1">
    <PanelNavigator />
    <DesktopPanel />
    <div className="bg-grey/60 min-h-full w-px" />
    <KyraChat />
  </main>
);
