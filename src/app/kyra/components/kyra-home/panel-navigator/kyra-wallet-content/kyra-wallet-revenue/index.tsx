"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Eye, EyeOff } from "lucide-react";
import { useState } from "react";

export const KyraWalletRevenue = () => {
  const [showRevenue, setShowRevenue] = useState<boolean>(false);

  const handleShowRevenue = () => {
    setShowRevenue((prev) => !prev);
  };

  return (
    <div className="bg-dark-grey relative mb-8 space-y-11 p-2.5">
      <h3 className="text-secondary/70 text-center">Revenue</h3>
      <div className="space-y-2">
        <div className="relative flex h-12 items-center justify-center">
          <AnimatePresence mode="wait">
            {showRevenue ? (
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

        <div className="relative flex h-5 items-center justify-center">
          <AnimatePresence mode="wait">
            {showRevenue ? (
              <motion.p
                key="value-percent"
                initial={{ y: -10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: 10, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="font-redonda absolute text-center text-sm text-red-500"
              >
                -60,8%
              </motion.p>
            ) : (
              <motion.p
                key="dots-percent"
                initial={{ x: 10, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: -10, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="font-redonda absolute text-center text-sm text-red-500"
              >
                ... %
              </motion.p>
            )}
          </AnimatePresence>
        </div>
      </div>
      <button
        onClick={handleShowRevenue}
        className="text-grey absolute right-1.5 bottom-1.5 ml-auto p-1 duration-300 hover:opacity-70"
      >
        {showRevenue ? (
          <Eye className="size-5" />
        ) : (
          <EyeOff className="size-5" />
        )}
      </button>
    </div>
  );
};
