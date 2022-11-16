/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "cust-pink": "#db3eb1",
      },
      dropShadow: {
        "3xl": ["0 0 15px rgb(219, 62, 177)", "0 0 50px rgb(219, 62, 177)"],
        "4xl": ["0 0 20px rgb(219, 62, 177)"],
        "5xl": ["0 0 15px rgb(250, 204, 20)", "0 0 50px rgb(250, 204, 20)"],
      },
      backgroundImage: {
        landscape: "url('/src/img_equalgame/background-game.gif')",
      },
      fontFamily: {
        Bungee: ["Bungee", "cursive"],
        BungeeInline: ["Bungee Inline", "cursive"],
        BungeeShade: ["Bungee Shade", "serif"],
        Nabla: ["Nabla", "sans-serif"],
      },
    },
  },
  plugins: [],
};
