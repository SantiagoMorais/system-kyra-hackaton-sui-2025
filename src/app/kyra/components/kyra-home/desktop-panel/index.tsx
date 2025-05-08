"use client";

import { usePanelNavigator } from "@/contexts/panel-navigator-context/hooks";

import { kyraPanelContent } from "../panel-navigator";
import { PanelNavigationList } from "../panel-navigator/panel-navbar/panel-navigation-list";

export const DesktopPanel = () => {
  const { panel } = usePanelNavigator();

  return (
    <section className="border-grey hidden h-full w-100 flex-col gap-1 overflow-x-hidden px-7 py-8 md:flex">
      <PanelNavigationList />
      {kyraPanelContent({ panel })}
    </section>
  );
};
