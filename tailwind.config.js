/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {fontSize: {
      sm: '1rem',
      base: '1.5rem',
      xl: '2rem',
      "2xl": '4rem',
      "3xl": '6rem',
      "4xl": '8rem',
      "5xl": '10rem',
    }},
  },
  plugins: [],
}
