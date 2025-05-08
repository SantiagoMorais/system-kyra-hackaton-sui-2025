"use client";
import { useState } from "react";

import { panelNavigations } from "@/utils/panel-navigations";

import { PanelNavigatorContext } from "./context";
import { PanelOptions } from "./interfaces";

export const PanelNavigatorProvider = ({
  children,
}: React.PropsWithChildren) => {
  const [panel, setPanel] = useState<"wallet" | "discover" | "calendar">(
    "wallet"
  );
  const [panelOpenned, setPanelOpenned] = useState<boolean>(false);

  const handlePanel = (panel: PanelOptions) => {
    setPanel(panel);
  };

  const handleOpenPanel = (open?: boolean) => {
    setPanelOpenned((prev) => (open ? open : !prev));
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
