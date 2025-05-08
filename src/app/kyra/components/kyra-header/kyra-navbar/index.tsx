"use client";
import { useWallet } from "@suiet/wallet-kit";
import { useState } from "react";

import { DisconnectCard } from "./disconnect-card";
import { NavigationContent } from "./navigation-content";
import { PanelSheet } from "./panel-sheet";

export const KyraNavbar = () => {
  const [renderDisconnectCard, setRenderDisconnectCard] =
    useState<boolean>(false);
  const { name, disconnect } = useWallet();

  return (
    <nav className="relative flex w-full items-center justify-between lg:w-fit lg:justify-end">
      <PanelSheet />
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
