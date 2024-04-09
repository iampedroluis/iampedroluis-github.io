/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{html,js}",
    "./components/**/*.{html,js}",
  ],
  darkMode: "selector",
  theme: {
    extend: {
      colors: {
        secondary: "#8C52FF",
        blanco: "#F4F4F5",
        dark: "#0F0F0F",
        gris: "##999999",
      },
    },
  },

  plugins: [require("daisyui")],
};
