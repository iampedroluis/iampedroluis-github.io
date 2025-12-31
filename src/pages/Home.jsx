import React, { useState, useEffect } from "react";
import AboutMe from "./AboutMe";
import Proyectos from "./Proyectos";
import Experiencias from "./Experiencias";
import Conocimientos from "./Conocimientos";
import Contacto from "./Contacto";
import { Link } from "react-router-dom";
import Skeleton from "@mui/material/Skeleton";
import { useLanguage } from "../contexts/LanguageContext";
import { translations } from "../translations/translations";

// Import technology images
import seleniumImg from "../img/selenium.png";
import cypressImg from "../img/cypress.png";
import postmanImg from "../img/postman.png";
import cucumberImg from "../img/cucumber.png";
import appiumImg from "../img/appium.png";
import reactImg from "../img/react.png";
import jsImg from "../img/js.png";
import pythonImg from "../img/python.png";
import htmlImg from "../img/html.png";
import cssImg from "../img/css.png";
import nodejsImg from "../img/nodejs.png";
import tailwindImg from "../img/tailwind.png";
import boostrapImg from "../img/booststrap.png";
import githubImg from "../img/github.png";

// Import company logos
import avalithImg from "../img/avalith.png";
import telecomImg from "../img/telecom.png";
import financieraOhImg from "../img/financiera-oh.png";
import pinappImg from "../img/pinapp.png";
import jockeyClubImg from "../img/jocker_club_.png";
import emergenciasImg from "../img/emergencias.png";
import dvImg from "../img/dv.png";

