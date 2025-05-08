import { Calendar, Search, Wallet } from "lucide-react";

import {
  IPanelNavigations,
  PanelOptions,
} from "@/contexts/panel-navigator-context/interfaces";

export const panelNavigations: Array<IPanelNavigations> = [
  { icon: Wallet, text: PanelOptions.Wallet },
  {
    icon: Search,
    text: PanelOptions.Discover,
  },
  { icon: Calendar, text: PanelOptions.Calendar },
];
