"use client";
import { useState } from "react";

import { ConnectWallet } from "./connect-wallet";
import { ForgotPassword } from "./fogot-password";

export const LoginContent = () => {
  const [windowSelected, setWindowSelected] = useState<
    "forgot-password" | "connect-wallet"
  >("connect-wallet");

  const content = () => {
    if (windowSelected === "connect-wallet")
      return (
        <>
          <ConnectWallet />
          <button
            onClick={() => setWindowSelected("forgot-password")}
            className="text-action cursor-pointer duration-300 hover:opacity-50"
          >
            Forget Password?
          </button>
        </>
      );

    return (
      <>
        <ForgotPassword />
        <button
          onClick={() => setWindowSelected("connect-wallet")}
          className="text-action cursor-pointer duration-300 hover:opacity-50"
        >
          Connect Wallet
        </button>
      </>
    );
  };

  return (
    <section className="z-10 flex flex-col items-center gap-3 p-6 md:flex-1 md:px-10">
      <div className="bg-dark-grey flex max-w-120 flex-col items-center gap-3 rounded-md p-6 md:bg-transparent md:p-0">
        {content()}
      </div>
    </section>
  );
};
