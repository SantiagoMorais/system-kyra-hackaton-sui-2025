"use client";
import { ConnectButton, useWallet } from "@suiet/wallet-kit";

import { useThemeToggler } from "@/contexts/theme-toggler-context/hooks";
import { useEffect } from "react";

export const ConnectToTheWalletButton = ({
  onConnectSuccess,
}: {
  onConnectSuccess: (walletAddress: string) => void;
}) => {
  const { account } = useWallet();
  const { isThemeLight } = useThemeToggler();

  useEffect(() => {
    if (account) {
      onConnectSuccess(account.address);
    }
  }, [account]);

  return (
    <section className="text-secondary w-full cursor-pointer items-center border border-orange-600 uppercase duration-300 hover:opacity-50">
      <ConnectButton
        style={{
          backgroundColor: "transparent",
          padding: "20px 12px",
          width: "100%",
          minWidth: "100%",
          height: "100%",
          borderRadius: "0",
          display: "block",
          textAlign: "start",
          textTransform: "uppercase",
          fontFamily: "'IBM Plex Mono', monospace",
          fontWeight: "400",
          fontSize: "16px",
          color: `${isThemeLight ? "black" : "white"}`,
        }}
        label="Connect to your wallet"
        onConnectSuccess={onConnectSuccess}
      />
    </section>
  );
};
