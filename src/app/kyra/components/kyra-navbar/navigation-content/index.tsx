"use client";

import { ChevronDown } from "lucide-react";
import { useState } from "react";
import { Collapse } from "react-collapse";

import { ThemeTogglerButton } from "@/components/theme-toggler-button";
import { INavigationContentProps } from "@/core/interfaces/navigation-content-props";

export const NavigationContent = ({
  name,
  setRenderDisconnectCard,
}: INavigationContentProps) => {
  const [accordionOpened, setAccordionOpened] = useState<boolean>(false);

  return (
    <>
      <div className="relative flex items-center gap-4">
        <ThemeTogglerButton />
        <p className="text-secondary/60">@{name}</p>
        <button
          className="cursor-pointer p-1.5 duration-300 hover:opacity-70"
          onClick={() => setAccordionOpened(!accordionOpened)}
        >
          <ChevronDown
            className={`text-grey size-5 duration-500 ${accordionOpened ? "rotate-180" : ""}`}
          />
        </button>
      </div>

      <div className="absolute top-full right-10 z-90">
        <Collapse isOpened={accordionOpened}>
          <div className="bg-dark-grey border-black-grey flex w-fit flex-col gap-2 border p-3 pl-7">
            <button
              className="text-secondary group font-redonda relative cursor-pointer py-1 pr-2 capitalize duration-300"
              onClick={() => setRenderDisconnectCard(true)}
            >
              <span className="absolute top-0 -left-4 h-full w-0.75 origin-top scale-y-0 bg-orange-600 transition-transform duration-500 group-hover:origin-bottom group-hover:scale-y-100" />
              Disconnect
            </button>
          </div>
        </Collapse>
      </div>
    </>
  );
};
