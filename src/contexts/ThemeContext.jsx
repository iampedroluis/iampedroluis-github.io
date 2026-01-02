import React, { createContext, useContext, useState, useEffect } from "react";

const ThemeContext = createContext();

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};

export const ThemeProvider = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    if (typeof window !== "undefined") {
      const savedTheme = localStorage.getItem("darkMode");
      if (savedTheme !== null) {
        return savedTheme === "true";
      }
      // Si no hay preferencia guardada, usar la del sistema (por defecto light)
      return (
        window.matchMedia &&
        window.matchMedia("(prefers-color-scheme: dark)").matches
      );
    }
    return false; // Por defecto modo claro
  });

  useEffect(() => {
    localStorage.setItem("darkMode", isDarkMode);
    document.body.classList.toggle("dark", isDarkMode);
  }, [isDarkMode]);

  const toggleTheme = () => {
    setIsDarkMode((prev) => !prev);
  };

  const themeClasses = {
    // Backgrounds con gradientes
    background: isDarkMode
      ? "bg-gradient-to-b from-[#484646] via-[#515050] via-[#5b5a5b] via-[#656465] to-[#6f6f6f]"
      : "bg-gradient-to-b from-[#e3e3e3] via-[#e6e6e6] via-[#e8e8e8] via-[#ebebeb] to-[#eeeeee]",

    // Textos
    text: isDarkMode ? "text-white" : "text-black",
    textSecondary: isDarkMode ? "text-gray-300" : "text-gray-700",
    textMuted: isDarkMode ? "text-gray-400" : "text-gray-500",

    // Borders
    border: isDarkMode ? "border-white/20" : "border-black/20",
    borderLight: isDarkMode ? "border-white/10" : "border-black/10",

    // Cards y contenedores
    card: isDarkMode
      ? "bg-gradient-to-b from-[#484646] via-[#515050] to-[#5b5a5b] border-white/10"
      : "bg-gradient-to-b from-[#e3e3e3] via-[#e6e6e6] to-[#e8e8e8] border-black/10",

    // Backgrounds con transparencia para overlay
    overlay: isDarkMode ? "bg-black/80" : "bg-white/80",

    // Botones
    button: isDarkMode
      ? "bg-white/10 text-white hover:bg-white/20"
      : "bg-black/10 text-black hover:bg-black/20",

    // Inputs
    input: isDarkMode
      ? "bg-white/10 text-white placeholder-gray-400 border-white/20"
      : "bg-black/5 text-black placeholder-gray-500 border-black/20",
  };

  return (
    <ThemeContext.Provider
      value={{
        isDarkMode,
        toggleTheme,
        themeClasses,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};
