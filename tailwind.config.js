/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        sen: ["Sen", "sans-serif"],
        inter: "inter",
      },

      boxShadow: {
        "custom-shadow": "0px 24px 90px 0px rgba(192, 188, 161, 0.22)",
      },
    },
  },
  plugins: [],
};
