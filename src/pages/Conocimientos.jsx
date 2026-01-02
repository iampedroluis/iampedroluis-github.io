import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Skeleton from "@mui/material/Skeleton";
import { useLanguage } from "../contexts/LanguageContext";
import { translations } from "../translations/translations";
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
import azureImg from "../img/azure.png";
import jiraImg from "../img/jira.png";
import xrayImg from "../img/xray.png";

const Conocimientos = () => {
  const { language } = useLanguage();
  const t = translations[language];
  const location = useLocation();
  const [loading, setLoading] = useState(true);
  const [visibleCards, setVisibleCards] = useState([]);
  const [visibleTitles, setVisibleTitles] = useState([]);

  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);

    // Simulate loading time for images
    setTimeout(() => {
      setLoading(false);
    }, 800);

    // Intersection Observer for scroll animations
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = entry.target.dataset.index;
            setVisibleCards((prev) => [...new Set([...prev, parseInt(index)])]);
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px",
      }
    );

    // Observe all cards after loading is complete
    if (!loading) {
      const cards = document.querySelectorAll("[data-index]");
      cards.forEach((card) => observer.observe(card));
    }

    // Intersection Observer for title animations
    const titleObserver = new IntersectionObserver(
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
    titles.forEach((title) => titleObserver.observe(title));

    return () => {
      observer.disconnect();
      titleObserver.disconnect();
    };
  }, [loading]);

  const technologies = [
    {
      name: "Selenium",
      category: "QA Automation",
      image: seleniumImg,
      description:
        "Framework líder para automatización de pruebas web. Lo utilizo para crear suites de pruebas robustas con soporte multi-navegador.",
      docs: "https://www.selenium.dev/documentation/",
    },
    {
      name: "Cypress",
      category: "QA Automation",
      image: cypressImg,
      description:
        "Herramienta moderna de testing E2E. Ideal para pruebas rápidas y confiables con excelente experiencia de desarrollo.",
      docs: "https://docs.cypress.io/",
    },
    {
      name: "Postman",
      category: "API Testing",
      image: postmanImg,
      description:
        "Plataforma para testing de APIs. La uso para pruebas de integración, documentación y automatización de endpoints.",
      docs: "https://learning.postman.com/docs/",
    },
    {
      name: "Cucumber",
      category: "BDD Testing",
      image: cucumberImg,
      description:
        "Framework BDD para escribir pruebas en lenguaje natural. Facilita la colaboración entre equipos técnicos y de negocio.",
      docs: "https://cucumber.io/docs/",
    },
    {
      name: "Appium",
      category: "Mobile Testing",
      image: appiumImg,
      description:
        "Framework para automatización de aplicaciones móviles. Lo utilizo para pruebas en iOS y Android.",
      docs: "https://appium.io/docs/",
    },
    {
      name: "React",
      category: "Frontend",
      image: reactImg,
      description:
        "Biblioteca JavaScript para construir interfaces de usuario. Mi framework principal para desarrollo de aplicaciones web modernas.",
      docs: "https://react.dev/",
    },
    {
      name: "JavaScript",
      category: "Programming",
      image: jsImg,
      description:
        "Lenguaje de programación versátil. Base para desarrollo frontend, backend con Node.js y automatización de pruebas.",
      docs: "https://developer.mozilla.org/es/docs/Web/JavaScript",
    },
    {
      name: "Python",
      category: "Programming",
      image: pythonImg,
      description:
        "Lenguaje ideal para scripts de automatización y desarrollo backend. Lo uso con frameworks como Flask y pytest.",
      docs: "https://docs.python.org/3/",
    },
    {
      name: "HTML5",
      category: "Frontend",
      image: htmlImg,
      description:
        "Lenguaje de marcado para estructurar contenido web. Fundamento esencial del desarrollo frontend.",
      docs: "https://developer.mozilla.org/es/docs/Web/HTML",
    },
    {
      name: "CSS3",
      category: "Frontend",
      image: cssImg,
      description:
        "Lenguaje de estilos para diseño web. Lo combino con preprocesadores y frameworks modernos.",
      docs: "https://developer.mozilla.org/es/docs/Web/CSS",
    },
    {
      name: "Node.js",
      category: "Backend",
      image: nodejsImg,
      description:
        "Entorno de ejecución JavaScript. Lo utilizo para desarrollo backend, APIs REST y herramientas de automatización.",
      docs: "https://nodejs.org/docs/",
    },
    {
      name: "Tailwind CSS",
      category: "Frontend",
      image: tailwindImg,
      description:
        "Framework CSS utility-first. Mi elección para diseño rápido y personalizable de interfaces modernas.",
      docs: "https://tailwindcss.com/docs",
    },
    {
      name: "Bootstrap",
      category: "Frontend",
      image: boostrapImg,
      description:
        "Framework CSS popular para desarrollo responsive. Útil para prototipos rápidos y componentes prediseñados.",
      docs: "https://getbootstrap.com/docs/",
    },
    {
      name: "GitHub",
      category: "Version Control",
      image: githubImg,
      description:
        "Plataforma de control de versiones. Esencial para colaboración en equipo, CI/CD y gestión de código.",
      docs: "https://docs.github.com/",
    },
    {
      name: "Azure DevOps",
      category: "DevOps & Testing",
      image: azureImg,
      description:
        "Plataforma integral para gestión de proyectos ágiles. La utilizo para Azure Test Plans, Repos y trazabilidad completa.",
      docs: "https://learn.microsoft.com/es-es/azure/devops/",
    },
    {
      name: "Android Studio",
      category: "Mobile Development",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/9/95/Android_Studio_Icon_3.6.svg",
      description:
        "IDE oficial para desarrollo Android. Lo uso para automatización de pruebas móviles con emuladores y dispositivos reales.",
      docs: "https://developer.android.com/studio/intro",
    },
    {
      name: "Salesforce",
      category: "CRM & Database",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/f/f9/Salesforce.com_logo.svg",
      description:
        "Plataforma CRM líder. Experiencia en integración de APIs, validación de datos y automatización de pruebas con Salesforce.",
      docs: "https://developer.salesforce.com/docs",
    },
    {
      name: "SOQL",
      category: "Database Query",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/f/f9/Salesforce.com_logo.svg",
      description:
        "Lenguaje de consulta de Salesforce. Lo utilizo para recuperar y validar datos en escenarios de testing complejos.",
      docs: "https://developer.salesforce.com/docs/atlas.en-us.soql_sosl.meta/soql_sosl/",
    },
    {
      name: "Xray",
      category: "Test Management",
      image: xrayImg,
      description:
        "Herramienta de gestión de casos de prueba para Jira. La uso para organizar, ejecutar y reportar resultados de testing.",
      docs: "https://docs.getxray.app/",
    },
    {
      name: "GraphQL",
      category: "API Query Language",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/1/17/GraphQL_Logo.svg",
      description:
        "Lenguaje de consulta para APIs. Lo utilizo para testing de APIs modernas y validación de integraciones backend.",
      docs: "https://graphql.org/learn/",
    },
  ];

  return (
    <>
      <div id="conocimientos-hero"></div>
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center bg-black dark:bg-black py-20 relative">
        {location.pathname === "/conocimientos" && (
          <Link
            to="/"
            className="fixed top-24 left-6 z-50 text-white/60 hover:text-white transition-colors"
            aria-label="Volver al inicio"
          >
            <span className="material-icons text-3xl">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="24px"
                viewBox="0 -960 960 960"
                width="24px"
                fill="#e3e3e3"
              >
                <path d="M400-80 0-480l400-400 71 71-329 329 329 329-71 71Z" />
              </svg>
            </span>
          </Link>
        )}
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto text-center">
            <h1 className="font-display font-semibold text-5xl sm:text-6xl md:text-7xl lg:text-8xl mb-6 text-white leading-tight">
              {t.knowledge.title}
              <br />
              <span className="text-white/60">{t.knowledge.subtitle}</span>
            </h1>
            <p className="text-xl sm:text-2xl text-white/60 mt-6 font-light max-w-3xl mx-auto">
              {t.knowledge.description}
            </p>
          </div>
        </div>
      </section>

      {/* Technologies Grid */}
      <section className="py-24 bg-white dark:bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              {loading
                ? // Skeleton Loading
                  Array.from({ length: 20 }).map((_, index) => (
                    <article
                      key={index}
                      className="bg-lightGray dark:bg-lightGray rounded-3xl p-8 shadow-md"
                    >
                      <div className="flex items-start gap-6">
                        <Skeleton
                          variant="rectangular"
                          width={64}
                          height={64}
                          sx={{
                            bgcolor: "rgba(0, 0, 0, 0.1)",
                            borderRadius: "12px",
                          }}
                        />
                        <div className="flex-1">
                          <div className="mb-3">
                            <Skeleton
                              variant="text"
                              width={128}
                              height={28}
                              sx={{ bgcolor: "rgba(0, 0, 0, 0.1)", mb: 1 }}
                            />
                            <Skeleton
                              variant="rounded"
                              width={96}
                              height={20}
                              sx={{ bgcolor: "rgba(0, 0, 0, 0.1)" }}
                            />
                          </div>
                          <div className="space-y-2 mb-4">
                            <Skeleton
                              variant="text"
                              width="100%"
                              height={16}
                              sx={{ bgcolor: "rgba(0, 0, 0, 0.1)" }}
                            />
                            <Skeleton
                              variant="text"
                              width="85%"
                              height={16}
                              sx={{ bgcolor: "rgba(0, 0, 0, 0.1)" }}
                            />
                          </div>
                          <Skeleton
                            variant="text"
                            width={160}
                            height={16}
                            sx={{ bgcolor: "rgba(0, 0, 0, 0.1)" }}
                          />
                        </div>
                      </div>
                    </article>
                  ))
                : // Actual Content
                  technologies.map((tech, index) => (
                    <article
                      key={index}
                      data-index={index}
                      className={`backdrop-blur-md bg-white/30 border border-white/20 rounded-3xl p-8 shadow-lg hover:shadow-xl hover:bg-white/40 transition-all duration-700 ${
                        visibleCards.includes(index)
                          ? "opacity-100 translate-y-0"
                          : "opacity-0 translate-y-8"
                      }`}
                      style={{
                        transitionDelay: `${(index % 2) * 100}ms`,
                      }}
                    >
                      <div className="flex items-start gap-6">
                        <img
                          src={tech.image}
                          alt={tech.name}
                          className="h-16 w-16 object-contain flex-shrink-0"
                        />
                        <div className="flex-1">
                          <div className="flex items-start justify-between mb-3">
                            <div>
                              <h3 className="font-display font-semibold text-2xl text-black mb-1">
                                {tech.name}
                              </h3>
                              <span className="inline-block px-3 py-1 rounded-full backdrop-blur-sm bg-primary/20 border border-primary/30 text-primary text-xs font-semibold tracking-wide uppercase">
                                {tech.category}
                              </span>
                            </div>
                          </div>
                          <p className="text-black/70 text-base leading-relaxed mb-4">
                            {tech.description}
                          </p>
                          <a
                            href={tech.docs}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-primary hover:text-primary/80 text-sm font-medium transition-colors inline-flex items-center gap-1"
                          >
                            {t.knowledge.viewDocs}
                            <i className="fa-solid fa-arrow-up-right-from-square text-xs"></i>
                          </a>
                        </div>
                      </div>
                    </article>
                  ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-lightGray dark:bg-lightGray">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2
            data-title-id="cta"
            className={`font-display font-semibold text-4xl sm:text-5xl text-black mb-6 transition-all duration-1000 ${
              visibleTitles.includes("cta")
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            {t.knowledge.cta.title}
          </h2>
          <p className="text-xl text-black/60 mb-8 max-w-2xl mx-auto">
            {t.knowledge.cta.description}
          </p>
          <Link
            to="/contacto"
            className="inline-flex items-center backdrop-blur-sm bg-primary/80 border border-primary/30 hover:bg-primary/90 py-3 px-8 text-white rounded-full text-base font-medium transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            {t.knowledge.cta.button}
          </Link>
        </div>
      </section>
    </>
  );
};

export default Conocimientos;
