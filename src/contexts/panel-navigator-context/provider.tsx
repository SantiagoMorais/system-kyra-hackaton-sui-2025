"use client";
import { useState } from "react";

import { panelNavigations } from "@/utils/panel-navigations";

import { PanelNavigatorContext } from "./context";

export const PanelNavigatorProvider = ({
  children,
}: React.PropsWithChildren) => {
  const [panel, setPanel] = useState<"wallet" | "discover" | "calendar">(
    "wallet"
  );
  const [panelOpenned, setPanelOpenned] = useState<boolean>(false);

  const handlePanel = (panel: "wallet" | "discover" | "calendar") => {
    setPanel(panel);
  };

  const handleOpenPanel = () => {
    setPanelOpenned((prev) => !prev);
  };

  return (
    <PanelNavigatorContext.Provider
      value={{
        panel,
        handlePanel,
        navigations: panelNavigations,
        panelOpenned,
        handleOpenPanel,
      }}
    >
      {children}
    </PanelNavigatorContext.Provider>
  );
};
