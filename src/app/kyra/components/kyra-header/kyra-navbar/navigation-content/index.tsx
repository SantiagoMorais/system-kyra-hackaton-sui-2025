"use client";

import { ChevronDown } from "lucide-react";
import { useState } from "react";
import { Collapse } from "react-collapse";

import { INavigationContentProps } from "@/core/interfaces/navigation-content-props";

export const NavigationContent = ({
  name,
  setRenderDisconnectCard,
}: INavigationContentProps) => {
  const [accordionOpenned, setAccordionOpenned] = useState<boolean>(false);

  return (
    <>
      <div className="relative flex items-center">
        <p className="text-secondary/60">@{name}</p>
        <button
          className="cursor-pointer p-1.5 duration-300 hover:opacity-70"
          onClick={() => setAccordionOpenned(!accordionOpenned)}
        >
          <ChevronDown
            className={`text-grey size-5 duration-500 ${accordionOpenned ? "rotate-180" : ""}`}
          />
        </button>
      </div>

      <div className="absolute top-full right-0 z-10">
        <Collapse isOpened={accordionOpenned}>
          <div className="bg-dark-grey border-black-grey flex w-fit flex-col gap-2 border p-3">
            {name && <p className="text-secondary/60">@{name}</p>}
            <button
              className="text-secondary cursor-pointer py-1 pr-2 capitalize duration-300 hover:opacity-70"
              onClick={() => setRenderDisconnectCard(true)}
            >
              Disconnect
            </button>
          </div>
        </Collapse>
      </div>
    </>
  );
};
