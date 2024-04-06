import React, { useState } from "react";
import css from "../img/css.png";
import booststrap from "../img/booststrap.png";
import html from "../img/html.png";
import js from "../img/js.png";
import nodejs from "../img/nodejs.png";
import python from "../img/python.png";
import react from "../img/react.png";
import tailwind from "../img/tailwind.png";
import AboutMe from "./AboutMe";
import Proyectos from "./Proyectos";
import Experiencias from "./Experiencias";
import Conocimientos from "./Conocimientos";
import Contacto from "./Contacto";
const Home = () => {
  const images = [html, css, js, react, nodejs, python, tailwind, booststrap];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const goToPrevImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const goToNextImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <>
      <section className="text-gray-600 body-font pt-40   dark:bg-blanco ">
        <p
          className="text-5xl  text-blanco font-thin text-center dark:text-dark"
          id="logo"
        >
          Hola!
        </p>
        <div className="container mx-auto flex py-24 md:flex-row flex-col items-center">
          <div className="lg:flex-grow   flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 className="font-extrabold md:text-8xl text-6xl mb-4 text-gray-900  ">
              <span className="block text-secondary ">FRONT-END</span>
              <span className="block text-blanco dark:text-dark">SOFTWARE</span>
              <span className="block text-blanco dark:text-dark">
                DEVELOPER
              </span>
            </h1>
          </div>
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 flex items-center justify-center">
            <button onClick={goToPrevImage}>
              <i className="fa-solid fa-chevron-left mx-5 text-blanco text-lg dark:text-dark"></i>
            </button>
            <img
              src={images[currentImageIndex]}
              alt="Carousel"
              className="tech"
            />
            <button onClick={goToNextImage}>
              <i className="fa-solid fa-chevron-right mx-5 text-blanco text-lg dark:text-dark"></i>
            </button>
          </div>
        </div>
      </section>
      <AboutMe />
      <Proyectos />
      <Experiencias />
      <Conocimientos />
      <Contacto />
    </>
  );
};

export default Home;
