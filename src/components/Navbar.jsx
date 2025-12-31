import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { useLanguage } from "../contexts/LanguageContext";
import { translations } from "../translations/translations";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { language, toggleLanguage } = useLanguage();
  const t = translations[language];
  const [darkMode, setDarkMode] = useState(() => {
    // Detectar preferencia del sistema
    if (typeof window !== "undefined") {
      const savedMode = localStorage.getItem("darkMode");
      if (savedMode !== null) {
        return savedMode === "true";
      }
      // Si no hay preferencia guardada, usar la del sistema (por defecto light)
      return (
        window.matchMedia &&
        window.matchMedia("(prefers-color-scheme: dark)").matches
      );
    }
    return false; // Por defecto modo claro
  });
  const [prevScrollPos, setPrevScrollPos] = useState(window.pageYOffset);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      const visible = prevScrollPos > currentScrollPos;
      setVisible(visible);
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [prevScrollPos]);

  useEffect(() => {
    localStorage.setItem("darkMode", darkMode);
    document.body.classList.toggle("dark", darkMode);
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header
      className={`z-[100] w-full fixed top-0 transition-all duration-500 ease-in-out backdrop-blur-xl ${
        visible ? "translate-y-0" : "-translate-y-full"
      } ${darkMode ? "bg-black/80" : "bg-white/80"} border-b ${
        darkMode ? "border-white/10" : "border-black/10"
      }`}
    >
      <div className="container mx-auto flex py-1 px-6 lg:px-8 justify-between items-center">
        <Link
          to="/"
          className="title-font font-semibold text-xl hover:opacity-70 transition-opacity"
        >
          <span
            className={`block tracking-tight ${
              darkMode ? "text-white" : "text-black"
            }`}
          >
            Pedro Luis
          </span>
        </Link>

        <nav
          className={`md:ml-auto md:mr-auto flex flex-col md:flex-row items-center text-sm justify-center md:flex ${
            isOpen
              ? `block absolute top-full left-0 w-full ${
                  darkMode ? "bg-black/95" : "bg-white/95"
                } backdrop-blur-xl py-6 md:py-0 md:relative`
              : "hidden"
          }`}
        >
          <Link
            className={`mx-4 my-2 md:my-0 font-normal hover:text-primary cursor-pointer transition-all duration-300 hover:opacity-70 ${
              darkMode ? "text-white" : "text-black"
            }`}
            to="/proyectos"
            onClick={() => setIsOpen(false)}
          >
            {t.nav.projects}
          </Link>
          <Link
            className={`mx-4 my-2 md:my-0 font-normal hover:text-primary cursor-pointer transition-all duration-300 hover:opacity-70 ${
              darkMode ? "text-white" : "text-black"
            }`}
            to="/experiencias"
            onClick={() => setIsOpen(false)}
          >
            {t.nav.experiences}
          </Link>
          <Link
            className={`mx-4 my-2 md:my-0 font-normal hover:text-primary cursor-pointer transition-all duration-300 hover:opacity-70 ${
              darkMode ? "text-white" : "text-black"
            }`}
            to="/conocimientos"
            onClick={() => setIsOpen(false)}
          >
            {t.nav.knowledge}
          </Link>
          {isOpen && (
            <>
              <Link
                to="/contacto"
                className={`mx-4 my-2 md:my-0 font-normal hover:text-primary cursor-pointer transition-all duration-300 md:hidden ${
                  darkMode ? "text-white" : "text-black"
                }`}
                onClick={() => setIsOpen(false)}
              >
                {t.nav.contact}
              </Link>
              <div className="flex items-center gap-4 mt-4 md:hidden">
                <button
                  className={`border-0 px-3 py-1 rounded-full text-xs font-medium transition-all duration-300 ${
                    darkMode
                      ? "bg-white/10 text-white hover:bg-white/20"
                      : "bg-black/10 text-black hover:bg-black/20"
                  }`}
                  onClick={toggleLanguage}
                >
                  {language === "es" ? "EN" : "ES"}
                </button>
                <button
                  className={`border-0 ${
                    darkMode ? "text-white" : "text-black"
                  }`}
                  onClick={toggleDarkMode}
                >
                  {darkMode ? (
                    <i className="fas fa-sun focus:outline-none hover:text-primary transition-all duration-300"></i>
                  ) : (
                    <i className="fas fa-moon focus:outline-none hover:text-primary transition-all duration-300"></i>
                  )}
                </button>
              </div>
            </>
          )}
        </nav>

        <button
          onClick={toggleMenu}
          className={`md:hidden focus:outline-none hover:opacity-70 transition-opacity ${
            darkMode ? "text-white" : "text-black"
          }`}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
            />
          </svg>
        </button>

        <div className="md:flex hidden items-center gap-4">
          <button
            className={`px-3 py-1 rounded-full text-xs font-medium transition-all duration-300 ${
              darkMode
                ? "bg-white/10 text-white hover:bg-white/20"
                : "bg-black/10 text-black hover:bg-black/20"
            }`}
            onClick={toggleLanguage}
          >
            {language === "es" ? "EN" : "ES"}
          </button>
          <button
            className="hover:opacity-70 transition-opacity"
            onClick={toggleDarkMode}
          >
            {darkMode ? (
              <i className="fas fa-sun text-white focus:outline-none text-lg"></i>
            ) : (
              <i className="fas fa-moon text-black focus:outline-none text-lg"></i>
            )}
          </button>
          <Link
            to="/contacto"
            className="inline-flex items-center bg-primary hover:bg-primary/90 py-2 px-5 focus:outline-none text-white rounded-full text-sm font-medium transition-all duration-300"
          >
            {t.nav.contact}
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
