"use client";
import { useWallet } from "@suiet/wallet-kit";
import { useState } from "react";

import { login } from "@/app/login/actions";
import { useThemeToggler } from "@/contexts/theme-toggler-context/hooks";

export const SignInForm = () => {
  const { account } = useWallet();
  const walletAddress =
    account?.address.slice(0, 15) +
    "............" +
    account?.address.slice(-15);
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const { isThemeLight } = useThemeToggler();

  const colors = isThemeLight
    ? "border-gray-300"
    : "border-gray-300 text-white";

  const handleSigIn = async () => {
    setIsLoading(true);
    setErrorMessage("");

    if (!account) {
      setErrorMessage("You must connect your wallet");
      setIsLoading(false);
      return;
    }

    if (password.length === 0) {
      setErrorMessage("You must enter a password");
      setIsLoading(false);
      return;
    }

    if (!account) {
      setErrorMessage("You must connect your wallet");
      setIsLoading(false);
      return;
    }

    login({ wallet_address: account.address, password });
  };

  return (
    <div className="mt-4 flex w-full flex-col gap-6">
      <input
        type="text"
        placeholder={walletAddress}
        value={walletAddress}
        readOnly
        disabled
        className={`border ${colors} h-15 w-full rounded-2xl p-2`}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className={`border ${colors} h-15 w-full p-2`}
        disabled={isLoading}
      />
      <div className={`${errorMessage ? "block" : "hidden"}`}>
        <span className="text-sm text-red-500">{errorMessage}</span>
      </div>
      <button
        type="submit"
        className="h-15 w-full rounded-md bg-orange-600 p-2 text-white disabled:opacity-50"
        onClick={handleSigIn}
        disabled={isLoading}
      >
        {isLoading ? "Signing In..." : "Sign In"}
      </button>
    </div>
  );
};
