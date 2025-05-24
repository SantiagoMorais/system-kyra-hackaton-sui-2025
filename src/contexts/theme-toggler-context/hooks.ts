import { useContext } from "react";

import { ThemeTogglerContext } from "./context";

export const useThemeToggler = () => {
  const context = useContext(ThemeTogglerContext);
  if (!context)
    throw new Error(
      "The useThemeToggler must be wrapped by a ThemeTogglerProvider"
    );
  return context;
};
