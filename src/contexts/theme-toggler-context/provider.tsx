"use client";

import React, { useEffect, useState } from "react";

import { ThemeTogglerContext } from "./context";

export const ThemeTogglerProvider = ({ children }: React.PropsWithChildren) => {
  const [isThemeLight, setIsThemeLight] = useState<boolean>(false);

  useEffect(() => {
    const handleSetTheme = () => {
      const storedTheme = localStorage.getItem("local-theme");
      return storedTheme
        ? setIsThemeLight(JSON.parse(storedTheme))
        : setIsThemeLight(false);
    };

    handleSetTheme();
  }, []);

  useEffect(() => {
    localStorage.setItem("local-theme", isThemeLight ? "true" : "false");
    document.body.classList.toggle("light", isThemeLight);
  }, [isThemeLight]);

  const handleThemeToggler = () => {
    setIsThemeLight((prevValue) => !prevValue);
  };

  return (
    <ThemeTogglerContext.Provider value={{ isThemeLight, handleThemeToggler }}>
      {children}
    </ThemeTogglerContext.Provider>
  );
};
