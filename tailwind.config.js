/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        landscape: "url('/src/img_equalgame/landscape.png')",
      },
    },
  },
  plugins: [],
};
