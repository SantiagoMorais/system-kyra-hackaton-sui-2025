import { KyraChat } from "@/app/components/kyra-chat";

import { PanelNavigator } from "./panel-navigator";

export const KyraHome = () => (
  <main className="max-w-(--breakpoint-2xl) flex-1">
    <PanelNavigator />
    <KyraChat />
  </main>
);
