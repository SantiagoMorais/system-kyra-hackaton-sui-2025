"use client";

import { LogOut } from "lucide-react";

import { ThemeTogglerButton } from "@/components/theme-toggler-button";
import { INavigationContentProps } from "@/core/interfaces/navigation-content-props";

export const NavigationContent = ({
  name,
  setRenderDisconnectCard,
}: INavigationContentProps) => (
  <div className="relative flex items-center gap-4">
    <ThemeTogglerButton />
    <p className="text-secondary/60">@{name}</p>
    <button
      className="group hover:bg-grey cursor-pointer rounded-lg p-1.5 duration-500 hover:opacity-70"
      onClick={() => setRenderDisconnectCard(true)}
    >
      <LogOut className="text-grey group-hover:text-secondary size-5 duration-500" />
    </button>
  </div>
);
