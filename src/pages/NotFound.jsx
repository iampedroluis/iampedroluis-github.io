import React from "react";
import notfound from "../img/notfound.png";
import { Link } from "react-router-dom";
export const NotFound = () => {
  return (
    <>
      <section className="text-gray-600 body-font  ">
        <div className="container mx-auto flex px-5  py-32 items-center justify-center flex-col">
          <img
            className="w-50 object-cover object-center rounded img404 "
            alt="hero"
            src={notfound}
          />
          <div className="text-center lg:w-2/3 w-full mt-10">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-200 dark:text-gray-900">
              ERROR 404
            </h1>
            <p className="mb-8 leading-relaxed">
              Parece que estas intentanto acceder a una pagina que no se
              encuentra, haz click en el boton volver.
            </p>
            <div className="flex justify-center">
              <Link
                className="inline-flex text-white bg-[#4b16b5] border-0 py-2 px-5 focus:outline-none hover:bg-secondary rounded font-light text-lg hover:text-dark "
                to={"/"}
              >
                Volver
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
