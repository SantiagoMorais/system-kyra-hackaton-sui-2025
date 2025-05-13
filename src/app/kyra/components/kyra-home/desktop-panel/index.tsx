"use client";

import { PanelLeftClose } from "lucide-react";
import { useState } from "react";

import { usePanelNavigator } from "@/contexts/panel-navigator-context/hooks";
import { useThemeToggler } from "@/contexts/theme-toggler-context/hooks";
import { scrollBar } from "@/styles";

import { KyraPanelContent } from "../panel-navigator/kyra-panel-content";
import { PanelNavigationList } from "../panel-navigator/panel-navbar/panel-navigation-list";

export const DesktopPanel = () => {
  const { panel } = usePanelNavigator();
  const { isThemeLight } = useThemeToggler();
  const [panelIsOpen, setPanelIsOpen] = useState<boolean>(true);

  const handleOpenPanel = () => {
    setPanelIsOpen((prev) => !prev);
  };

  return (
    <section
      className={`border-grey hidden h-dvh flex-col overflow-x-hidden pt-8 pb-4 duration-500 lg:flex ${isThemeLight ? "bg-grey/10" : "bg-black/20"} ${panelIsOpen ? "w-100 px-7" : "w-9 px-1"}`}
    >
      <button
        onClick={handleOpenPanel}
        title="Close Panel"
        className="text-grey hover:text-secondary hover:bg-dark-grey mb-2 w-fit rounded-md p-1 duration-300"
      >
        <PanelLeftClose
          className={`size-5 duration-500 ${panelIsOpen && "rotate-180"}`}
        />
      </button>
      <PanelNavigationList
        classList={`${panelIsOpen ? "opacity-100" : "opacity-0 duration-500"}`}
      />

      <section
        className={scrollBar({
          color: "darkGrey",
          thickness: "thin",
          className: `my-2 h-full max-h-full overflow-x-hidden duration-500 ${panelIsOpen ? "opacity-100" : "overflow-y-hidden opacity-0"}`,
        })}
      >
        <KyraPanelContent panel={panel} />
      </section>
    </section>
  );
};