const Home = () => {
  const { language } = useLanguage();
  const t = translations[language];
  const [imagesLoaded, setImagesLoaded] = useState({});
  const [companiesLoaded, setCompaniesLoaded] = useState({});
  const [projectsLoaded, setProjectsLoaded] = useState(false);
  const [visibleTitles, setVisibleTitles] = useState([]);

  const companies = [
    {
      name: "Avalith",
      logo: avalithImg,
    },
    {
      name: "Telecom",
      logo: telecomImg,
    },
    {
      name: "Financiera Oh",
      logo: financieraOhImg,
    },
    {
      name: "Pinapp",
      logo: pinappImg,
    },
    {
      name: "Jockey Club",
      logo: jockeyClubImg,
    },
    {
      name: "Emergencias",
      logo: emergenciasImg,
    },
  ];

  const handleImageLoad = (key) => {
    setImagesLoaded((prev) => ({ ...prev, [key]: true }));
  };

  const handleCompanyLoad = (index) => {
    setCompaniesLoaded((prev) => ({ ...prev, [index]: true }));
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setProjectsLoaded(true);
    }, 800);

    // Intersection Observer for title animations
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.dataset.titleId;
            setVisibleTitles((prev) => [...new Set([...prev, id])]);
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -100px 0px",
      }
    );

    const titles = document.querySelectorAll("[data-title-id]");
    titles.forEach((title) => observer.observe(title));

    return () => {
      clearTimeout(timer);
      observer.disconnect();
    };
  }, []);

  return (
    <>
      {/* Hero Section - Apple Style */}
      <section className="min-h-screen flex items-center justify-center bg-black dark:bg-black relative overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-20">
          <div className="text-center animate-fade-in">
            {/* Text Saludo */}
            <p className="font-display font-light text-sm sm:text-md md:text-md lg:text-md leading-[1.05] tracking-tight text-white mb-20">
              {t.home.greeting}
            </p>

            {/* Main Title */}
            <h1 className="font-display font-semibold text-5xl sm:text-6xl md:text-7xl lg:text-8xl mb-4 leading-[1.05] tracking-tight">
              <span className="block text-white mb-2 animate-slide-up">
                {t.home.title1}
              </span>
              <span className="block text-white/70 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-normal animate-slide-up">
                {t.home.title2}
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-xl sm:text-2xl md:text-3xl text-white/60 mt-6 mb-12 font-light animate-fade-in max-w-4xl mx-auto">
              {t.home.subtitle}
            </p>
          </div>
        </div>
      </section>

      {/* Feature Section 1 - Automation */}
      <section className="min-h-screen flex items-center justify-center bg-white dark:bg-white py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto text-center">
            <h2
              data-title-id="automation"
              className={
                "font-display font-semibold text-4xl sm:text-5xl md:text-6xl lg:text-7xl mb-6 text-black leading-tight transition-all duration-1000 " +
                (visibleTitles.includes("automation")
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8")
              }
            >
              {t.home.automation.title}
              <br />
              <span className="text-black/60">
                {t.home.automation.subtitle}
              </span>
            </h2>
            <p className="text-xl sm:text-2xl text-black/60 mt-6 mb-12 font-light max-w-3xl mx-auto">
              {t.home.automation.description}
            </p>

            {/* Technology Icons - QA Focus */}
            <div className="flex flex-wrap justify-center items-center gap-6 mt-12 max-w-4xl mx-auto">
              {[
                { img: seleniumImg, alt: "Selenium", key: "selenium-qa" },
                { img: cypressImg, alt: "Cypress", key: "cypress-qa" },
                { img: postmanImg, alt: "Postman", key: "postman-qa" },
                { img: cucumberImg, alt: "Cucumber", key: "cucumber-qa" },
                { img: appiumImg, alt: "Appium", key: "appium-qa" },
                { img: reactImg, alt: "React", key: "react-qa" },
                { img: jsImg, alt: "JavaScript", key: "js-qa" },
                { img: pythonImg, alt: "Python", key: "python-qa" },
                { img: nodejsImg, alt: "Node.js", key: "nodejs-qa" },
                { img: githubImg, alt: "GitHub", key: "github-qa" },
              ].map(({ img, alt, key }) => (
                <div key={key} className="relative">
                  {!imagesLoaded[key] && (
                    <Skeleton
                      variant="circular"
                      width={48}
                      height={48}
                      sx={{ bgcolor: "rgba(0, 0, 0, 0.1)" }}
                    />
                  )}
                  <img
                    src={img}
                    alt={alt}
                    className={
                      "h-12 w-12 object-contain hover:scale-110 transition-transform duration-300 filter grayscale hover:grayscale-0 " +
                      (!imagesLoaded[key] ? "hidden" : "")
                    }
                    onLoad={() => handleImageLoad(key)}
                  />
                </div>
              ))}
            </div>

            <Link
              to="/conocimientos#conocimientos-hero"
              className="text-primary hover:text-primary/80 text-lg font-medium transition-colors inline-block mt-20"
            >
              {t.home.automation.viewAll}
            </Link>
          </div>
        </div>
      </section>

      {/* Feature Section 2 - Development */}
      <section className="min-h-screen flex items-center justify-center bg-lightGray dark:bg-lightGray py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto text-center">
            <h2
              data-title-id="development"
              className={
                "font-display font-semibold text-4xl sm:text-5xl md:text-6xl lg:text-7xl mb-6 text-black leading-tight transition-all duration-1000 " +
                (visibleTitles.includes("development")
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8")
              }
            >
              {t.home.development.title}
              <br />
              <span className="text-black/60">
                {t.home.development.subtitle}
              </span>
            </h2>
            <p className="text-xl sm:text-2xl text-black/60 mt-6 mb-12 font-light max-w-3xl mx-auto">
              {t.home.development.description}
            </p>

            {/* Technology Icons - Development Focus */}
            <div className="flex flex-wrap justify-center items-center gap-6 mt-12 max-w-4xl mx-auto">
              {[
                { img: htmlImg, alt: "HTML5", key: "html-dev" },
                { img: cssImg, alt: "CSS3", key: "css-dev" },
                { img: tailwindImg, alt: "Tailwind CSS", key: "tailwind-dev" },
                { img: boostrapImg, alt: "Bootstrap", key: "bootstrap-dev" },
                { img: reactImg, alt: "React", key: "react-dev" },
                { img: jsImg, alt: "JavaScript", key: "js-dev" },
                { img: nodejsImg, alt: "Node.js", key: "nodejs-dev" },
                { img: pythonImg, alt: "Python", key: "python-dev" },
              ].map(({ img, alt, key }) => (
                <div key={key} className="relative">
                  {!imagesLoaded[key] && (
                    <Skeleton
                      variant="circular"
                      width={48}
                      height={48}
                      sx={{ bgcolor: "rgba(0, 0, 0, 0.1)" }}
                    />
                  )}
                  <img
                    src={img}
                    alt={alt}
                    className={
                      "h-12 w-12 object-contain hover:scale-110 transition-transform duration-300 filter grayscale hover:grayscale-0 " +
                      (!imagesLoaded[key] ? "hidden" : "")
                    }
                    onLoad={() => handleImageLoad(key)}
                  />
                </div>
              ))}
            </div>

            <Link
              to="/conocimientos#conocimientos-hero"
              className="text-primary hover:text-primary/80 text-lg font-medium transition-colors inline-block mt-20"
            >
              {t.home.development.viewAll}
            </Link>
          </div>
        </div>
      </section>

      {/* Companies Section */}
      <section className="min-h-screen flex items-center justify-center bg-white dark:bg-white relative overflow-hidden py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            {/* Section Title */}
            <div className="text-center mb-20">
              <h3
                data-title-id="companies"
                className={
                  "font-display font-semibold text-5xl sm:text-6xl md:text-7xl text-black mb-6 transition-all duration-1000 " +
                  (visibleTitles.includes("companies")
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-8")
                }
              >
                {t.home.companies.title}
                <br />
                <span className="text-black/60">
                  {t.home.companies.subtitle}
                </span>
              </h3>
              <p className="text-xl sm:text-2xl text-black/60 mt-6 font-light max-w-3xl mx-auto">
                {t.home.companies.description}
              </p>
            </div>

            {/* Companies Grid */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-8 md:gap-12 items-center justify-items-center">
              {companies.map((company, index) => (
                <div
                  key={index}
                  className="w-full h-24 flex items-center justify-center p-6 bg-lightGray rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105"
                >
                  {!companiesLoaded[index] && (
                    <Skeleton
                      variant="rectangular"
                      width={120}
                      height={64}
                      sx={{
                        bgcolor: "rgba(0, 0, 0, 0.1)",
                        borderRadius: "8px",
                      }}
                    />
                  )}
                  <img
                    src={company.logo}
                    alt={company.name}
                    className={
                      "max-h-16 max-w-full object-contain " +
                      (!companiesLoaded[index] ? "hidden" : "")
                    }
                    onLoad={() => handleCompanyLoad(index)}
                  />
                </div>
              ))}
            </div>

            {/* View All Link */}
            <div className="text-center mt-16"></div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="min-h-screen flex items-center justify-center bg-lightGray dark:bg-lightGray py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            {/* Section Title */}
            <div className="text-center mb-20">
              <h3
                data-title-id="projects"
                className={
                  "font-display font-semibold text-5xl sm:text-6xl md:text-7xl text-black mb-6 transition-all duration-1000 " +
                  (visibleTitles.includes("projects")
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-8")
                }
              >
                {t.home.projects.title}
                <br />
                <span className="text-black/60">
                  {t.home.projects.subtitle}
                </span>
              </h3>
              <p className="text-xl sm:text-2xl text-black/60 mt-6 font-light max-w-3xl mx-auto">
                {t.home.projects.description}
              </p>
            </div>

            {/* Projects Grid */}
            <div className="grid md:grid-cols-3 gap-8">
              {!projectsLoaded ? (
                // Skeleton Loading
                Array.from({ length: 3 }).map((_, index) => (
                  <article
                    key={index}
                    className="bg-white rounded-3xl p-8 flex flex-col shadow-md"
                  >
                    <div className="mb-4">
                      <Skeleton
                        variant="rectangular"
                        width={100}
                        height={24}
                        sx={{
                          bgcolor: "rgba(0, 0, 0, 0.1)",
                          borderRadius: "20px",
                          mb: 2,
                        }}
                      />
                      <Skeleton
                        variant="text"
                        width="80%"
                        height={32}
                        sx={{ bgcolor: "rgba(0, 0, 0, 0.1)", mb: 2 }}
                      />
                      <Skeleton
                        variant="rectangular"
                        width="100%"
                        height={80}
                        sx={{
                          bgcolor: "rgba(0, 0, 0, 0.1)",
                          borderRadius: "8px",
                        }}
                      />
                    </div>
                    <div className="mt-auto">
                      <div className="flex flex-wrap gap-2 mb-4">
                        {Array.from({ length: 4 }).map((_, i) => (
                          <Skeleton
                            key={i}
                            variant="rectangular"
                            width={60}
                            height={24}
                            sx={{
                              bgcolor: "rgba(0, 0, 0, 0.1)",
                              borderRadius: "20px",
                            }}
                          />
                        ))}
                      </div>
                      <Skeleton
                        variant="text"
                        width={120}
                        height={20}
                        sx={{ bgcolor: "rgba(0, 0, 0, 0.1)" }}
                      />
                    </div>
                  </article>
                ))
              ) : (
                <>
                  {/* Project 1 - Pinapp QA Automation */}
                  <article className="bg-white rounded-3xl p-8 shadow-md hover:shadow-xl transition-all duration-500 flex flex-col">
                    <div className="mb-4">
                      <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold tracking-wide uppercase mb-4">
                        QA Automation
                      </span>
                      <h3 className="font-display font-semibold text-2xl text-black mb-3">
                        Pinapp QA Challenge
                      </h3>
                      <p className="text-black/70 text-base leading-relaxed mb-4">
                        Framework de automatización con Selenium, Python y
                        Pytest-BDD usando patrón POM. Incluye pruebas de API con
                        Postman y reportes HTML detallados.
                      </p>
                    </div>
                    <div className="mt-auto">
                      <div className="flex flex-wrap gap-2 mb-4">
                        <span className="px-3 py-1 bg-black/5 text-black/70 rounded-full text-xs font-medium">
                          Python
                        </span>
                        <span className="px-3 py-1 bg-black/5 text-black/70 rounded-full text-xs font-medium">
                          Selenium
                        </span>
                        <span className="px-3 py-1 bg-black/5 text-black/70 rounded-full text-xs font-medium">
                          Pytest-BDD
                        </span>
                        <span className="px-3 py-1 bg-black/5 text-black/70 rounded-full text-xs font-medium">
                          Postman
                        </span>
                      </div>
                      <a
                        href="https://github.com/iampedroluis/pinapp-qa-automation"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary hover:text-primary/80 text-sm font-medium transition-colors inline-flex items-center gap-1"
                      >
                        {t.home.projects.github}
                        <i className="fa-brands fa-github"></i>
                      </a>
                    </div>
                  </article>

                  {/* Project 2 - OrangeHRM QA */}
                  <article className="bg-white rounded-3xl p-8 shadow-md hover:shadow-xl transition-all duration-500 flex flex-col">
                    <div className="mb-4">
                      <span className="inline-block px-3 py-1 rounded-full bg-secondary/10 text-secondary text-xs font-semibold tracking-wide uppercase mb-4">
                        Test Automation
                      </span>
                      <h3 className="font-display font-semibold text-2xl text-black mb-3">
                        OrangeHRM Test Suite
                      </h3>
                      <p className="text-black/70 text-base leading-relaxed mb-4">
                        Suite de automatización para OrangeHRM con Selenium y
                        Java. Implementa Cucumber para BDD y genera reportes
                        HTML con múltiples escenarios de prueba.
                      </p>
                    </div>
                    <div className="mt-auto">
                      <div className="flex flex-wrap gap-2 mb-4">
                        <span className="px-3 py-1 bg-black/5 text-black/70 rounded-full text-xs font-medium">
                          Java
                        </span>
                        <span className="px-3 py-1 bg-black/5 text-black/70 rounded-full text-xs font-medium">
                          Selenium
                        </span>
                        <span className="px-3 py-1 bg-black/5 text-black/70 rounded-full text-xs font-medium">
                          Cucumber
                        </span>
                        <span className="px-3 py-1 bg-black/5 text-black/70 rounded-full text-xs font-medium">
                          Maven
                        </span>
                      </div>
                      <a
                        href="https://github.com/iampedroluis/qa-orangehrm"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary hover:text-primary/80 text-sm font-medium transition-colors inline-flex items-center gap-1"
                      >
                        {t.home.projects.github}
                        <i className="fa-brands fa-github"></i>
                      </a>
                    </div>
                  </article>

                  {/* Project 3 - NexConnect */}
                  <article className="bg-white rounded-3xl p-8 shadow-md hover:shadow-xl transition-all duration-500 flex flex-col">
                    <div className="mb-4">
                      <span className="inline-block px-3 py-1 rounded-full bg-accent/10 text-accent text-xs font-semibold tracking-wide uppercase mb-4">
                        Full Stack
                      </span>
                      <h3 className="font-display font-semibold text-2xl text-black mb-3">
                        NexConnect
                      </h3>
                      <p className="text-black/70 text-base leading-relaxed mb-4">
                        Plataforma que conecta instituciones con personas
                        mediante dashboards. Ideal para instituciones educativas
                        que necesitan comunicarse con docentes, padres y alumnos
                        de forma ágil.
                      </p>
                    </div>
                    <div className="mt-auto">
                      <div className="flex flex-wrap gap-2 mb-4">
                        <span className="px-3 py-1 bg-black/5 text-black/70 rounded-full text-xs font-medium">
                          JavaScript
                        </span>
                        <span className="px-3 py-1 bg-black/5 text-black/70 rounded-full text-xs font-medium">
                          React
                        </span>
                        <span className="px-3 py-1 bg-black/5 text-black/70 rounded-full text-xs font-medium">
                          Node.js
                        </span>
                        <span className="px-3 py-1 bg-black/5 text-black/70 rounded-full text-xs font-medium">
                          Docker
                        </span>
                      </div>
                      <a
                        href="https://github.com/iampedroluis/NexConnect"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary hover:text-primary/80 text-sm font-medium transition-colors inline-flex items-center gap-1"
                      >
                        {t.home.projects.github}
                        <i className="fa-brands fa-github"></i>
                      </a>
                    </div>
                  </article>
                </>
              )}
            </div>

            {/* View All Link */}
            <div className="text-center mt-16">
              <Link
                to="/proyectos"
                className="text-primary hover:text-primary/80 text-lg font-medium transition-colors inline-flex items-center gap-2"
              >
                {t.home.projects.viewAll}
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Spacer with gradient */}
      
    </>
  );
};

export default Home;
