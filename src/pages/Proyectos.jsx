import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import Skeleton from "@mui/material/Skeleton";
import { useLanguage } from "../contexts/LanguageContext";
import { translations } from "../translations/translations";

const Proyectos = () => {
  const { language } = useLanguage();
  const t = translations[language];
  const location = useLocation();
  const [loading, setLoading] = useState(true);
  const [visibleTitles, setVisibleTitles] = useState([]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
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

  const projects = [
    {
      category: "QA AUTOMATION",
      title: "OrangeHRM Test Suite",
      description:
        "Suite de automatización completa para OrangeHRM con Selenium y Java. Implementa Cucumber para BDD, genera reportes HTML con múltiples escenarios de prueba y sigue el patrón Page Object Model.",
      github: "https://github.com/iampedroluis/qa-orangehrm",
      technologies: ["Java", "Selenium", "Cucumber", "Maven", "HTML Reports"],
      role: "QA AUTOMATION ENGINEER - BDD - SELENIUM",
    },
    {
      category: "FULL-STACK",
      title: "CodeMind",
      description:
        "Plataforma de aprendizaje para desarrolladores fullstack. Sistema completo con gestión de usuarios, rutas de aprendizaje, ejercicios interactivos y autenticación segura desarrollada con React y Flask.",
      github: "https://github.com/iampedroluis/codemind_p",
      technologies: ["React", "Python", "Flask", "PostgreSQL", "JavaScript"],
      role: "FULL-STACK DEVELOPER - ARQUITECTURA - BACKEND/FRONTEND",
    },
    {
      category: "FRONTEND",
      title: "ToDo-list POKELIST",
      description:
        "Aplicación interactiva de lista de tareas con temática Pokémon. Desarrollada con React, incluye gestión de estado, componentes reutilizables y diseño responsive con CSS moderno.",
      github: "https://github.com/iampedroluis/ToDo-list-POKELIST",
      technologies: ["React", "JavaScript", "CSS", "HTML", "Webpack"],
      role: "FRONTEND DEVELOPER - UI/UX - REACT",
    },
    {
      category: "FRONTEND",
      title: "StarWars Blog",
      description:
        "Blog interactivo del universo Star Wars con React. Utiliza Context API para gestión de estado, consume API REST de Star Wars y presenta información de personajes, planetas y naves con diseño moderno.",
      github: "https://github.com/iampedroluis/StarWars-Blog",
      technologies: ["React", "JavaScript", "Context API", "CSS", "REST API"],
      role: "FRONTEND DEVELOPER - REACT - API INTEGRATION",
    },
    {
      category: "FULL-STACK",
      title: "JWT-Auth System",
      description:
        "Sistema completo de autenticación con JWT desarrollado con React y Flask. Incluye registro de usuarios, login seguro, recuperación de contraseña y protección de rutas con tokens JWT.",
      github: "https://github.com/iampedroluis/JWT-Auth",
      technologies: ["React", "Python", "Flask", "JWT", "PostgreSQL"],
      role: "FULL-STACK DEVELOPER - SEGURIDAD - AUTENTICACIÓN",
    },
    {
      category: "MOBILE TESTING",
      title: "Grow Avalith Appium",
      description:
        "Framework de automatización móvil con Appium y Python para testing de aplicaciones Android. Implementa Cucumber para BDD, reportes con Allure y patrón Page Object Model para testing mobile.",
      github: "https://github.com/iampedroluis/Grow_avalith_Appium",
      technologies: ["Appium", "Python", "Cucumber", "Allure", "Android"],
      role: "MOBILE QA ENGINEER - APPIUM - BDD",
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center bg-black dark:bg-black py-20 relative">
        {location.pathname === "/proyectos" && (
          <Link
            to="/"
            className="fixed top-24 left-6 z-50 text-white/60 hover:text-white transition-colors"
            aria-label={t.projects.backHome}
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
              {t.projects.title}
              <br />
              <span className="text-white/60 ">{t.projects.subtitle}</span>
            </h1>
            <p className="text-xl sm:text-2xl text-white/60 mt-6 font-light max-w-3xl mx-auto">
              {t.projects.description}
            </p>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-24 bg-white dark:bg-white ">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 ">
          <div className="max-w-6xl mx-auto space-y-16  ">
            {loading
              ? // Skeleton Loading
                Array.from({ length: 6 }).map((_, index) => (
                  <article
                    key={index}
                    className="bg-lightGray dark:bg-lightGray rounded-3xl overflow-hidden shadow-md "
                  >
                    <div className="p-8 sm:p-12 lg:p-16 shadow-xl">
                      <Skeleton
                        variant="rectangular"
                        width={120}
                        height={32}
                        sx={{
                          bgcolor: "rgba(0, 0, 0, 0.1)",
                          borderRadius: "20px",
                          mb: 3,
                        }}
                      />

                      <Skeleton
                        variant="text"
                        width="60%"
                        height={56}
                        sx={{ bgcolor: "rgba(0, 0, 0, 0.1)", mb: 3 }}
                      />

                      <Skeleton
                        variant="rectangular"
                        width="100%"
                        height={80}
                        sx={{
                          bgcolor: "rgba(0, 0, 0, 0.1)",
                          borderRadius: "8px",
                          mb: 4,
                        }}
                      />

                      {/* Technologies Skeleton */}
                      <div className="flex flex-wrap gap-3 mb-8">
                        {Array.from({ length: 5 }).map((_, techIndex) => (
                          <Skeleton
                            key={techIndex}
                            variant="rectangular"
                            width={80}
                            height={36}
                            sx={{
                              bgcolor: "rgba(0, 0, 0, 0.1)",
                              borderRadius: "20px",
                            }}
                          />
                        ))}
                      </div>

                      {/* Role and GitHub Skeleton */}
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 pt-6 border-t border-black/10">
                        <div className="flex-1">
                          <Skeleton
                            variant="text"
                            width={100}
                            height={24}
                            sx={{ bgcolor: "rgba(0, 0, 0, 0.1)", mb: 1 }}
                          />
                          <Skeleton
                            variant="text"
                            width="80%"
                            height={20}
                            sx={{ bgcolor: "rgba(0, 0, 0, 0.1)" }}
                          />
                        </div>
                        <Skeleton
                          variant="text"
                          width={140}
                          height={28}
                          sx={{ bgcolor: "rgba(0, 0, 0, 0.1)" }}
                        />
                      </div>
                    </div>
                  </article>
                ))
              : projects.map((project, index) => (
                  <article
                    key={index}
                    className="bg-lightGray dark:bg-lightGray rounded-3xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500"
                  >
                    <div className="p-8 sm:p-12 lg:p-16">
                      <span className="inline-block py-2 px-4 rounded-full bg-primary/10 text-primary text-xs font-semibold tracking-wide uppercase mb-6">
                        {project.category}
                      </span>

                      <h2 className="font-display font-semibold text-3xl sm:text-4xl lg:text-5xl text-black mb-6 leading-tight">
                        {project.title}
                      </h2>

                      <p className="text-lg sm:text-xl text-black/70 leading-relaxed mb-8 max-w-3xl">
                        {project.description}
                      </p>

                      {/* Technologies */}
                      <div className="flex flex-wrap gap-3 mb-8">
                        {project.technologies.map((tech, techIndex) => (
                          <span
                            key={techIndex}
                            className="px-4 py-2 text-sm font-medium rounded-full bg-white text-black"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>

                      {/* Role and GitHub */}
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 pt-6 border-t border-black/10">
                        <div>
                          <p className="text-black font-semibold mb-1">
                            Participación
                          </p>
                          <p className="text-black/60 text-sm">
                            {project.role}
                          </p>
                        </div>
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-primary hover:text-primary/80 text-lg font-medium transition-colors flex items-center gap-2"
                        >
                          {t.projects.viewGithub}
                        </a>
                      </div>
                    </div>
                  </article>
                ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Proyectos;
