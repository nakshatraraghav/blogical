/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "bg-black": "#0c0c0c",
        "txt-white": "#e5e5e5",
        "jotai-green-light": "#0c746c",
        "jotai-green-dark": "#0a2725",
      },
    },
  },
  plugins: [],
};
