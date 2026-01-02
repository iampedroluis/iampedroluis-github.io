import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import Skeleton from "@mui/material/Skeleton";
import emergenciasImg from "../img/emergencias.png";
import avalithImg from "../img/avalith.png";
import telecomImg from "../img/telecom.png";
import financieraOhImg from "../img/financiera-oh.png";
import pinappImg from "../img/pinapp.png";
import jockeyClubImg from "../img/jocker_club_.png";
import dvImg from "../img/dv.png";
import { useLanguage } from "../contexts/LanguageContext";
import { translations } from "../translations/translations";

const Experiencias = () => {
  const { language } = useLanguage();
  const t = translations[language];
  const location = useLocation();
  const [visibleTitles, setVisibleTitles] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 800);
    return () => clearTimeout(timer);
  }, []);

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

  const experiences = [
    {
      company: "Pinapp",
      logo: pinappImg,
      position: t.experiences.jobs.pinapp.position,
      period: t.experiences.jobs.pinapp.period,
      duration: t.experiences.jobs.pinapp.duration,
      description: t.experiences.jobs.pinapp.description,
      responsibilities: t.experiences.jobs.pinapp.responsibilities,
    },
    {
      company: "Telecom Argentina",
      logo: telecomImg,
      position: t.experiences.jobs.telecom.position,
      period: t.experiences.jobs.telecom.period,
      duration: t.experiences.jobs.telecom.duration,
      description: t.experiences.jobs.telecom.description,
      responsibilities: t.experiences.jobs.telecom.responsibilities,
    },
    {
      company: "Avalith",
      logo: avalithImg,
      position: t.experiences.jobs.avalith.position,
      period: t.experiences.jobs.avalith.period,
      duration: t.experiences.jobs.avalith.duration,
      description: t.experiences.jobs.avalith.description,
      responsibilities: t.experiences.jobs.avalith.responsibilities,
    },
    {
      company: "Emergencias",
      logo: emergenciasImg,
      position: t.experiences.jobs.emergencias.position,
      period: t.experiences.jobs.emergencias.period,
      duration: t.experiences.jobs.emergencias.duration,
      description: t.experiences.jobs.emergencias.description,
      responsibilities: t.experiences.jobs.emergencias.responsibilities,
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center bg-black dark:bg-black py-20 relative">
        {location.pathname === "/experiencias" && (
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
              {t.experiences.title}
              <br />
              <span className="text-white/60">{t.experiences.subtitle}</span>
            </h1>
            <p className="text-xl sm:text-2xl text-white/60 mt-6 font-light max-w-3xl mx-auto">
              {t.experiences.description}
            </p>
          </div>
        </div>
      </section>

      {/* Experience Timeline */}
      <section className="py-24 bg-white dark:bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            {/* Section Title */}
            <div className="text-center mb-20">
              <h2
                data-title-id="timeline"
                className={`font-display font-semibold text-4xl sm:text-5xl md:text-6xl text-black mb-6 transition-all duration-1000 ${
                  visibleTitles.includes("timeline")
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-8"
                }`}
              >
                {t.experiences.timelineTitle}
                <br />
                <span className="text-black/60">
                  {t.experiences.timelineSubtitle}
                </span>
              </h2>
              <p className="text-xl text-black/60 mt-6 font-light max-w-3xl mx-auto">
                {t.experiences.timelineDescription}
              </p>
            </div>

            {/* Timeline */}
            <div className="relative max-w-4xl mx-auto">
              {/* Vertical Line */}
              <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-black/10"></div>

              {/* Experience Items */}
              <div className="space-y-12">
                {loading
                  ? // Skeleton Loading
                    Array.from({ length: 4 }).map((_, index) => (
                      <div key={index} className="relative pl-16">
                        {/* Timeline Dot */}
                        <div className="absolute left-[19px] top-6 w-4 h-4 bg-primary rounded-full ring-4 ring-white"></div>

                        {/* Skeleton Card */}
                        <div className="bg-lightGray rounded-3xl p-6 sm:p-8 shadow-md">
                          {/* Header Skeleton */}
                          <div className="flex items-start gap-6 mb-6">
                            <Skeleton
                              variant="rectangular"
                              width={96}
                              height={40}
                              sx={{
                                bgcolor: "rgba(0, 0, 0, 0.1)",
                                borderRadius: "8px",
                                flexShrink: 0,
                              }}
                            />
                            <div className="flex-1">
                              <Skeleton
                                variant="text"
                                width="60%"
                                height={32}
                                sx={{ bgcolor: "rgba(0, 0, 0, 0.1)", mb: 0.5 }}
                              />
                              <Skeleton
                                variant="text"
                                width="40%"
                                height={24}
                                sx={{ bgcolor: "rgba(0, 0, 0, 0.1)", mb: 1 }}
                              />
                              <div className="flex gap-2">
                                <Skeleton
                                  variant="text"
                                  width={120}
                                  height={20}
                                  sx={{ bgcolor: "rgba(0, 0, 0, 0.1)" }}
                                />
                                <Skeleton
                                  variant="text"
                                  width={100}
                                  height={20}
                                  sx={{ bgcolor: "rgba(0, 0, 0, 0.1)" }}
                                />
                              </div>
                            </div>
                          </div>

                          {/* Description Skeleton */}
                          <Skeleton
                            variant="text"
                            width="100%"
                            height={20}
                            sx={{ bgcolor: "rgba(0, 0, 0, 0.1)", mb: 0.5 }}
                          />
                          <Skeleton
                            variant="text"
                            width="95%"
                            height={20}
                            sx={{ bgcolor: "rgba(0, 0, 0, 0.1)", mb: 3 }}
                          />

                          {/* Responsibilities Skeleton */}
                          <Skeleton
                            variant="text"
                            width={140}
                            height={18}
                            sx={{ bgcolor: "rgba(0, 0, 0, 0.1)", mb: 1.5 }}
                          />
                          {Array.from({ length: 3 }).map((_, i) => (
                            <div key={i} className="flex gap-2 mb-2">
                              <Skeleton
                                variant="circular"
                                width={6}
                                height={6}
                                sx={{
                                  bgcolor: "rgba(0, 0, 0, 0.1)",
                                  mt: 1,
                                  flexShrink: 0,
                                }}
                              />
                              <Skeleton
                                variant="text"
                                width="90%"
                                height={20}
                                sx={{ bgcolor: "rgba(0, 0, 0, 0.1)" }}
                              />
                            </div>
                          ))}
                        </div>
                      </div>
                    ))
                  : experiences.map((exp, index) => (
                      <div key={index} className="relative pl-16">
                        {/* Timeline Dot */}
                        <div className="absolute left-[19px] top-6 w-4 h-4 bg-primary rounded-full ring-4 ring-white"></div>

                        {/* Content */}
                        <div className="backdrop-blur-md bg-white/30 border border-white/20 rounded-3xl p-6 sm:p-8 shadow-lg hover:shadow-xl hover:bg-white/40 transition-all duration-300">
                          {/* Header with Logo */}
                          <div className="flex items-start gap-6 mb-6">
                            {/* Company Logo */}
                            <div className="w-24 h-10 mt-5  items-center justify-center flex-shrink-0">
                              <img
                                src={exp.logo}
                                alt={exp.company}
                                className="max-w-full max-h-full"
                              />
                            </div>

                            {/* Position & Company */}
                            <div className="flex-1">
                              <h3 className="font-display font-semibold text-xl sm:text-2xl text-black mb-1">
                                {exp.position}
                              </h3>
                              <p className="text-base sm:text-lg text-black/80 font-medium mb-2">
                                {exp.company}
                              </p>
                              <div className="flex flex-wrap items-center gap-2 text-xs sm:text-sm">
                                <p className="text-primary font-medium inline-flex items-center gap-1.5">
                                  <i className="fa-regular fa-calendar"></i>
                                  {exp.period}
                                </p>
                                <span className="text-black/40">•</span>
                                <p className="text-black/60 font-medium">
                                  {exp.duration}
                                </p>
                              </div>
                            </div>
                          </div>

                          {/* Description */}
                          <p className="text-sm sm:text-base text-black/70 leading-relaxed mb-6">
                            {exp.description}
                          </p>

                          {/* Responsibilities */}
                          <div>
                            <p className="text-xs sm:text-sm font-semibold text-black/60 mb-3 uppercase tracking-wide">
                              {t.experiences.responsibilities}
                            </p>
                            <ul className="space-y-2.5">
                              {exp.responsibilities.map((resp, respIndex) => (
                                <li
                                  key={respIndex}
                                  className="flex items-start gap-3 text-black/70 text-xs sm:text-sm leading-relaxed"
                                >
                                  <i className="fa-solid fa-circle text-primary text-[6px] mt-2 flex-shrink-0"></i>
                                  <span>{resp}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </div>
                    ))}
              </div>
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
            {t.experiences.cta.title}
          </h2>
          <p className="text-xl text-black/60 mb-8 max-w-2xl mx-auto">
            {t.experiences.cta.description}
          </p>
          <Link
            to="/contacto"
            className="inline-flex items-center backdrop-blur-sm bg-primary/80 border border-primary/30 hover:bg-primary/90 py-3 px-8 text-white rounded-full text-base font-medium transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            {t.experiences.cta.button}
          </Link>
        </div>
      </section>
    </>
  );
};

export default Experiencias;
