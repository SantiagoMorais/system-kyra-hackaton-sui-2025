"use client";

import { motion } from "framer-motion";
import { Moon, Sun } from "lucide-react";
import { twMerge } from "tailwind-merge";

import { useThemeToggler } from "@/contexts/theme-toggler-context/hooks";

export const ThemeTogglerButton = ({ className }: { className?: string }) => {
  const { handleThemeToggler, isThemeLight } = useThemeToggler();

  return (
    <button
      onClick={handleThemeToggler}
      className={twMerge("w-fit cursor-pointer", className)}
      title={isThemeLight ? "Set Dark" : "Set Light"}
    >
      <motion.div
        key={isThemeLight ? "light" : "dark"}
        initial={{ rotate: -45, scale: 0.8 }}
        animate={{ rotate: 0, scale: 1 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
      >
        {isThemeLight ? (
          <Sun className="text-light-grey/40 hover:text-light-grey/100 duration-300" />
        ) : (
          <Moon className="text-light-grey/40 hover:text-light-grey/100 duration-300" />
        )}
      </motion.div>
    </button>
  );
};
