import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

const Proyectos = () => {
  const [darkMode, setDarkMode] = useState(false);
  const location = useLocation();
  useEffect(() => {
    const body = document.body;

    // Observador de mutaciones para la clase del body
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.attributeName === "class") {
          const isDarkMode = body.classList.contains("dark");
          setDarkMode(isDarkMode);
        }
      });
    });

    // Configuración del observador
    const observerConfig = { attributes: true };

    // Observar cambios en la clase del body
    observer.observe(body, observerConfig);

    // Establecer el estado `darkMode` según la clase actual del body
    const isDarkMode = body.classList.contains("dark");
    setDarkMode(isDarkMode);

    // Limpiar el observador cuando el componente se desmonte
    return () => observer.disconnect();
  }, []);

  console.log(location);
  return (
    <section
      className={`text-gray-600 body-font mb-10 bg-cover overflow-hidden ${
        darkMode ? "light-bg-image" : "bg-image "
      }  `}
    >
      <div className="flex items-center">
        {location.pathname === "/iampedroluis-github.io/proyectos" ? (
          <Link to={"/iampedroluis-github.io/"}>
            <i className="fa-solid fa-arrow-left-long text-start ms-10 w-1/3 "></i>
          </Link>
        ) : (
          <div></div>
        )}
        <h1
          className="text-4xl font-extrabold text-end p-10 container  "
          id="proyecto"
        >
          {" "}
          PROYECTOS
        </h1>
      </div>

      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-wrap -m-12">
          <div className="p-12 md:w-1/2 flex flex-col items-start">
            <span className="inline-block py-1  px-2 rounded bg-indigo-50 text-indigo-500 text-xs font-medium tracking-widest">
              FRONT-END
            </span>
            <h2
              className="sm:text-3xl text-2xl text-[#EEF2FF] dark:text-gray-900 title-font font-medium  mt-4 mb-4"
              id="necc"
            >
              NexConnect
            </h2>
            <p className="leading-relaxed mb-8">
              Plataforma web dinámica para la creación y visualización de posts,
              y descarga de archivos según roles definidos. Diseñada con
              ReactJS, Tailwind CSS, en el backend, utiliza Node.js y gestiona
              la autenticación con JWT. La aplicación se encuentra contenerizada
              con Docker y se integra con una base de datos MySQL para el manejo
              de la información.
            </p>
            <div className="flex items-center flex-wrap pb-4 mb-4 border-b-2 p-4 my-5 dark:border-gray-300 mt-auto w-full">
              <a
                href="https://github.com/iampedroluis/tony_p"
                className="text-indigo-500 inline-flex items-center"
              >
                <i className="fa-brands  fa-github dark:hover:text-dark hover:text-blanco cursor-pointer transition duration-500 ease-in-out"></i>
              </a>
              <a
                href="https://es.react.dev/"
                target="_blank"
                className="text-gray-400 text-center   inline-flex items-center ml-auto leading-none text-sm p-2 rounded-full border border-secondary text-[#EEF2FF] dark:text-gray-900 hover:text-secondary cursor-pointer text-white transition duration-500 ease-in-out  dark:text-dark hover:bg-blanco hover:text-dark "
              >
                React JS
              </a>
              <a
                href="https://tailwindcss.com/"
                target="_blank"
                className="text-gray-400 text-center   inline-flex items-center ml-auto leading-none text-sm p-2 rounded-full border border-secondary text-[#EEF2FF] dark:text-gray-900 hover:text-secondary cursor-pointer text-white transition duration-500 ease-in-out dark:text-dark hover:bg-blanco hover:text-dark"
              >
                Tailwind CSS
              </a>
              <a
                href="https://nodejs.org/en"
                target="_blank"
                className="text-gray-400 text-center   inline-flex items-center ml-auto leading-none text-sm p-2 rounded-full border border-secondary text-[#EEF2FF] dark:text-gray-900 hover:text-secondary cursor-pointer text-white transition duration-500 ease-in-out dark:text-dark hover:bg-blanco hover:text-dark"
              >
                Node Js
              </a>
              <a
                href="https://www.mysql.com/"
                target="_blank"
                className="text-gray-400 text-center  inline-flex items-center ml-auto leading-none text-sm p-2 rounded-full border border-secondary text-[#EEF2FF] dark:text-gray-900 hover:text-secondary cursor-pointer text-white transition duration-500 ease-in-out dark:text-dark hover:bg-blanco hover:text-dark"
              >
                MySQL
              </a>
              <a
                href="https://jwt.io/"
                target="_blank"
                className="text-gray-400 text-center  inline-flex items-center ml-auto leading-none text-sm p-2 rounded-full border border-secondary text-[#EEF2FF] dark:text-gray-900 hover:text-secondary cursor-pointer text-white transition duration-500 ease-in-out dark:text-dark hover:bg-blanco hover:text-dark "
              >
                JWT.io
              </a>
              <a
                href="https://www.docker.com/"
                target="_blank"
                className="text-gray-400 text-center   inline-flex items-center ml-auto leading-none text-sm p-2 rounded-full border border-secondary text-[#EEF2FF] dark:text-gray-900 hover:text-secondary cursor-pointer text-white transition duration-500 ease-in-out items-center sdark:text-dark hover:bg-blanco hover:text-dark my-2"
                id="docker"
              >
                Docker
              </a>
            </div>
            <a href="#" className="inline-flex items-center">
              <span className="flex-grow flex flex-col pl-4">
                <span className="title-font font-medium  text-[#EEF2FF] dark:text-dark ">
                  Participación
                </span>
                <span className="text-gray-400 text-xs tracking-widest mt-0.5">
                  DESARROLLO UI/UX - FRONT-END - ARQUITECTURA
                </span>
              </span>
            </a>
          </div>
          <div className="p-12 md:w-1/2 flex flex-col items-start">
            <span className="inline-block py-1  px-2 rounded bg-indigo-50 text-indigo-500 text-xs font-medium tracking-widest">
              FULL-STACK
            </span>
            <h2 className="sm:text-3xl text-2xl text-[#EEF2FF] dark:text-gray-900 title-font font-medium  mt-4 mb-4">
              CodeMind
            </h2>
            <p className="leading-relaxed mb-8">
              Plataforma web de ejercicios de lenguajes y herramientas de
              programación. Creada con arquitectura Flux, componentes en
              ReactJs, y empleando SqlAlchemy, Flask API y Bootstrap para la
              estructura y diseño. Utiliza JWT para autenticación, e incluye el
              servicio SMTP para el restablecimiento de contraseñas, junto con
              la API de SweetAlert2 para alertas dentro de la aplicación.
            </p>
            <div className="flex items-center flex-wrap pb-4 mb-4 border-b-2 border-gray-300 mt-auto w-full">
              <a
                href="https://github.com/iampedroluis/codemind_p"
                className="text-indigo-500 inline-flex items-center"
              >
                <i className="fa-brands fa-github dark:hover:text-dark hover:text-blanco cursor-pointer transition duration-500 ease-in-out"></i>
              </a>
              <a
                href="https://es.react.dev/"
                target="_blank"
                className="text-gray-400 text-center   inline-flex items-center ml-auto leading-none text-sm p-2 rounded-full border border-secondary text-[#EEF2FF] dark:text-gray-900 hover:text-secondary cursor-pointer text-white transition duration-500 ease-in-out dark:text-dark hover:bg-blanco hover:text-dark my-2"
                id="react"
              >
                React JS
              </a>
              <a
                href="https://getbootstrap.com/"
                target="_blank"
                className="text-gray-400 text-center   inline-flex items-center ml-auto leading-none text-sm p-2 rounded-full border border-secondary text-[#EEF2FF] dark:text-gray-900 hover:text-secondary cursor-pointer text-white transition duration-500 ease-in-out dark:text-dark hover:bg-blanco hover:text-dark"
                id="html"
              >
                Boosttrap 5
              </a>
              <a
                href="https://flask.palletsprojects.com/en/3.0.x/"
                target="_blank"
                className="text-gray-400 text-center   inline-flex items-center ml-auto leading-none text-sm p-2 rounded-full border border-secondary text-[#EEF2FF] dark:text-gray-900 hover:text-secondary cursor-pointer text-white transition duration-500 ease-in-out dark:text-dark hover:bg-blanco hover:text-dark"
                id="css"
              >
                Flask
              </a>
              <a
                href="https://www.sqlalchemy.org/"
                target="_blank"
                className="text-gray-400 text-center  inline-flex items-center ml-auto leading-none text-sm p-2 rounded-full border border-secondary text-[#EEF2FF] dark:text-gray-900 hover:text-secondary cursor-pointer text-white transition duration-500 ease-in-out dark:text-dark hover:bg-blanco hover:text-dark"
              >
                SQLAlchemy
              </a>
              <a
                href="https://jwt.io/"
                target="_blank"
                className="text-gray-400 text-center  inline-flex items-center ml-auto leading-none text-sm p-2 rounded-full border border-secondary text-[#EEF2FF] dark:text-gray-900 hover:text-secondary cursor-pointer text-white transition duration-500 ease-in-out dark:text-dark hover:bg-blanco hover:text-dark my-2"
                id="node"
              >
                JWT.io
              </a>
            </div>
            <a href="#" className="inline-flex items-center">
              <span className="flex-grow flex flex-col pl-4">
                <span className="title-font font-medium  text-[#EEF2FF] dark:text-gray-900">
                  Participación
                </span>
                <span className="text-gray-400 text-xs tracking-widest mt-0.5">
                  DESARROLLO UI/UX - FRONT-END - ARQUITECTURA - BACK-END
                </span>
              </span>
            </a>
          </div>
          <div className="p-12 md:w-1/2 flex flex-col items-start">
            <span className="inline-block py-1  px-2 rounded bg-indigo-50 text-indigo-500 text-xs font-medium tracking-widest">
              FULL-STACK
            </span>
            <h2 className="sm:text-3xl text-2xl text-[#EEF2FF] dark:text-gray-900 title-font font-medium  mt-4 mb-4">
              JWT-Auth
            </h2>
            <p className="leading-relaxed mb-8">
              Aplicación web de demostración que garantiza la autenticación
              segura mediante el estándar JWT. Emplea SQLAlchemy para
              administrar bases de datos, Flask como framework para APIs y se
              estructura con componentes en ReactJS siguiendo el patrón Flux.
            </p>
            <div className="flex items-center flex-wrap pb-4 mb-4 border-b-2 border-gray-100 dark:border-gray-300 mt-auto w-full">
              <a
                href="https://github.com/iampedroluis/JWT-Auth"
                className="text-indigo-500 inline-flex items-center"
              >
                <i className="fa-brands fa-github hover:text-blanco dark:hover:text-dark cursor-pointer transition duration-500 ease-in-out"></i>
              </a>
              <a
                href="https://es.react.dev/"
                target="_blank"
                className="text-gray-400 text-center   inline-flex items-center ml-auto leading-none text-sm p-2 rounded-full border border-secondary text-[#EEF2FF] dark:text-gray-900 hover:text-secondary cursor-pointer text-white transition duration-500 ease-in-out dark:text-dark hover:bg-blanco hover:text-dark "
                id="js"
              >
                React JS
              </a>
              <a
                href="https://getbootstrap.com/"
                target="_blank"
                className="text-gray-400 text-center   inline-flex items-center ml-auto leading-none text-sm p-2 rounded-full border border-secondary text-[#EEF2FF] dark:text-gray-900 hover:text-secondary cursor-pointer text-white transition duration-500 ease-in-out dark:text-dark hover:bg-blanco hover:text-dark"
                id="bootstrap"
              >
                Bootstrap 5
              </a>
              <a
                href="https://flask.palletsprojects.com/en/1.1.x/api/#flask.json.jsonify"
                target="_blank"
                className="text-gray-400 text-center   inline-flex items-center ml-auto leading-none text-sm p-2 rounded-full border border-secondary text-[#EEF2FF] dark:text-gray-900 hover:text-secondary cursor-pointer text-white transition duration-500 ease-in-out dark:text-dark hover:bg-blanco hover:text-dark"
                to="/proyectos#python"
              >
                Flask
              </a>
              <a
                href="https://www.sqlalchemy.org/"
                target="_blank"
                className="text-gray-400 text-center  inline-flex items-center ml-auto leading-none text-sm p-2 rounded-full border border-secondary text-[#EEF2FF] dark:text-gray-900 hover:text-secondary cursor-pointer text-white transition duration-500 ease-in-out dark:text-dark hover:bg-blanco hover:text-dark"
              >
                SQLAlchemy
              </a>
              <a
                href="https://jwt.io/"
                target="_blank"
                className="text-gray-400 text-center  inline-flex items-center ml-auto leading-none text-sm p-2 rounded-full border border-secondary text-[#EEF2FF] dark:text-gray-900 hover:text-secondary cursor-pointer text-white transition duration-500 ease-in-out dark:text-dark hover:bg-blanco hover:text-dark my-2 "
              >
                JWT.io{" "}
              </a>
              <a
                href="https://www.figma.com/"
                target="_blank"
                className="text-gray-400 text-center  inline-flex items-center ml-auto leading-none text-sm p-2 rounded-full border border-secondary text-[#EEF2FF] dark:text-gray-900 hover:text-secondary cursor-pointer text-white transition duration-500 ease-in-out dark:text-dark hover:bg-blanco hover:text-dark my-2 "
                id="figma"
              >
                Figma{" "}
              </a>
            </div>
            <a href="#" className="inline-flex items-center">
              <span className="flex-grow flex flex-col pl-4">
                <span className="title-font font-medium  text-[#EEF2FF] dark:text-gray-900">
                  Participación
                </span>
                <span className="text-gray-400 text-xs tracking-widest mt-0.5">
                  DESARROLLO UI/UX - FRONT-END - ARQUITECTURA - BACK-END
                </span>
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Proyectos;
