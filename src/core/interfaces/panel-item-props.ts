import { IPanelNavigations } from "@/contexts/panel-navigator-context/interfaces";

import { ICursorPosition } from "./panel-navigator-navbar-props";

export interface IPanelItemProps extends IPanelNavigations {
  setPosition: React.Dispatch<React.SetStateAction<ICursorPosition>>;
}
