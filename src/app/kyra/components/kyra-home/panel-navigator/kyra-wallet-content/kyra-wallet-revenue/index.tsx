"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Eye, EyeOff } from "lucide-react";
import { useState } from "react";

export const KyraWalletBalance = () => {
  const [showBalance, setShowBalance] = useState<boolean>(false);

  const handleShowBalance = () => {
    setShowBalance((prev) => !prev);
  };

  return (
    <div className="bg-dark-grey relative mb-8 space-y-11 p-2.5">
      <h3 className="text-secondary/70 text-center">Balance</h3>
      <div className="space-y-2">
        <div className="relative flex h-12 items-center justify-center">
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
      </div>
      <button
        onClick={handleShowBalance}
        className="text-grey absolute top-1.5 right-1.5 ml-auto p-1 duration-300 hover:opacity-70"
      >
        {showBalance ? (
          <Eye className="size-5" />
        ) : (
          <EyeOff className="size-5" />
        )}
      </button>
    </div>
  );
};
