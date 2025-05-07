import { LucideIcon } from "lucide-react";

export interface IPanelNavigatorContext {
  handlePanel: (panel: "wallet" | "discover" | "calendar") => void;
  panel: "wallet" | "discover" | "calendar";
  navigations: Array<IPanelNavigations>;
}

export interface IPanelNavigations {
  icon: LucideIcon;
  text: "wallet" | "discover" | "calendar";
}
