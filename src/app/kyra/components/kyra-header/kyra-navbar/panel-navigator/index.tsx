"use client";

import { usePanelNavigator } from "@/contexts/panel-navigator-context/hooks";

export const PanelNavigator = () => {
  const { navigations, handlePanel } = usePanelNavigator();

  return (
    <ul className="flex gap-2 md:hidden">
      {navigations.map(({ icon: Icon, text: panel }) => (
        <li key={panel}>
          <button
            className="text-grey p-1 duration-300 hover:opacity-70"
            onClick={() => handlePanel(panel)}
          >
            <Icon />
          </button>
        </li>
      ))}
    </ul>
  );
};
