import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem("darkMode") === "true" ? true : false;
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
      className={`text-gray-600 w-full dark:bg-[#FEFFFE] bg-black body-font sticky top-0 max-w-100 transition-all ${
        visible ? "" : "-translate-y-full"
      }`}
    >
      <div className="container mx-auto flex p-5 justify-between items-center w-full">
        <a
          href="/"
          className="title-font font-medium text-gray-900 mb-4 md:mb-0 miLogo"
        >
          <p className="block text-white cursor-pointer dark:text-dark">
            PEDRO
          </p>
          <p className="block text-white cursor-pointer dark:text-dark">LUIS</p>
        </a>
        <nav
          className={`md:ml-auto md:mr-auto flex flex-col md:flex-row items-center text-base justify-center md:flex ${
            isOpen ? "block" : "hidden"
          }`}
        >
          <Link
            className=" mx-5 font-extralight sm:font-normal hover:text-secondary cursor-pointer text-white  transition duration-500 ease-in-out dark:text-dark"
            to="/proyectos"
          >
            Proyectos
          </Link>
          <Link
            className=" mx-5 font-extralight sm:font-normal hover:text-secondary cursor-pointer text-white transition duration-500 ease-in-out dark:text-dark"
            to="/experiencias"
          >
            Experiencias
          </Link>
          <Link
            className=" mx-5 font-extralight sm:font-normal hover:text-secondary cursor-pointer text-white transition duration-500 ease-in-out dark:text-dark"
            to={"/conocimientos"}
          >
            Conocimientos
          </Link>
          {isOpen && (
            <div className="md:flex flex-col md:flex-row">
              <Link
                to={"/contacto"}
                className="mx-5 font-extralight hover:text-secondary cursor-pointer text-white transition duration-500 ease-in-out dark:text-dark"
              >
                Contacto
              </Link>
            </div>
          )}
          {isOpen && (
            <button className="border-0 md:hidden" onClick={toggleDarkMode}>
              {darkMode ? (
                <i className="fas fa-moon text-dark focus:outline-none hover:text-secondary transition duration-900 ease-in-out"></i>
              ) : (
                <i className="fas fa-sun text-white focus:outline-none hover:text-secondary transition duration-900 ease-in-out"></i>
              )}
            </button>
          )}
        </nav>
        <button onClick={toggleMenu} className="md:hidden focus:outline-none ">
          <svg
            className="w-10 text-blanco dark:text-dark"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            ></path>
          </svg>
        </button>

        <div className="md:block hidden">
          <button className="mx-5 " onClick={toggleDarkMode}>
            {darkMode ? (
              <i className="fas fa-moon text-dark hover:text-secondary focus:outline-none transition duration-900 ease-in-out"></i>
            ) : (
              <i className="fas fa-sun text-white hover:text-secondary focus:outline-none transition duration-900 ease-in-out"></i>
            )}
          </button>
          <Link
            to={"/contacto"}
            className="inline-flex items-center bg-transparent border-2 py-1 px-3 focus:outline-none hover:bg-secondary hover:text-black text-white rounded-full text-base mt-4 md:mt-0 border-secondary transition duration-500 dark:text-dark ease-in-out"
          >
            Contacto
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
