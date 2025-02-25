/** @type {import('tailwindcss').Config}*/
module.exports = {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      // Видаліть md2 звідси
      screens: {
        "2xl": "1535px",
        xl: "1279px",
        lg: "1181px",
        sm: "639px",
        md: "767px",
      },
      maxWidth: "100%",
    },

    screens: {
      "2xl": { max: "1535px" },
      xl: { max: "1279px" },
      lg: { max: "1181px" },
      md: { max: "767px" },
      sm: { max: "639px" },
      exsm: { max: "380px" },
      // Додайте новий брейкпойнт тут
      md2: { max: "992px" }, // тепер це правильно
    },
    extend: {
      colors: {
        "text-yellow-500": "#ffc312",
      },
    },
  },
  plugins: [],
};
