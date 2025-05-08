"use client";

import { useEffect } from "react";

import { usePanelNavigator } from "@/contexts/panel-navigator-context/hooks";

import { KyraDiscoverContent } from "../kyra-discover-content";
import { KyraWalletContent } from "../kyra-wallet-content";
import { PanelNavbar } from "./panel-navbar";

export const PanelNavigator = () => {
  const { panel, navigations, panelOpenned, handleOpenPanel } =
    usePanelNavigator();

  const content = () => {
    if (panel === "wallet") return <KyraWalletContent />;
    if (panel === "calendar") return <></>;
    if (panel === "discover") return <KyraDiscoverContent />;
  };

  useEffect(() => {
    if (panelOpenned) document.body.classList.add("overflow-hidden");
    if (!panelOpenned) document.body.classList.remove("overflow-hidden");

    return () => document.body.classList.remove("overflow-hidden");
  }, [panelOpenned]);

  return (
    <>
      <div
        className={`fixed top-0 right-0 z-90 h-dvh w-dvw bg-black/60 ${!panelOpenned && "hidden"}`}
        onClick={() => handleOpenPanel()}
      />
      <aside
        className={`bg-black-grey fixed top-0 left-0 z-100 flex h-dvh w-10/12 origin-left flex-col gap-1.5 overflow-x-hidden overflow-y-scroll p-4 duration-500 ${panelOpenned ? "w-10/12 opacity-100" : "w-0 -translate-x-full opacity-0"}`}
      >
        <PanelNavbar
          handleOpenPanel={handleOpenPanel}
          navigations={navigations}
        />
        {content()}
      </aside>
    </>
  );
};
