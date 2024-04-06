import React from "react";
import { Link } from "react-router-dom";

const Conocimientos = () => {
  return (
    <section className="text-gray-600  body-font h-screen  text-gray-600 body-font  mb-10  ">
      <h1 className="text-4xl  mt-10 font-extrabold block text-end container bg-transparent text-blanco p-10 text-blanco dark:text-dark">
        {" "}
        CONOCIMIENTOS
      </h1>
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-col text-center w-full mb-12">
          <p className="lg:w-2/3 mx-auto leading-relaxed text-xl font-extralight  text-blanco dark:text-dark  ">
            A lo largo de mi trayectoria en el campo de la tecnología de la
            información, he colaborado con diversas empresas, tanto de manera
            presencial como remota, así como también como freelance. Algunas de
            las organizaciones para las que he tenido el privilegio de trabajar
            incluyen...
          </p>
          <div className="flex mt-24  mx-auto sm:flex-row  justify-center items-center">
            <div className="relative flex-grow mx-5 ">
              <Link to="/proyectos#react">
                <i className="fa-brands sm:text-2xl  text-4xl fa-react hover:text-[#61DBFB] hover:grayscale-0 cursor-pointer text-white transition duration-200 ease-in-out text-blanco dark:text-dark"></i>
              </Link>
            </div>
            <div className="relative flex-grow mx-5 ">
              <Link to="/proyectos#js">
                <i className="fa-brands sm:text-2xl  text-4xl fa-js hover:text-[#EED81C] hover:grayscale-0 cursor-pointer text-white transition duration-200 ease-in-out text-blanco dark:text-dark"></i>
              </Link>
            </div>
            <div className="relative flex-grow mx-5 ">
              <Link to="/proyectos#python">
                <i className="fa-brands sm:text-2xl  text-4xl fa-python hover:text-[#3F7FB0] hover:grayscale-0 cursor-pointer text-white transition duration-200 ease-in-out text-blanco dark:text-dark "></i>
              </Link>
            </div>
            <div className="relative flex-grow mx-5 ">
              <Link to="/proyectos#html">
                <i className="fa-brands sm:text-2xl  text-4xl fa-html5 hover:text-[#F16529] hover:grayscale-0 cursor-pointer text-white transition duration-200 ease-in-out text-blanco dark:text-dark "></i>
              </Link>
            </div>

            <div className="relative flex-grow mx-5 ">
              <Link to="/proyectos#css">
                <i className="fa-brands sm:text-2xl  text-4xl fa-css3-alt hover:text-[#228CC8] hover:grayscale-0 cursor-pointer text-white transition duration-200 ease-in-out text-blanco dark:text-dark"></i>
              </Link>
            </div>
            <div className="relative flex-grow mx-5 ">
              <Link to="/proyectos#bootstrap">
                <i className="fa-brands sm:text-2xl  text-4xl fa-bootstrap hover:text-[#7C11F7] hover:grayscale-0 cursor-pointer text-white transition duration-200 ease-in-out text-blanco dark:text-dark "></i>
              </Link>
            </div>
            <div className="relative flex-grow mx-5 ">
              <Link to="/proyectos#figma">
                <i className="fa-brands sm:text-2xl  text-4xl fa-figma hover:text-[#F76F5E] hover:grayscale-0 cursor-pointer text-white transition duration-200 ease-in-out text-blanco dark:text-dark"></i>
              </Link>
            </div>
            <div className="relative flex-grow mx-5 ">
              <Link to="/proyectos#docker">
                <i className="fa-brands sm:text-2xl  text-4xl fa-docker hover:text-[#2A99EE] hover:grayscale-0 cursor-pointer text-white transition duration-200 ease-in-out text-blanco dark:text-dark"></i>
              </Link>
            </div>
            <div className="relative flex-grow mx-5 ">
              <Link to="/proyectos#node">
                <i className="fa-brands sm:text-2xl  text-4xl fa-node-js hover:text-[#8BC401] hover:grayscale-0 cursor-pointer text-white transition duration-200 ease-in-out text-blanco dark:text-dark"></i>
              </Link>
            </div>
          </div>
          <div className="container mt-20">
            <Link
              to={"/contacto"}
              className="inline-flex items-center  justify-center bg-transparent border-2 py-1 px-3 focus:outline-none hover:bg-secondary hover:text-black text-white rounded-full text-base mt-4 md:mt-0 border-secondary transition duration-500  dark:text-dark ease-in-out"
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
