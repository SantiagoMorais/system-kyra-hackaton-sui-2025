import { Coins, History, LucideIcon, Send, Wallet } from "lucide-react";

export type WalletContent = "Balance" | "Send" | "Staking" | "History";

export const walletWindows: Array<{
  icon: LucideIcon;
  content: WalletContent;
}> = [
  { icon: Wallet, content: "Balance" },
  { icon: Send, content: "Send" },
  { icon: Coins, content: "Staking" },
  { icon: History, content: "History" },
];
