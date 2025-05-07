"use client";

import { useWallet } from "@suiet/wallet-kit";
import { redirect } from "next/navigation";
import { useLayoutEffect } from "react";

import { routes } from "@/utils/routes";

import { KyraSearchInput } from "../kyra-search-input";
import { KyraNavbar } from "./kyra-navbar";

export const KyraHeader = () => {
  const { status } = useWallet();

  useLayoutEffect(() => {
    if (status === "disconnected") redirect(routes.login);
  }, [status]);

  return (
    <header className="border-grey/50 flex w-full justify-center border-b p-4">
      <section className="flex w-full max-w-(--breakpoint-2xl) flex-col items-end gap-4 md:flex-row-reverse md:justify-between">
        <KyraNavbar />

        <KyraSearchInput />
      </section>
    </header>
  );
};
