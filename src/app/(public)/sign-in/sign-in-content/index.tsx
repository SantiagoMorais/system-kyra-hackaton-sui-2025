"use client";
import { useState } from "react";

import { fetchUserByWalletAddress } from "@/lib/api";

import { ConnectToTheWalletButton } from "./connect-to-the-wallet-button";
import { CreateAccoutForm } from "./create-account-form";
import { SignInForm } from "./sign-in-form";

export const SignInContent = () => {
  const [hasAccount, setHasAccount] = useState<boolean | null>(null);

  const handleSignIn = async (walletAddress: string) => {
    try {
      await fetchUserByWalletAddress(walletAddress);
      setHasAccount(true);
    } catch (error: unknown ) {
      setHasAccount(false);
    }
  };

  return (
    <section className="z-10 flex flex-col items-center gap-3 p-6 md:flex-1 md:px-10">
      <div className="bg-dark-grey flex max-w-120 flex-col items-center gap-3 rounded-md p-6 md:bg-transparent md:p-0">
        <h2 className="font-redonda text-center text-[40px] leading-13 font-normal text-orange-600">
          Connect Wallet
        </h2>
        <p className="text-light-grey/50 text-center leading-6">
          By connecting your wallet, you agree to our{" "}
          <a
            href="#"
            target="_blank"
            className="text-orange-600 duration-300 hover:opacity-50"
          >
            Terms of Service
          </a>{" "}
          and our{" "}
          <a
            href="#"
            target="_blank"
            className="text-orange-600 duration-300 hover:opacity-50"
          >
            Privacy Policy.
          </a>
        </p>
        {hasAccount !== null ? (
          hasAccount === true ? (
            <SignInForm />
          ) : (
            <CreateAccoutForm />
          )
        ) : (
          <ConnectToTheWalletButton onConnectSuccess={handleSignIn} />
        )}
      </div>
    </section>
  );
};
