import { DotSquare, Home, LucideIcon, X } from "lucide-react";

export type WalletContent = "1" | "2" | "3";

export const walletWindows: Array<{
  icon: LucideIcon;
  content: WalletContent;
}> = [
  {
    icon: Home,
    content: "1",
  },
  { icon: X, content: "2" },
  { icon: DotSquare, content: "3" },
];
