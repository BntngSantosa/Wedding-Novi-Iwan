/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#EAC981",
        secondary: "#A3956D",
        third: "#DF7923",
        bColor: "#838383",
        akad: "#838383",
        loc: "#B3985D",
        gradOne: "#AF8730",
      },
    },
    fontFamily: {
      Playfair: "Playfair",
      Parisiene: "Parisiene",
      Inter: "Inter",
      Fredericka: "Fredericka",
      EBGaramond: "EB Garamond",
      DancingScript: "Dancing Script",
    },
  },
  plugins: [],
};
