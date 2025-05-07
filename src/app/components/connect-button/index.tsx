"use client";

import { useWallet } from "@suiet/wallet-kit";
import { ChevronDown, Info } from "lucide-react";
import Link from "next/link";
import { redirect } from "next/navigation";
import { useLayoutEffect, useState } from "react";
import { Collapse } from "react-collapse";
import { twMerge } from "tailwind-merge";

import { routes } from "@/utils/routes";

export const ConnectButton = ({ className }: { className?: string }) => {
  const [accordionOpenned, setAccordionOpenned] = useState<boolean>(false);
  const { status, disconnect } = useWallet();

  useLayoutEffect(() => {
    if (status === "connected") redirect(routes.kyra);
  }, [status]);

  return (
    <section>
      {status === "disconnected" ? (
        <Link
          href={routes.login}
          className={twMerge(
            "text-secondary fixed top-5 right-5 flex cursor-pointer items-center gap-1.5 bg-orange-600 px-2 py-1.5 text-sm uppercase duration-300 hover:opacity-70 md:gap-2.5 md:px-4 md:py-3 md:text-base",
            className
          )}
        >
          <Info className="size-5" />
          Connect
        </Link>
      ) : (
        <div className="fixed top-10 right-10">
          <button
            className="cursor-pointer duration-300 hover:opacity-70"
            onClick={() => setAccordionOpenned(!accordionOpenned)}
          >
            <ChevronDown
              className={`text-secondary duration-500 ${accordionOpenned && "rotate-180"}`}
            />
          </button>
          <Collapse isOpened={accordionOpenned}>
            <div className="bg-dark-grey rounded-md p-3">
              <button
                className="text-secondary cursor-pointer capitalize duration-300 hover:opacity-70"
                onClick={disconnect}
              >
                Disconnect
              </button>
            </div>
          </Collapse>
        </div>
      )}
    </section>
  );
};
