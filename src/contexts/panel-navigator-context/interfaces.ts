import { LucideIcon } from "lucide-react";

export interface IPanelNavigatorContext {
  handlePanel: (panel: PanelOptions) => void;
  panel: "wallet" | "discover" | "reminders";
  navigations: Array<IPanelNavigations>;
  handleOpenPanel: (open?: boolean) => void;
  panelOpened: boolean;
}

export interface IPanelNavigations {
  icon: LucideIcon;
  text: PanelOptions;
}

export enum PanelOptions {
  Wallet = "wallet",
  Discover = "discover",
  Calendar = "reminders",
}
