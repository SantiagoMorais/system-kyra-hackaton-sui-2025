"use client";

import { useEffect } from "react";

import { usePanelNavigator } from "@/contexts/panel-navigator-context/hooks";
import { scrollBar } from "@/styles";

import { KyraPanelContent } from "./kyra-panel-content";
import { PanelNavbar } from "./panel-navbar";

export const PanelNavigator = () => {
  const { panel, navigations, panelOpened, handleOpenPanel } =
    usePanelNavigator();

  useEffect(() => {
    if (panelOpened) document.body.classList.add("overflow-hidden");
    if (!panelOpened) document.body.classList.remove("overflow-hidden");

    return () => document.body.classList.remove("overflow-hidden");
  }, [panelOpened]);

  return (
    <>
      <div
        className={`fixed top-0 right-0 z-90 h-dvh w-dvw bg-black/60 ${!panelOpened && "hidden"}`}
        onClick={() => handleOpenPanel()}
      />
      <aside
        className={`bg-black-grey fixed top-0 left-0 z-100 flex h-dvh w-10/12 max-w-100 origin-left flex-col gap-1.5 overflow-x-hidden p-4 duration-500 ${panelOpened ? "w-10/12 opacity-100" : "w-0 -translate-x-full opacity-0"}`}
      >
        <PanelNavbar
          handleOpenPanel={handleOpenPanel}
          navigations={navigations}
        />
        <section
          className={scrollBar({
            color: "darkGrey",
            thickness: "thin",
            className: "h-full max-h-full overflow-x-hidden duration-500",
          })}
        >
          <KyraPanelContent panel={panel} />
        </section>
      </aside>
    </>
  );
};
