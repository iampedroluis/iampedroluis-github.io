import React from "react";
import perfil from "../img/perfil.png";

const AboutMe = () => {
  return (
    <section className="text-gray-600 body-font  bg-[#050505]  dark:bg-[#222222] ">
      <div className="container mx-auto flex flex-col-reverse lg:flex-row items-center p-5">
        <div className="text-blanco lg:text-3xl sm:text-base flex flex-col lg:items-start lg:text-start mb-16 lg:mb-0 items-center lg:w-1/2 lg:pr-12 mt-20">
          <p className="w-full lg:w-auto text-center lg:text-left mb-20  font-extralight">
            Mi nombre es <span className="text-secondary">Pedro Luis</span> y
            soy desarrollador de software{" "}
            <span className="text-secondary">Front-End </span>
            con competencias sólidas en{" "}
            <span className="text-secondary">Back-End</span>, incluyendo Node.JS
            y Flask. Además, tengo habilidades en{" "}
            <span className="text-secondary">diseño</span> utilizando
            herramientas como Figma y Photoshop. Mi trayectoria también abarca
            una amplia experiencia en Control de Calidad{" "}
            <span className="text-secondary">(QA)</span>.
          </p>
        </div>
        <div className="lg:max-w-lg w-full flex justify-center    ">
          <div className="max-w-80 max-h-80 w-80 h-80 sm:w-full sm:h-auto sm:perfil img-gradient rounded-full  drop-shadow-2xl flex justify-center items-center  focus:outline-none  transition duration-900 ease-in-out shadowimg">
            <img
              src={perfil}
              alt="Perfil"
              className="w-64 h-64 sm:w-full sm:h-auto rounded-full bg-transparent   transition duration-900  "
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
