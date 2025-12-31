import React from "react";
import { Link } from "react-router-dom";
import { useLanguage } from "../contexts/LanguageContext";
import { translations } from "../translations/translations";

const Footer = () => {
  const { language } = useLanguage();
  const t = translations[language];
  return (
    <footer className="bg-lightGray dark:bg-lightGray border-t border-black/10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="max-w-7xl mx-auto">
          {/* Main Footer Content */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
            {/* About Section */}
            <div>
              <h3 className="font-display font-semibold text-xl text-black mb-4">
                {t.footer.about}
              </h3>
              <p className="text-black/60 text-sm leading-relaxed mb-4">
                {t.footer.description}
              </p>
              <Link
                to="/sobre-mi"
                className="text-primary hover:text-primary/80 text-sm font-medium inline-flex items-center gap-1 transition-colors"
              >
                {t.footer.learnMore}
              </Link>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-display font-semibold text-base text-black mb-4 uppercase tracking-wide">
                {t.footer.navigation}
              </h4>
              <nav className="space-y-3">
                <Link
                  to="/"
                  className="block text-black/60 hover:text-primary text-sm transition-colors"
                >
                  {t.footer.home}
                </Link>
                <Link
                  to="/sobre-mi"
                  className="block text-black/60 hover:text-primary text-sm transition-colors"
                >
                  {t.footer.aboutMe}
                </Link>
                <Link
                  to="/experiencias"
                  className="block text-black/60 hover:text-primary text-sm transition-colors"
                >
                  {t.nav.experiences}
                </Link>
                <Link
                  to="/proyectos"
                  className="block text-black/60 hover:text-primary text-sm transition-colors"
                >
                  {t.nav.projects}
                </Link>
                <Link
                  to="/conocimientos"
                  className="block text-black/60 hover:text-primary text-sm transition-colors"
                >
                  {t.nav.knowledge}
                </Link>
                <Link
                  to="/contacto"
                  className="block text-black/60 hover:text-primary text-sm transition-colors"
                >
                  {t.nav.contact}
                </Link>
              </nav>
            </div>

            {/* Connect Section */}
            <div>
              <h4 className="font-display font-semibold text-base text-black mb-4 uppercase tracking-wide">
                {t.footer.connect}
              </h4>
              <div className="space-y-4 mb-6">
                <a
                  href="https://www.linkedin.com/in/pedro-luis-gutierrez-contreras/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-black/60 hover:text-primary transition-colors group"
                >
                  <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <i className="fa-brands fa-linkedin text-primary"></i>
                  </div>
                  <span className="text-sm">LinkedIn</span>
                </a>
                <a
                  href="https://github.com/iampedroluis"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-black/60 hover:text-primary transition-colors group"
                >
                  <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <i className="fa-brands fa-github text-primary"></i>
                  </div>
                  <span className="text-sm">GitHub</span>
                </a>
                <a
                  href="mailto:pedroluisgutierrez.dev@gmail.com"
                  className="flex items-center gap-3 text-black/60 hover:text-primary transition-colors group"
                >
                  <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <i className="fa-solid fa-envelope text-primary"></i>
                  </div>
                  <span className="text-sm">Email</span>
                </a>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="pt-8 border-t border-black/10">
            <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
              <p className="text-black/50 text-xs">
                © 2025 Pedro Luis Gutierrez. {t.footer.rights}
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
