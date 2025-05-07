import { Calendar, Search, Wallet } from "lucide-react";

import { IPanelNavigations } from "@/contexts/panel-navigator-context/interfaces";

export const panelNavigations: Array<IPanelNavigations> = [
  { icon: Wallet, text: "wallet" },
  {
    icon: Search,
    text: "discover",
  },
  { icon: Calendar, text: "calendar" },
];
