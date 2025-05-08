import { KyraTrendingTokens } from "./kyra-trending-tokens";
import { KyraWalletBalance } from "./kyra-wallet-revenue";

export const KyraWalletContent = () => (
  <section className="flex h-full flex-col pb-4">
    <KyraWalletBalance />
    <hr className="border-grey/60 mb-6 -ml-4 w-screen" />
    <KyraTrendingTokens />
  </section>
);
