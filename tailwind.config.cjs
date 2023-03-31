/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        homeImg1: "url('./src/assets/homeImage1.jpg')",
        homeImg2: "url('./src/assets/homeImage2.jpg')",
        homeImg3: "url('./src/assets/homeImage3.jpg')",
        homeImg4: "url('./src/assets/homeImage4.webp')",
        homeImg5: "url('./src/assets/homeImage5.webp')",
      },
      fontFamily: {
        arial: "Segoe UI, Tahoma, Geneva, Verdana, sans-serif",
        mono: "monospace",
      },
      colors: {
        pry: "#223b4d",
        info: "#0275d8",
      },
    },
  },
  plugins: [],
};
