import { twMerge } from "tailwind-merge";

import { WalletContent } from "@/utils/wallet-windows";

import { BalanceWindow } from "./balance-window";

export const WalletWindows = ({
  window,
  className,
}: {
  window: WalletContent;
  className?: string;
}) => {
  const content = () => {
    if (window === "Balance") return <BalanceWindow />;
    return <></>;
  };

  return (
    <div className={twMerge("flex h-60 flex-col items-center", className)}>
      {content()}
    </div>
  );
};
