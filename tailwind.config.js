/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        white: "#ffffff",
        light: "#fff1f2",
        bg: "#ffe4e6",
        darkbg: "#881337",
        dark: "#4c0519",

        focusBtn: "#fda4af", //rose-300
        btn: "#be123c", //rose-700
        hoverBtn: "#9f1239", //rose-800
        darkBtn: "#e11d48", //rose-600
      },
    },
  },
  plugins: [require("flowbite/plugin"), require("tailwind-scrollbar")],
};
