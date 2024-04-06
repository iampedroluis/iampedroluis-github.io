import React from "react";
import { Link, useLocation } from "react-router-dom";

const Contacto = () => {
  const location = useLocation();
  return (
    <>
      <section className="text-gray-600 body-font mb-10">
        <div className="flex items-center">
          {location.pathname === "/contacto" ? (
            <Link to={"/"}>
              <a href="#logo">
                <i className="fa-solid fa-arrow-left-long text-start ms-10 w-1/3 "></i>
              </a>
            </Link>
          ) : (
            <div></div>
          )}
          <h1
            className="text-4xl font-extrabold text-end p-10 container  "
            id="proyecto"
          >
            {" "}
            CONTACTO
          </h1>
        </div>
        <div className="container px-5 mx-auto flex flex-wrap items-center">
          <div className="lg:w-3/5 md:w-1/2 md:pr-16 lg:pr-0 pr-0">
            <h1 className="title-font font-medium text-5xl dark:text-dark text-blanco  ">
              Plasmar las ideas en tangibles.
            </h1>
            <p className="leading-relaxed mt-4 dark:text-dark text-blanco">
              Estoy aquí para ayudarte en ese proceso y hacer realidad tus
              visiones.
            </p>
            <p className="leading-relaxed mt-2 dark:text-dark text-blanco">
              Si estás listo para comenzar a dar vida a tus ideas, no dudes en
              contactarme a través de mi correo electrónico.
            </p>
          </div>
          <form
            action="https://formsubmit.co/pedroluisgutierrez96@gmail.com"
            method="POST"
            className="lg:w-2/6 md:w-1/2 rounded-lg justify-center flex flex-col md:ml-auto mt-10 md:mt-0 w-full"
          >
            <div className="relative mb-4">
              <label
                htmlFor="full-name"
                className="leading-7 text-sm dark:text-dark text-blanco"
              >
                Full Name
              </label>
              <input
                type="text"
                id="full-name"
                name="name"
                className="w-full bg-white rounded border border-gray-300 focus:border-secondary focus:ring-2 focus:ring-secondary text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
            <div className="relative mb-4">
              <label
                htmlFor="email"
                className="leading-7 text-sm dark:text-dark text-blanco"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full bg-white rounded border border-gray-300 focus:border-secondary focus:ring-2 focus:ring-secondary text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
            <div className="relative mb-4">
              <label
                htmlFor="message"
                className="leading-7 text-sm dark:text-dark text-blanco"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                className="w-full bg-white rounded border border-gray-300 focus:border-secondary focus:ring-2 focus:ring-secondary text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
            <button className="text-white bg-[#4b16b5] border-0 py-2 px-8 focus:outline-none hover:bg-secondary rounded text-lg">
              Button
            </button>
            <p className="text-xs text-gray-500 mt-3">
              O a Travez de{" "}
              <span className="text-[#0B67C2]">
                <a
                  href="https://www.linkedin.com/in/pedro-luis-gutierrez-contreras/"
                  target="_blank"
                >
                  Linkedin
                </a>
              </span>{" "}
              donde puedes ver mas acerca de mi
            </p>
          </form>
        </div>
      </section>
    </>
  );
};

export default Contacto;
