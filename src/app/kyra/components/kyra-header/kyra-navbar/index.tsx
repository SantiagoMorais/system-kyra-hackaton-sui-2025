"use client";
import { useWallet } from "@suiet/wallet-kit";
import { useState } from "react";

import { DisconnectCard } from "./disconnect-card";
import { NavigationContent } from "./navigation-content";
import { PanelNavigator } from "./panel-navigator";

export const KyraNavbar = () => {
  const [renderDisconnectCard, setRenderDisconnectCard] =
    useState<boolean>(false);
  const { name, disconnect } = useWallet();

  return (
    <nav className="relative flex w-full items-center justify-between md:w-fit md:justify-end">
      <PanelNavigator />

      <NavigationContent
        name={name}
        setRenderDisconnectCard={setRenderDisconnectCard}
      />

      {renderDisconnectCard && (
        <DisconnectCard
          disconnect={disconnect}
          setRenderDisconnectCard={setRenderDisconnectCard}
        />
      )}
    </nav>
  );
};
