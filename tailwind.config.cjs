// tailwind.config.cjs
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: "#14b8a6", // teal-500
          light: "#5eead4",   // teal-300
          dark: "#0f766e",    // teal-700
        },
      },
    },
  },
  plugins: [],
};