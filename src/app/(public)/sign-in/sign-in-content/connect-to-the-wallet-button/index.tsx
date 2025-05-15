"use client";
import { ConnectButton } from "@suiet/wallet-kit";
import { redirect } from "next/navigation";

import { useThemeToggler } from "@/contexts/theme-toggler-context/hooks";
import { routes } from "@/utils/routes";

export const ConnectToTheWalletButton = () => {
  const { isThemeLight } = useThemeToggler();

  const onConnectSuccess = () => {
    document.cookie = `token=wallet-authenticated; path=/`;
    redirect(routes.private.home);
  };

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
