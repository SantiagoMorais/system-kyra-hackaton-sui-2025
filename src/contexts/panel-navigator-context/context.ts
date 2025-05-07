import { createContext } from "react";

import { IPanelNavigatorContext } from "./interfaces";

export const PanelNavigatorContext = createContext<IPanelNavigatorContext>({
  panel: "wallet",
  handlePanel: () => {},
});
