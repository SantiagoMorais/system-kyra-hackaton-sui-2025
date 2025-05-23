"use client";
import { useState } from "react";
import { signIn } from "next-auth/react";

import { useThemeToggler } from "@/contexts/theme-toggler-context/hooks";
import { registerUser } from "@/lib/api";

import { useWallet } from "@suiet/wallet-kit";
import { routes } from "@/utils/routes";

export const CreateAccoutForm = () => {
  const { account } = useWallet();
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [sucessMessage, setSuccessMessage] = useState("");
  const { isThemeLight } = useThemeToggler();

  const colors = isThemeLight ? 'border-gray-300' : 'border-gray-300 text-white';

  const handleCreateAccount = async () => {
    if (password.length < 6) {
      setErrorMessage("Password must be at least 6 characters!");
      return;
    }

    if (password !== confirmPassword) {
      setErrorMessage("Passwords do not match!");
      return;
    }

    try {
      if (!account) {
        setErrorMessage("Please connect your wallet first.");
        return;
      }
      const data = await registerUser(account.address, password);
      setSuccessMessage("Account created successfully! Please wait...");

      setTimeout(async () => {
        await signIn("credentials", {
          wallet_address: account.address,
          password,
          redirect: true,
          callbackUrl: routes.private.chat,
        });
      }, 3000);
    } catch (error: any) {
      setErrorMessage("An error occurred while creating the account.");
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
      <input
        type="password"
        placeholder="Confirm Password"
        value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)}
        className={`border ${colors} p-2 w-full h-15`}
      />
      <div className={`${errorMessage || sucessMessage ? "block" : "hidden"}`}>
        <span className="text-red-500 text-sm">{errorMessage}</span>
        <span className="text-green-500 text-sm">{sucessMessage}</span>
      </div>
      <button
        type="submit"
        className="bg-orange-600 text-white rounded-md p-2 w-full h-15"
        onClick={handleCreateAccount}
      >
        Create Account
      </button>
    </div>
  );
};
