"use client";
import { useContext } from "react";

import { PanelNavigatorContext } from "./context";

export const usePanelNavigator = () => {
  const context = useContext(PanelNavigatorContext);

  if (!context)
    throw new Error(
      "usePanelNavigator must be wrapped by a PanelNavigatorProvider"
    );

  return context;
};
