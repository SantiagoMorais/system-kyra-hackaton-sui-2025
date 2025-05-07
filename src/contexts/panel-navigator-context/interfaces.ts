export interface IPanelNavigatorContext {
  handlePanel: (panel: "wallet" | "discover" | "calendar") => void;
  panel: "wallet" | "discover" | "calendar";
}
