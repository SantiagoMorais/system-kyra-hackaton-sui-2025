"use client";

import { Menu } from "lucide-react";

import { usePanelNavigator } from "@/contexts/panel-navigator-context/hooks";

export const PanelSheet = () => {
  const { handleOpenPanel } = usePanelNavigator();

  return (
    <button
      className="text-grey duration-300 hover:opacity-70 lg:hidden"
      onClick={() => handleOpenPanel(true)}
      title="Open Panel"
    >
      <Menu />
    </button>
  );
};
