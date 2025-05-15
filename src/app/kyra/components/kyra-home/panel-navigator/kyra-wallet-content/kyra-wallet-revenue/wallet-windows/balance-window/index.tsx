"use client";
import { useWallet } from "@suiet/wallet-kit";
import { AnimatePresence, motion } from "framer-motion";
import { Eye, EyeOff } from "lucide-react";
import { useState } from "react";

export const BalanceWindow = () => {
  const { account } = useWallet();
  const [showBalance, setShowBalance] = useState<boolean>(false);

  const handleShowBalance = () => {
    setShowBalance((prev) => !prev);
  };

  return (
    <>
      <div className="flex w-full items-center justify-between px-4">
        <p className="text-grey ml-auto flex-1 truncate p-1 duration-300 hover:opacity-70">
          {account?.address}
        </p>
        <div className="flex flex-1 justify-end">
          <button
            onClick={handleShowBalance}
            className="text-grey ml-auto p-1 duration-300 hover:opacity-70"
          >
            {showBalance ? (
              <Eye className="size-5" />
            ) : (
              <EyeOff className="size-5" />
            )}
          </button>
        </div>
      </div>

      <div className="relative flex w-full flex-1 items-center justify-center">
        <AnimatePresence mode="wait">
          {showBalance ? (
            <motion.p
              key="value"
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 20, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="font-redonda text-secondary/70 absolute truncate text-center text-4xl"
            >
              $ 474.988,76
            </motion.p>
          ) : (
            <motion.p
              key="dots"
              initial={{ x: 20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: -20, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="font-redonda text-secondary/70 absolute truncate text-center text-4xl"
            >
              $ .....
            </motion.p>
          )}
        </AnimatePresence>
      </div>
    </>
  );
};
