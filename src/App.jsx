import { HashRouter, Route, Routes, useLocation } from "react-router-dom";
import { useEffect } from "react";
import cv from "./cv/QA-AUTOMATION_Pedro-Luis-Gutierrez_CV.pdf";

import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import AboutMe from "./pages/AboutMe";
import Proyectos from "./pages/Proyectos";
import Experiencias from "./pages/Experiencias";
import Conocimientos from "./pages/Conocimientos";
import Contacto from "./pages/Contacto";
import Footer from "./components/Footer";
import { NotFound } from "./pages/NotFound";
import { LanguageProvider } from "./contexts/LanguageContext";

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function App() {
  return (
    <>
      <LanguageProvider>
        <div className="bg-white app-container min-h-screen">
          <HashRouter>
            <ScrollToTop />
            <Navbar />
            <main className="relative">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/sobre-mi" element={<AboutMe />} />
                <Route path="/proyectos" element={<Proyectos />} />
                <Route path="/experiencias" element={<Experiencias />} />
                <Route path="/conocimientos" element={<Conocimientos />} />
                <Route path="/contacto" element={<Contacto />} />
                <Route element={<NotFound />} path="*" />
              </Routes>
            </main>
            <Footer />
          </HashRouter>

          <a
            href={cv}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-flotante group"
            aria-label="Descargar CV"
          >
            <i className="fa-regular fa-file-pdf mr-2"></i>
            <span className="hidden sm:inline">CV</span>
          </a>
        </div>
      </LanguageProvider>
    </>
  );
}

export default App;
