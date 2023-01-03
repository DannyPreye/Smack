/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    // eslint-disable-next-line quotes
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
    // eslint-disable-next-line quotes, comma-dangle
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    // eslint-disable-next-line comma-dangle
    extend: {
      fontFamily: {
        ultra: ["Ultra", "serif"],
        nunito: ["Nunito", "sans-serif"],
      },
    },
  },
  // eslint-disable-next-line comma-dangle
  plugins: [],
  // eslint-disable-next-line semi
};
