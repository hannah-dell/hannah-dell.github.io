/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html",
  ],
  theme: {
    extend: {
      colors: {
        headingYellow: "#ffc233",
        hoverYellow: "#ffb300",
        navbarBackground: "#212529"
      },
    },
  },
  plugins: [],
};