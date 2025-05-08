import { KyraChat } from "@/app/components/kyra-chat";

import { KyraNavbar } from "../kyra-header/kyra-navbar";
import { DesktopPanel } from "./desktop-panel";
import { PanelNavigator } from "./panel-navigator";

export const KyraHome = () => (
  <main className="relative flex h-full w-full max-w-500 flex-1 flex-col lg:flex-row">
    <KyraNavbar />
    <PanelNavigator />
    <DesktopPanel />
    <div className="bg-grey/60 hidden min-h-full w-px lg:block" />
    <KyraChat />
  </main>
);
