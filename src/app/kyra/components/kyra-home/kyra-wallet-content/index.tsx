import { KyraTrendingTokens } from "./kyra-trending-tokens";
import { KyraWalletFooterButtons } from "./kyra-wallet-footer-buttons";
import { KyraWalletRevenue } from "./kyra-wallet-revenue";

export const KyraWalletContent = () => (
  <section className="flex flex-col">
    <KyraWalletRevenue />
    <hr className="border-grey/60 mb-6 -ml-4 w-screen" />
    <KyraTrendingTokens />
    <KyraWalletFooterButtons />
  </section>
);
