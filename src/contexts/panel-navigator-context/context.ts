import { createContext } from "react";

import { panelNavigations } from "@/utils/panel-navigations";

import { IPanelNavigatorContext } from "./interfaces";

export const PanelNavigatorContext = createContext<IPanelNavigatorContext>({
  panel: "wallet",
  handlePanel: () => {},
  navigations: panelNavigations,
  panelOpenned: false,
  handleOpenPanel: () => {},
});
