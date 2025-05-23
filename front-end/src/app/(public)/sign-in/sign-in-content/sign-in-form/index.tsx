"use client";
import { useState } from "react";
import { signIn } from "next-auth/react";

import { useThemeToggler } from "@/contexts/theme-toggler-context/hooks";

import { useWallet } from "@suiet/wallet-kit";

export const SignInForm = () => {
  const { account } = useWallet();
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const { isThemeLight } = useThemeToggler();

  const colors = isThemeLight ? 'border-gray-300' : 'border-gray-300 text-white';

  const handleSigIn = async () => {
    if (password.length === 0) {
      setErrorMessage("You must enter a password");
      return;
    }

    if (!account) {
      setErrorMessage("You must connect your wallet");
      return;
    }

    const res = await signIn("credentials", {
      wallet_address: account.address,
      password,
      redirect: true,
      callbackUrl: "/chat",
    });

    if (!res?.ok) {
      setErrorMessage("Invalid password or wallet address");
    }
  };

  return (
    <div className="flex flex-col gap-6 w-full mt-4">
      <input
        type="password"
        placeholder="Password"
        value={password} onChange={(e) => setPassword(e.target.value)}
        className={`border ${colors} p-2 w-full h-15`}
      />
      <div className={`${errorMessage ? "block" : "hidden"}`}>
        <span className="text-red-500 text-sm">{errorMessage}</span>
      </div>
      <button
        type="submit"
        className="bg-orange-600 text-white rounded-md p-2 w-full h-15"
        onClick={handleSigIn}
      >
        Sign In
      </button>
    </div>
  );
};
