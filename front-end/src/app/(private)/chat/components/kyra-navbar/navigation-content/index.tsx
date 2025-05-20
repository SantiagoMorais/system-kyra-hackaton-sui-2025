"use client";

import { BotMessageSquare, House, LogOut } from "lucide-react";

import { ThemeTogglerButton } from "@/components/theme-toggler-button";
import { INavigationContentProps } from "@/core/interfaces/navigation-content-props";
import { routes } from "@/utils/routes";

import { NavigationRouteButtons } from "./navigation-route-buttons";

export const NavigationContent = ({
  name,
  setRenderDisconnectCard,
  isHomePage,
}: INavigationContentProps) => {
  const handleContent = () => {
    if (isHomePage)
      return (
        <NavigationRouteButtons
          icon={BotMessageSquare}
          route={routes.public.welcome}
          title="Try Kyra"
        />
      );
    return (
      <NavigationRouteButtons
        icon={House}
        route={routes.public.home}
        title="Go Home"
      />
    );
  };

  return (
    <div className="relative flex items-center gap-4">
      <ThemeTogglerButton />
      <p className="text-secondary/60">@{name}</p>
      {handleContent()}
      <button
        className="group hover:bg-grey cursor-pointer rounded-lg p-1.5 duration-500 hover:opacity-70"
        onClick={() => setRenderDisconnectCard(true)}
        title="Log out"
      >
        <LogOut className="text-grey group-hover:text-secondary size-5 duration-500" />
      </button>
    </div>
  );
};
