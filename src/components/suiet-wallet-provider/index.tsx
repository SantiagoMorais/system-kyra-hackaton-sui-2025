"use client";
import { SuietWallet, WalletProvider } from "@suiet/wallet-kit";

export const SuietWalletProvider = ({ children }: React.PropsWithChildren) => (
  <WalletProvider defaultWallets={[SuietWallet]}>{children}</WalletProvider>
);
