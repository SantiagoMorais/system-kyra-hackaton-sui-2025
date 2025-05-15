"use client";

import { useState } from "react";
import { twMerge } from "tailwind-merge";

import { usePanelNavigator } from "@/contexts/panel-navigator-context/hooks";
import { ICursorPosition } from "@/core/interfaces/panel-navigator-navbar-props";

import { Cursor } from "./cursor";
import { PanelNavigationItem } from "./panel-navigation-item";

export const PanelNavigationList = ({ classList }: { classList?: string }) => {
  const { navigations } = usePanelNavigator();

  const [position, setPosition] = useState<ICursorPosition>({
    top: 0,
    left: 0,
    width: 0,
    opacity: 0,
    height: 0,
  });

  return (
    <ul className={twMerge("relative flex w-full gap-1.5", classList)}>
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
  );
};
