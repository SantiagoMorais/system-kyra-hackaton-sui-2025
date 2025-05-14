"use client";

import { useWallet } from "@suiet/wallet-kit";
import { redirect } from "next/navigation";
import { useEffect } from "react";

import { routes } from "@/utils/routes";

import { KyraNavbar } from "./kyra-navbar";
import { KyraSearchInput } from "./kyra-search-input";

export const KyraHeader = () => {
  const { status } = useWallet();

  useEffect(() => {
    if (status === "disconnected") redirect(routes.home);
  }, [status]);

  return (
    <header className="border-grey/50 flex w-full justify-center border-b p-4">
      <section className="flex w-full max-w-(--breakpoint-2xl) flex-col items-end gap-4 lg:flex-row-reverse lg:justify-between">
        <KyraNavbar />
        <KyraSearchInput />
      </section>
    </header>
  );
};
