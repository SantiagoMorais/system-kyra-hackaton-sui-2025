"use client";
import { ConnectButton } from "@suiet/wallet-kit";
import { useWallet } from "@suiet/wallet-kit";
import { redirect } from "next/navigation";
import { useEffect } from "react";

import { useThemeToggler } from "@/contexts/theme-toggler-context/hooks";
import { routes } from "@/utils/routes";

export const ConnectToTheWalletButton = () => {
  const { status } = useWallet();
  const { isThemeLight } = useThemeToggler();

  useEffect(() => {
    if (status === "connected") redirect(routes.kyra);
  }, [status]);

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
        onConnectSuccess={() => redirect(routes.kyra)}
      />
    </section>
  );
};
