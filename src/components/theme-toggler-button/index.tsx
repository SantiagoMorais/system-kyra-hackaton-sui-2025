"use client";

import { motion } from "framer-motion";
import { Moon, Sun } from "lucide-react";

import { useThemeToggler } from "@/contexts/theme-toggler-context/hooks";

export const ThemeTogglerButton = () => {
  const { handleThemeToggler, isThemeLight } = useThemeToggler();

  return (
    <button onClick={handleThemeToggler}>
      <motion.div
        key={isThemeLight ? "light" : "dark"}
        initial={{ rotate: -45, scale: 0.8 }}
        animate={{ rotate: 0, scale: 1.1 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
      >
        {isThemeLight ? <Sun /> : <Moon />}
      </motion.div>
    </button>
  );
};
