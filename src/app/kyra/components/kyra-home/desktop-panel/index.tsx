"use client";

import { usePanelNavigator } from "@/contexts/panel-navigator-context/hooks";
import { useThemeToggler } from "@/contexts/theme-toggler-context/hooks";
import { scrollBar } from "@/styles";

import { kyraPanelContent } from "../panel-navigator";
import { PanelNavigationList } from "../panel-navigator/panel-navbar/panel-navigation-list";

export const DesktopPanel = () => {
  const { panel } = usePanelNavigator();
  const { isThemeLight } = useThemeToggler();

  return (
    <section
      className={`border-grey hidden h-dvh w-100 flex-col gap-8 overflow-x-hidden px-7 py-8 lg:flex ${isThemeLight ? "bg-grey/10" : "bg-black/20"}`}
    >
      <PanelNavigationList />
      <section
        className={scrollBar({
          color: "darkGrey",
          thickness: "thin",
          className: "h-full max-h-full overflow-x-hidden",
        })}
      >
        {kyraPanelContent({ panel })}
      </section>
    </section>
  );
};
