import React from "react";
import { Link, useLocation } from "react-router-dom";
import emergencias from "../img/emergencias.png";
import avalith from "../img/avalith.png";
import telecom from "../img/telecom.png";
const Experiencias = () => {
  const location = useLocation();
  return (
    <>
      <section className="text-gray-600   body-font h-screen  text-gray-600 body-font  mb-10 bg-[#050505]  dark:bg-[#222222]">
        <div className="flex items-center">
          {location.pathname === "/experiencias" ? (
            <Link to={"/"}>
              <i className="fa-solid mt-28 fa-arrow-left-long  text-start ms-10 w-1/3 "></i>
            </Link>
          ) : (
            <div></div>
          )}
          <h1
            className="text-4xl  mt-28 font-extrabold text-end p-10 container  "
            id="proyecto"
          >
            {" "}
            EXPERIENCIAS
          </h1>
        </div>
        <div className="container px-5 py-10 mx-auto">
          <div className="flex flex-col text-center w-full mb-12">
            <p className="lg:w-2/3 mx-auto leading-relaxed text-lg font-thin  text-blanco  ">
              A lo largo de mi trayectoria en el campo de la tecnología de la
              información, he colaborado con diversas empresas, tanto de manera
              presencial como remota, así como también como freelance. Algunas
              de las organizaciones para las que he tenido el privilegio de
              trabajar incluyen...
            </p>
            <div className="flex mt-16  mx-auto sm:flex-row  justify-center items-center">
              <div className="relative flex-grow mx-5 ">
                <img
                  src={emergencias}
                  className="leading-7 img-exp text-sm text-gray-600 grayscale hover:grayscale-0 cursor-pointer ease-in-out"
                />
              </div>
              <div className="relative flex-grow  mx-5 ">
                <img
                  src={avalith}
                  className="leading-7 img-exp text-sm text-gray-600 grayscale hover:grayscale-0 cursor-pointer  ease-in-out "
                />
              </div>
              <div className="relative flex-grow mx-5  ">
                <img
                  src={telecom}
                  className="leading-7 img-exp  text-sm text-gray-600  grayimg whiteimg cursor-pointer text-white transition duration-500 ease-in-out"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Experiencias;
