import { KyraChat } from "@/app/components/kyra-chat";

import { DesktopPanel } from "./desktop-panel";
import { PanelNavigator } from "./panel-navigator";

export const KyraHome = () => (
  <main className="relative flex h-full w-full flex-1 flex-col lg:flex-row">
    <PanelNavigator />
    <DesktopPanel />
    <KyraChat />
  </main>
);
