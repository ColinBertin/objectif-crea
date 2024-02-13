/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontSize: {
        sm: "0.8rem",
        base: "1rem",
        xl: "1.5rem",
        "2xl": "2.5rem",
        "3xl": "3rem",
        "4xl": "3.5rem",
        "5xl": "4rem",
      },
      colors: {
        pink: {
          400: "#dbd3d8",
        },
        gray: {
          200: "#A9A9A9",
          300: "#777",
          400: "#272a2d",
          500: "#24272A",
          600: "#5E5E5E",
          700: "#282A2D",
          800: "#212326",
        },
      },
    },
    screens: {
      sm: "640px",
      // => @media (min-width: 640px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }

      lg: "1024px",
      // => @media (min-width: 1024px) { ... }

      xl: "1280px",
      // => @media (min-width: 1280px) { ... }

      "2xl": "1536px",
      // => @media (min-width: 1536px) { ... }
    },
  },
  plugins: [],
};
