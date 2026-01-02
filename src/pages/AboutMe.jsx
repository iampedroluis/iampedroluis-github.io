import React, { useState, useEffect } from "react";
import Skeleton from "@mui/material/Skeleton";
import perfil from "../img/perfil.jpeg";
import { useLanguage } from "../contexts/LanguageContext";
import { translations } from "../translations/translations";

const AboutMe = () => {
  const { language } = useLanguage();
  const t = translations[language];
  const [imageLoaded, setImageLoaded] = useState(false);
  const [visibleTitles, setVisibleTitles] = useState([]);

  useEffect(() => {
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

    return () => observer.disconnect();
  }, []);
  return (
    <>
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center bg-black dark:bg-black py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto text-center">
            <h1 className="font-display font-semibold text-5xl sm:text-6xl md:text-7xl lg:text-8xl mb-6 text-white leading-tight">
              {t.aboutMe.hero.title}
              <br />
              <span className="text-white/60">{t.aboutMe.hero.subtitle}</span>
            </h1>
            <p className="text-xl sm:text-2xl text-white/60 mt-6 font-light max-w-3xl mx-auto">
              {t.aboutMe.hero.description}
            </p>
          </div>
        </div>
      </section>

      {/* About Content Section */}
      <article className="py-24 bg-white dark:bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-col items-center mb-16">
              <div className="relative mb-12">
                <div className="w-48 h-48 rounded-full overflow-hidden backdrop-blur-md bg-white/30 border border-white/20 shadow-2xl">
                  {!imageLoaded && (
                    <Skeleton
                      variant="circular"
                      width={192}
                      height={192}
                      sx={{ bgcolor: "rgba(0, 0, 0, 0.1)" }}
                    />
                  )}
                  <img
                    src={perfil}
                    alt="Pedro Luis Gutierrez - QA Automation Engineer"
                    className={`w-full h-full object-cover ${
                      !imageLoaded ? "hidden" : ""
                    }`}
                    onLoad={() => setImageLoaded(true)}
                  />
                </div>
              </div>

              <h2
                data-title-id="name"
                className={`text-4xl sm:text-5xl font-semibold text-black mb-8 text-center transition-all duration-1000 ${
                  visibleTitles.includes("name")
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-8"
                }`}
              >
                {t.aboutMe.name}
              </h2>
            </div>

            <div className="space-y-6 text-xl sm:text-2xl text-black/70 leading-relaxed font-light">
              <p>
                {
                  t.aboutMe.content.paragraph1.split(
                    t.aboutMe.content.paragraph1Highlight
                  )[0]
                }
                <span className="text-black font-medium">
                  {t.aboutMe.content.paragraph1Highlight}
                </span>
                {
                  t.aboutMe.content.paragraph1.split(
                    t.aboutMe.content.paragraph1Highlight
                  )[1]
                }
              </p>
              <p>
                {
                  t.aboutMe.content.paragraph2.split(
                    t.aboutMe.content.paragraph2Highlight
                  )[0]
                }
                <span className="text-black font-medium">
                  {t.aboutMe.content.paragraph2Highlight}
                </span>
                {
                  t.aboutMe.content.paragraph2.split(
                    t.aboutMe.content.paragraph2Highlight
                  )[1]
                }
              </p>
              <p>
                {
                  t.aboutMe.content.paragraph3.split(
                    t.aboutMe.content.paragraph3Highlight
                  )[0]
                }
                <span className="text-black font-medium">
                  {t.aboutMe.content.paragraph3Highlight}
                </span>
                {
                  t.aboutMe.content.paragraph3.split(
                    t.aboutMe.content.paragraph3Highlight
                  )[1]
                }
              </p>
            </div>
          </div>
        </div>
      </article>

      {/* Skills Highlight */}
      <section className="py-24 bg-lightGray dark:bg-lightGray">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto text-center">
            <h2
              data-title-id="skills"
              className={`font-display font-semibold text-4xl sm:text-5xl md:text-6xl mb-12 text-black leading-tight transition-all duration-1000 ${
                visibleTitles.includes("skills")
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
            >
              {t.aboutMe.skillsTitle}
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-8 mt-12">
              {[
                "Selenium",
                "Cypress",
                "Playwright",
                "Jest",
                "React Testing Library",
                "Jenkins",
                "GitHub Actions",
                "Postman",
                "JMeter",
              ].map((tech, index) => (
                <div
                  key={index}
                  className="backdrop-blur-md bg-white/30 border border-white/20 p-6 rounded-2xl text-center text-black text-lg font-medium shadow-lg hover:shadow-xl hover:bg-white/40 transition-all duration-300"
                >
                  {tech}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutMe;
