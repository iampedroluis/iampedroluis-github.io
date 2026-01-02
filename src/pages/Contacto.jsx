import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { useLanguage } from "../contexts/LanguageContext";
import { translations } from "../translations/translations";

const Contacto = () => {
  const { language } = useLanguage();
  const t = translations[language];
  const location = useLocation();
  const [visibleTitles, setVisibleTitles] = useState([]);

  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);

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

    return () => titleObserver.disconnect();
  }, []);

  return (
    <>
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center bg-black dark:bg-black py-20 relative">
        {location.pathname === "/contacto" && (
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
              {t.contact.title}
              <br />
              <span className="text-white/60">{t.contact.subtitle}</span>
            </h1>
            <p className="text-xl sm:text-2xl text-white/60 mt-6 font-light max-w-3xl mx-auto">
              {t.contact.description}
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-24 bg-white dark:bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-start">
              {/* Info Column */}
              <div>
                <h2
                  data-title-id="info"
                  className={`font-display font-semibold text-3xl sm:text-4xl md:text-5xl text-black mb-6 transition-all duration-1000 ${
                    visibleTitles.includes("info")
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-8"
                  }`}
                >
                  {t.contact.sectionTitle}
                </h2>
                <p className="text-lg text-black/70 leading-relaxed mb-4">
                  {t.contact.sectionDescription1}
                </p>
                <p className="text-lg text-black/70 leading-relaxed mb-8">
                  {t.contact.sectionDescription2}
                </p>

                {/* Contact Info */}
                {/* <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <i className="fa-solid fa-envelope text-primary text-lg"></i>
                    </div>
                    <div>
                      <p className="text-sm text-black/60 font-medium uppercase tracking-wide mb-1">
                        Email
                      </p>
                      <a
                        href="mailto:pedroluisgutierrez.dev@gmail.com"
                        className="text-black hover:text-primary transition-colors"
                      >
                        pedroluisgutierrez.dev@gmail.com
                      </a>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <i className="fa-brands fa-linkedin text-primary text-lg"></i>
                    </div>
                    <div>
                      <p className="text-sm text-black/60 font-medium uppercase tracking-wide mb-1">
                        LinkedIn
                      </p>
                      <a
                        href="https://www.linkedin.com/in/pedro-luis-gutierrez-contreras/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-black hover:text-primary transition-colors"
                      >
                        Ver perfil profesional
                      </a>
                    </div>
                  </div>
                </div> */}
              </div>

              {/* Contact Methods */}
              <div className="backdrop-blur-md bg-white/30 border border-white/20 rounded-2xl p-8 shadow-lg space-y-6">
                <h3 className="font-display font-semibold text-2xl text-black mb-6">
                  {t.contact.contactWays}
                </h3>

                {/* Email Button */}
                <a
                  href="mailto:pedroluisgutierrez.dev@gmail.com?subject=Contacto%20desde%20Portfolio&body=Hola%20Pedro%2C%0A%0AMe%20gustar%C3%ADa%20contactarte%20para%3A%0A%0A"
                  className="block w-full backdrop-blur-sm bg-primary/80 border border-primary/30 hover:bg-primary/90 text-white font-medium py-4 px-6 rounded-2xl text-base transition-all duration-300 shadow-lg hover:shadow-xl text-center"
                >
                  <i className="fa-solid fa-envelope mr-2"></i>
                  {t.contact.sendEmail}
                </a>

                {/* LinkedIn Button */}
                <a
                  href="https://www.linkedin.com/in/pedro-luis-gutierrez-contreras/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full backdrop-blur-sm bg-[#0A66C2]/80 border border-[#0A66C2]/30 hover:bg-[#004182]/90 text-white font-medium py-4 px-6 rounded-2xl text-base transition-all duration-300 shadow-lg hover:shadow-xl text-center"
                >
                  <i className="fa-brands fa-linkedin mr-2"></i>
                  {t.contact.connectLinkedIn}
                </a>

                {/* GitHub Button */}
                <a
                  href="https://github.com/iampedroluis"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full bg-black hover:bg-black/80 text-white font-medium py-4 px-6 rounded-2xl text-base transition-all duration-300 shadow-md hover:shadow-lg text-center"
                >
                  <i className="fa-brands fa-github mr-2"></i>
                  {t.contact.viewGithub}
                </a>

                {/* Direct Email Copy */}
                <div className="pt-4 border-t-2 border-black/10">
                  <p className="text-sm text-black/60 font-medium uppercase tracking-wide mb-3 text-center">
                    {t.contact.orWrite}
                  </p>
                  <div className="bg-white rounded-2xl py-3 px-4 text-center">
                    <p className="text-black font-mono text-sm break-all">
                      pedroluisgutierrez.dev@gmail.com
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contacto;
