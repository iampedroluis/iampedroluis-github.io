import React from "react";
import { Link, useLocation } from "react-router-dom";

const Conocimientos = () => {
  const location = useLocation();
  return (
    <section className="text-gray-600 body-font h-screen text-gray-600 body-font  w-full">
      <div className="flex items-center">
        {location.pathname === "/conocimientos" ? (
          <Link to={"/"}>
            <i className="fa-solid mt-40 fa-arrow-left-long text-start ms-10 w-1/3 "></i>
          </Link>
        ) : (
          <div></div>
        )}
        <h1
          className="text-4xl font-extrabold text-end mt-40 mr-2 container  "
          id="proyecto"
        >
          {" "}
          CONOCIMIENTOS
        </h1>
      </div>
      <div className="container px-5  mx-auto">
        <div className="flex flex-col text-center w-full mb-12">
          <p className="lg:w-2/3 mx-auto leading-relaxed text-xl font-extralight text-blanco dark:text-dark">
            Como desarrollador Front-End, cuento con experiencia en una variedad
            de lenguajes de diseño, maquetación. Además, poseo conocimientos
            sólidos en desarrollo Back-End y calidad de software (QA).
          </p>
          <div className="flex flex-wrap justify-center items-center mt-10">
            <div className="relative flex-grow  my-2 sm:w-auto sm:mx-0">
              <Link to="/proyectos#react">
                <i
                  className="fa-brands sm:text-2xl text-4xl fa-react hover:text-[#61DBFB] hover:drop-shadow-2xl hover:grayscale-0 cursor-pointer text-white transition duration-200 ease-in-out text-blanco dark:text-dark"
                  style={{ textShadow: "  2px 1px 7px rgba(218,211,211,0.29" }}
                ></i>
              </Link>
            </div>
            <div className="relative flex-grow  my-2 sm:w-auto sm:mx-0">
              <Link to="/proyectos#js">
                <i
                  className="fa-brands sm:text-2xl text-4xl fa-js hover:text-[#EED81C] hover:grayscale-0 cursor-pointer text-white transition duration-200 ease-in-out text-blanco dark:text-dark  "
                  style={{ textShadow: "  2px 1px 7px rgba(218,211,211,0.29" }}
                ></i>
              </Link>
            </div>

            <div className="relative flex-grow  ">
              <Link to="/proyectos#python">
                <i
                  className="fa-brands sm:text-2xl  text-4xl fa-python hover:text-[#3F7FB0] hover:grayscale-0 cursor-pointer text-white transition duration-200 ease-in-out text-blanco dark:text-dark "
                  style={{ textShadow: "  2px 1px 7px rgba(218,211,211,0.29" }}
                ></i>
              </Link>
            </div>
            <div className="relative flex-grow  ">
              <Link to="/proyectos#html">
                <i
                  className="fa-brands sm:text-2xl  text-4xl fa-html5 hover:text-[#F16529] hover:grayscale-0 cursor-pointer text-white transition duration-200 ease-in-out text-blanco dark:text-dark"
                  style={{ textShadow: "  2px 1px 7px rgba(218,211,211,0.29" }}
                ></i>
              </Link>
            </div>

            <div className="relative flex-grow  ">
              <Link to="/proyectos#css">
                <i
                  className="fa-brands sm:text-2xl  text-4xl fa-css3-alt hover:text-[#228CC8] hover:grayscale-0 cursor-pointer text-white transition duration-200 ease-in-out text-blanco dark:text-dark"
                  style={{ textShadow: "  2px 1px 7px rgba(218,211,211,0.29" }}
                ></i>
              </Link>
            </div>
            <div className="relative flex-grow  ">
              <Link to="/proyectos#bootstrap">
                <i
                  className="fa-brands sm:text-2xl  text-4xl fa-bootstrap hover:text-[#7C11F7] hover:grayscale-0 cursor-pointer text-white transition duration-200 ease-in-out text-blanco dark:text-dark"
                  style={{ textShadow: "  2px 1px 7px rgba(218,211,211,0.29" }}
                ></i>
              </Link>
            </div>
            <div className="relative flex-grow  ">
              <Link to="/proyectos#figma">
                <i
                  className="fa-brands sm:text-2xl  text-4xl fa-figma hover:text-[#F76F5E] hover:grayscale-0 cursor-pointer text-white transition duration-200 ease-in-out text-blanco dark:text-dark"
                  style={{ textShadow: "  2px 1px 7px rgba(218,211,211,0.29" }}
                ></i>
              </Link>
            </div>
            <div className="relative flex-grow">
              <Link to="/proyectos#docker">
                <i
                  className="fa-brands sm:text-2xl text-4xl fa-docker hover:text-[#2A99EE] hover:grayscale-0 cursor-pointer text-white transition duration-200 ease-in-out text-blanco dark:text-dark"
                  style={{ textShadow: "  2px 1px 7px rgba(218,211,211,0.29" }}
                ></i>
              </Link>
            </div>

            <div className="relative flex-grow">
              <Link to="/proyectos#node" className="   ">
                <i
                  className="fa-brands sm:text-2xl text-4xl fa-node-js hover:text-[#8BC401] hover:grayscale-0 cursor-pointer text-white transition duration-200 ease-in-out text-blanco dark:text-dark"
                  style={{ textShadow: "  2px 1px 7px rgba(218,211,211,0.29" }}
                ></i>
              </Link>
            </div>
          </div>
          <div className="container mt-20">
            <Link
              to={"/contacto"}
              className="inline-flex items-center  justify-center bg-transparent border-2 py-1 px-3 focus:outline-none hover:bg-secondary hover:text-black text-white rounded-full text-base mt-4 md:mt-0 border-secondary transition duration-500  dark:text-dark ease-in-out "
            >
              Contacto
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Conocimientos;
