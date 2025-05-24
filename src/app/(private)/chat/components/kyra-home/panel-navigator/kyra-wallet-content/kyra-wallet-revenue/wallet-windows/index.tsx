import { twMerge } from "tailwind-merge";

import { WalletContent } from "@/utils/wallet-windows";

import { BalanceWindow } from "./balance-window";
import { HistoryWindow } from "./history-window";
import { SendWindow } from "./send-window";
import { StakingWindow } from "./staking-window";

export const WalletWindows = ({
  window,
  className,
}: {
  window: WalletContent;
  className?: string;
}) => {
  const content = () => {
    if (window === "Balance") return <BalanceWindow />;
    if (window === "Send") return <SendWindow />;
    if (window === "Staking") return <StakingWindow />;
    if (window === "History") return <HistoryWindow />;
    return <></>;
  };

  return (
    <div className={twMerge("flex h-72 flex-col items-center", className)}>
      {content()}
    </div>
  );
};
