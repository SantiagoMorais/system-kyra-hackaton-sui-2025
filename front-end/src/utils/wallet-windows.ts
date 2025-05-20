import { GitCompareArrows, History, LucideIcon, Wallet } from "lucide-react";

export type WalletContent = "Balance" | "Swap" | "History";

export const walletWindows: Array<{
  icon: LucideIcon;
  content: WalletContent;
}> = [
  {
    icon: Wallet,
    content: "Balance",
  },
  { icon: GitCompareArrows, content: "Swap" },
  { icon: History, content: "History" },
];
