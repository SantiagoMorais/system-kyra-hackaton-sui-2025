import { createContext } from "react";

import { IThemeTogglerContext } from "./interfaces";

export const ThemeTogglerContext = createContext<IThemeTogglerContext>({
  isThemeLight: false,
  handleThemeToggler: () => {},
});
