"use client";
import { useWallet } from "@suiet/wallet-kit";
import Image from "next/image";
import { redirect } from "next/navigation";
import { useEffect } from "react";

import hexagonLogo from "@/assets/imgs/hexagon.png";
import { ThemeTogglerButton } from "@/components/theme-toggler-button";
import { navbarIcons } from "@/utils/navbar-icons";
import { routes } from "@/utils/routes";

import { ConnectButton } from "../connect-button";

export const Navbar = () => {
  const { status } = useWallet();

  useEffect(() => {
    if (status === "connected") redirect(routes.kyra);
  }, [status]);

  return (
    <header className="border-light-grey/50 flex w-full flex-row-reverse items-center gap-5 border-b p-5 md:h-dvh md:min-h-dvh md:w-fit md:space-y-0 md:border-r md:px-5 md:py-0 md:pt-25">
      <ConnectButton className="static w-fit md:hidden" />
      <nav className="flex h-full items-center gap-5 md:flex-col">
        <span className="hidden size-13 min-h-13 min-w-13 bg-orange-600 md:block" />
        <div className="bg-light-grey relative hidden size-13 min-h-13 min-w-13 md:block">
          <Image
            src={hexagonLogo}
            alt="hexagon logo"
            fill
            className="object-cover p-2.5"
          />
        </div>
        <ul className="flex items-center gap-3.5 md:w-full md:flex-col">
          {navbarIcons.map(({ icon: Icon }, index) => (
            <li key={index} className="size-6 h-fit max-h-6">
              <button className="group size-6 cursor-pointer">
                <Icon className="text-light-grey/40 group-hover:text-light-grey/100 size-6 duration-300" />
              </button>
            </li>
          ))}
        </ul>
        <ThemeTogglerButton className="-ml-1.5 md:-mt-1.5" />
      </nav>
    </header>
  );
};
