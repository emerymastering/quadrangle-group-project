/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        landscape: "url('/src/img_crossgame/landscape.png')",
      },
    },
  },
  plugins: [],
};
