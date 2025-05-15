import { KyraDiscoverContent } from "../kyra-discover-content";
import { KyraWalletContent } from "../kyra-wallet-content";

export const KyraPanelContent = ({
  panel,
}: {
  panel: "wallet" | "calendar" | "discover";
}) => {
  if (panel === "wallet") return <KyraWalletContent />;
  if (panel === "calendar") return <></>;
  if (panel === "discover") return <KyraDiscoverContent />;
};
