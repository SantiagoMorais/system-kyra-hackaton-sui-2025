"use client";
import { useWallet } from "@suiet/wallet-kit";
import { useState } from "react";

import { signup } from "@/app/login/actions";
import { useThemeToggler } from "@/contexts/theme-toggler-context/hooks";

export const CreateAccoutForm = () => {
  const { account } = useWallet();
  const walletAddress =
    account?.address.slice(0, 15) +
    "............" +
    account?.address.slice(-15);
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const { isThemeLight } = useThemeToggler();

  const colors = isThemeLight
    ? "border-gray-300"
    : "border-gray-300 text-white";

  const handleSignUp = () => {
    if (!account) {
      setErrorMessage("You must connect your wallet");
      return false;
    }

    if (password.length < 6) {
      setErrorMessage("Password must be at least 6 characters long");
      return false;
    }

    if (password !== confirmPassword) {
      setErrorMessage("Passwords do not match");
      return false;
    }

    signup({ wallet_address: account.address, password });
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
      />
      <input
        type="password"
        placeholder="Confirm Password"
        value={confirmPassword}
        onChange={(e) => setConfirmPassword(e.target.value)}
        className={`border ${colors} h-15 w-full p-2`}
      />
      <div className={`${errorMessage ? "block" : "hidden"}`}>
        <span className="text-sm text-red-500">{errorMessage}</span>
      </div>
      <button
        type="submit"
        className="h-15 w-full rounded-md bg-orange-600 p-2 text-white"
        onClick={handleSignUp}
      >
        Submit
      </button>
    </div>
  );
};
