"use client";
import { useWallet } from "@suiet/wallet-kit";
import { redirect } from "next/navigation";
import { useEffect, useState } from "react";

import { routes } from "@/utils/routes";

import { DisconnectCard } from "./disconnect-card";
import { NavigationContent } from "./navigation-content";
import { PanelSheet } from "./panel-sheet";

export const KyraNavbar = () => {
  const [renderDisconnectCard, setRenderDisconnectCard] =
    useState<boolean>(false);
  const { name, disconnect, status } = useWallet();

  useEffect(() => {
    if (status === "disconnected") redirect(routes.home);
  }, [status]);

  return (
    <nav className="relative z-20 flex w-full items-center justify-between p-8 pb-0 lg:absolute lg:top-0 lg:right-0 lg:w-fit lg:justify-end">
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
