"use client";

import { X } from "lucide-react";
import { useState } from "react";

import { IPanelNavigations } from "@/contexts/panel-navigator-context/interfaces";
import { ICursorPosition } from "@/core/interfaces/panel-navigator-navbar-props";

import { Cursor } from "./cursor";
import { PanelNavigationItem } from "./panel-navigation-item";

export const PanelNavbar = ({
  navigations,
  handleOpenPanel,
}: {
  navigations: Array<IPanelNavigations>;
  handleOpenPanel: (panel?: boolean) => void;
}) => {
  const [position, setPosition] = useState<ICursorPosition>({
    top: 0,
    left: 0,
    width: 0,
    opacity: 0,
    height: 0,
  });

  return (
    <nav className="flex flex-col gap-2">
      <button
        onClick={() => handleOpenPanel()}
        className="text-grey ml-auto duration-300 hover:opacity-70"
      >
        <X />
      </button>
      <ul className="relative flex w-full gap-1.5">
        {navigations.map(({ icon, text }) => (
          <PanelNavigationItem
            icon={icon}
            text={text}
            key={text}
            setPosition={setPosition}
          />
        ))}
        <Cursor position={position} className="z-20" />
      </ul>
    </nav>
  );
};
