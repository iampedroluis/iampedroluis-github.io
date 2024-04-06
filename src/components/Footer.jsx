import React from "react";

const Footer = () => {
  return (
    <footer className="text-gray-600 body-font">
      <div className="bg-gray-100">
        <div className="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
          <p className="text-gray-500 text-sm text-center sm:text-left">
            © 2024 PedroLuisGutierrez
            <a
              href="https://twitter.com/knyttneve"
              rel="noopener noreferrer"
              className="text-gray-600 ml-1"
              target="_blank"
            ></a>
          </p>
          <span className="inline-flex sm:ml-auto sm:mt-0 mt-2 mx-10 justify-center sm:justify-start">
            <a
              href="https://www.linkedin.com/in/pedro-luis-gutierrez-contreras/"
              target="_blank"
            >
              <i className="fa-brands fa-linkedin mx-10"></i>
            </a>
            <a href="https://github.com/iampedroluis" target="_blank">
              <i className="fa-brands fa-github"></i>
            </a>
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
