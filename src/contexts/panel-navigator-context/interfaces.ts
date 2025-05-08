import { LucideIcon } from "lucide-react";

export interface IPanelNavigatorContext {
  handlePanel: (panel: PanelOptions) => void;
  panel: "wallet" | "discover" | "calendar";
  navigations: Array<IPanelNavigations>;
  handleOpenPanel: (open?: boolean) => void;
  panelOpenned: boolean;
}

export interface IPanelNavigations {
  icon: LucideIcon;
  text: PanelOptions;
}

export enum PanelOptions {
  Wallet = "wallet",
  Discover = "discover",
  Calendar = "calendar",
}
