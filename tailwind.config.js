const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      cxs: { min: "340px", max: "480px" },
      // => @media (min-width: 340px and max-width: 480px) { ... }

      csm: { min: " 481px", max: "600px" },
      // => @media (min-width: 481px and max-width: 600px) { ... }

      cmd: { min: "601px", max: "768px" },
      // => @media (min-width: 601px and max-width: 768px) { ... }

      clg: { min: "769px", max: "1024px" },
      // => @media (min-width: 769px and max-width: 1024px) { ... }

      cxl: { min: " 1025px", max: "1280px" },
      // => @media (min-width:  1025px and max-width: 1280px) { ... }

      c2xl: "1281px",
      // => @media (min-width: 1281px) { ... }
    },
    extend: {},
    fontFamily: {
      Inria: ["Inria Sans", "sans-serif"],
    },
    colors: {
      backcolor_top: "#2D3250",
      backcolor: "#262838",
      maincolor: "#7AB2D3",
    },
  },
  plugins: [],
});
