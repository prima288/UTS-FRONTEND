module.exports = {
  mode: "jit",
  content: [
    "./src/**/**/*.{js,ts,jsx,tsx,html,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,html,mdx}",
  ],
  darkMode: "class",
  theme: {
    screens: { md: { max: "1050px" }, sm: { max: "550px" } },
    extend: {
      colors: {
        yellow: { A400: "#fde617" },
        blue_gray: { 100: "#d9d9d9" },
        black: { 900: "#000000" },
        blue: { 500: "#2ca5d8" },
        white: { A700: "#ffffff" },
      },
      fontFamily: { inter: "Inter", cabin: "Cabin", syne: "Syne" },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
