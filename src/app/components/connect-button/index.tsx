import { Info } from "lucide-react";
import Link from "next/link";
import { twMerge } from "tailwind-merge";

import { ThemeTogglerButton } from "@/components/theme-toggler-button";
import { routes } from "@/utils/routes";

export const ConnectButton = ({ className }: { className?: string }) => (
  <section
    className={twMerge(
      "flex w-full items-center justify-end gap-4 p-4 pb-0 lg:fixed lg:top-5 lg:right-5 lg:w-fit lg:p-0",
      className
    )}
  >
    <ThemeTogglerButton />
    <Link
      href={routes.public.signIn}
      className="text-secondary flex items-center gap-1.5 bg-orange-600 px-2 py-1.5 text-sm uppercase duration-300 hover:opacity-70 md:gap-2.5 md:px-4 md:py-3 md:text-base"
    >
      <Info className="size-5" />
      Connect
    </Link>
  </section>
);
