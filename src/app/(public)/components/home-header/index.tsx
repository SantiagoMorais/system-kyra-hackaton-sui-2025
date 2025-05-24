"use client";
import { useWallet } from "@suiet/wallet-kit";
import { useState } from "react";

import { DisconnectCard } from "@/app/(private)/chat/components/kyra-navbar/disconnect-card";
import { NavigationContent } from "@/app/(private)/chat/components/kyra-navbar/navigation-content";
import { ConnectButton } from "@/app/components/connect-button";

export const HomeHeader = () => {
  const [renderDisconnectCard, setRenderDisconnectCard] =
    useState<boolean>(false);
  const { status, name, disconnect } = useWallet();

  const handleConnectionStatusContent = () => {
    if (status === "disconnected")
      return <ConnectButton className="p-0 lg:static" />;
    return (
      <NavigationContent
        name={name}
        setRenderDisconnectCard={setRenderDisconnectCard}
        isHomePage
      />
    );
  };

  return (
    <header className="flex w-full max-w-(--breakpoint-2xl) items-center justify-between py-6 md:py-8">
      <h1 className="text-4xl text-orange-600 md:text-5xl">Kyra</h1>
      {handleConnectionStatusContent()}
      {renderDisconnectCard && (
        <DisconnectCard
          disconnect={disconnect}
          setRenderDisconnectCard={setRenderDisconnectCard}
        />
      )}
    </header>
  );
};
