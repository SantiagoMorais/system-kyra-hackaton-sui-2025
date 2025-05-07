"use client";

import { useWallet } from "@suiet/wallet-kit";
import { Info } from "lucide-react";
import Link from "next/link";
import { redirect } from "next/navigation";
import { useEffect } from "react";
import { twMerge } from "tailwind-merge";

import { routes } from "@/utils/routes";

export const ConnectButton = ({ className }: { className?: string }) => {
  const { status } = useWallet();

  useEffect(() => {
    if (status === "connected") redirect(routes.kyra);
  }, [status]);

  return (
    <section>
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
    </section>
  );
};
