"use client";
import { useState } from "react";
import { useWallet } from "@suiet/wallet-kit";

import { useThemeToggler } from "@/contexts/theme-toggler-context/hooks";
import { login } from '@/app/login/actions'

export const SignInForm = () => {
  const { account } = useWallet();
  const walletAddress = (account?.address.slice(0, 15) + "............") + account?.address.slice(-15);
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const { isThemeLight } = useThemeToggler();

  const colors = isThemeLight ? 'border-gray-300' : 'border-gray-300 text-white';

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
    <div className="flex flex-col gap-6 w-full mt-4">
      <input
        type="text"
        placeholder={walletAddress}
        value={walletAddress}
        readOnly
        disabled
        className={`border ${colors} rounded-2xl p-2 w-full h-15`}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className={`border ${colors} p-2 w-full h-15`}
        disabled={isLoading}
      />
      <div className={`${errorMessage ? "block" : "hidden"}`}>
        <span className="text-red-500 text-sm">{errorMessage}</span>
      </div>
      <button
        type="submit"
        className="bg-orange-600 text-white rounded-md p-2 w-full h-15 disabled:opacity-50"
        onClick={handleSigIn}
        disabled={isLoading}
      >
        {isLoading ? "Signing In..." : "Sign In"}
      </button>
    </div>
  );
};