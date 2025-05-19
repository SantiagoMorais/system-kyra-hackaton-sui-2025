import { KyraDiscoverContent } from "../kyra-discover-content";
import { KyraRemindersContent } from "../kyra-reminders-content";
import { KyraWalletContent } from "../kyra-wallet-content";

export const KyraPanelContent = ({
  panel,
}: {
  panel: "wallet" | "reminders" | "discover";
}) => {
  if (panel === "wallet") return <KyraWalletContent />;
  if (panel === "reminders") return <KyraRemindersContent />;
  if (panel === "discover") return <KyraDiscoverContent />;
};
