"use client";
import { useWallet } from "@suiet/wallet-kit";
import { redirect } from "next/navigation";
import { useLayoutEffect } from "react";

import { ComponentsContainer } from "@/components/components-container";
import { routes } from "@/utils/routes";

import { ConnectButton } from "./components/connect-button";
import { KyraChat } from "./components/kyra-chat";
import { Navbar } from "./components/navbar";

const Home = () => {
  const { status } = useWallet();

  useLayoutEffect(() => {
    if (status === "connected") redirect(routes.kyra);
  }, [status]);

  return (
    <ComponentsContainer className="min-h-dvh flex-col md:flex-row">
      <ConnectButton className="hidden md:flex" />
      <Navbar />
      <KyraChat />
    </ComponentsContainer>
  );
};

export default Home;
