import { BrowserRouter, Route, Routes } from "react-router-dom";
import cv from "./cv/Pedro-Luis-Gutierrez-Front-End-DEV.pdf";

import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import AboutMe from "./pages/AboutMe";
import Proyectos from "./pages/Proyectos";
import Experiencias from "./pages/Experiencias";
import Conocimientos from "./pages/Conocimientos";
import Contacto from "./pages/Contacto";
import Footer from "./components/Footer";
function App() {
  return (
    <>
      <div className="dark:bg-blanco bg-dark">
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/yo" element={<AboutMe />} />
            <Route path="/proyectos" element={<Proyectos />} />
            <Route path="/experiencias" element={<Experiencias />} />
            <Route path="/conocimientos" element={<Conocimientos />} />
            <Route path="/contacto" element={<Contacto />} />
          </Routes>
          <Footer />
        </BrowserRouter>

        <a href={cv} target="_blank" className="btn-flotante">
          <i className="fa-regular fa-file-pdf"> CV</i>
        </a>
      </div>
    </>
  );
}

export default App;
