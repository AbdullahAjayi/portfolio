/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  theme: {
    fontFamily: {
      sans: [
        "Segoe UI",
        "Segoe UI Emoji",
        "Segoe UI Symbol",
        "system-ui",
        "Roboto",
      ],
    },
    screens: {
      sm: "425px",
      md: "768px",
      lg: "1024px",
      xl: "1440px",
    },
    extend: {
      colors: {
        blue: {
          // light: "#0F172A",
          DEFAULT: "#05082D",
          // dark: "#020204",
        },
      },

      spacing: {
        30: "30px",
        210: "210px",
        300: "300px",
        400: "400px",
        500: "500px",
        600: "600px",
        700: "700px",
        // "60vw": "60vw",
      },
    },
  },
  plugins: [],
};
