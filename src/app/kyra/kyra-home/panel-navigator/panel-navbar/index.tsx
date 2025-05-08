"use client";

import { useState } from "react";

import { IPanelNavigations } from "@/contexts/panel-navigator-context/interfaces";
import { ICursorPosition } from "@/core/interfaces/panel-navigator-navbar-props";

import { Cursor } from "./cursor";
import { PanelItem } from "./panel-item";

export const PanelNavbar = ({
  navigations,
}: {
  navigations: Array<IPanelNavigations>;
}) => {
  const [position, setPosition] = useState<ICursorPosition>({
    top: 0,
    left: 0,
    width: 0,
    opacity: 0,
    height: 0,
  });

  return (
    <nav>
      <ul className="relative flex w-full gap-1.5">
        {navigations.map(({ icon, text }) => (
          <PanelItem
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
