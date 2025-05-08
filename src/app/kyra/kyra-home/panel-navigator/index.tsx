"use client";

import { usePanelNavigator } from "@/contexts/panel-navigator-context/hooks";

import { PanelNavbar } from "./panel-navbar";

export const PanelNavigator = () => {
  const { panel, navigations } = usePanelNavigator();

  const content = () => {
    if (panel === "wallet") return <></>;
    if (panel === "calendar") return <></>;
    if (panel === "discover") return <></>;
  };

  return (
    <section className="fixed top-0 right-0 flex h-dvh w-full justify-start bg-black/60">
      <aside className="bg-black-grey w-10/12 p-4">
        <PanelNavbar navigations={navigations} />
        {content()}
      </aside>
    </section>
  );
};
