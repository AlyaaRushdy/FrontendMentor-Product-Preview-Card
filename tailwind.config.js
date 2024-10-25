/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.html"],
  theme: {
    extend: {
      colors: {
        Dark_cyan: "hsl(158, 36%, 37%)",
        Cream: "hsl(30, 38%, 92%)",
        Very_dark_blue: "hsl(212, 21%, 14%)",
        Dark_grayish_blue: "hsl(228, 12%, 48%)",
      },
      fontFamily: {
        headings: ["Fraunces", "serif"],
        body: ["Montserrat", "serif"],
      },
    },
  },
  plugins: [],
};
