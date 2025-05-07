"use client";
import { WalletProvider } from "@suiet/wallet-kit";

export const SuietWalletProvider = ({ children }: React.PropsWithChildren) => (
  <WalletProvider>{children}</WalletProvider>
);
