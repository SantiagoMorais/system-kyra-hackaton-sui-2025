import { DotSquare, Home, LucideIcon, X } from "lucide-react";

export type WalletContent = "Balance" | "Swap" | "History";

export const walletWindows: Array<{
  icon: LucideIcon;
  content: WalletContent;
}> = [
  {
    icon: Home,
    content: "Balance",
  },
  { icon: X, content: "Swap" },
  { icon: DotSquare, content: "History" },
];
