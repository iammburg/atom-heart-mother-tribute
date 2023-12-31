/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html"],
  theme: {
    container: {
      center: true,
      padding: "16px",
    },
    fontFamily: {
      dm_serif: ["DM Serif Display"],
      playfair: ["Playfair Display SC"],
      anon: ["Anonymous Pro"],
      raleway: ["Raleway"],
      folklore: ["Folklore", "sans"],
      sofia: ["Sofia", "sans"],
      poppins: ["Poppins", "sans"],
    },
    extend: {
      screens: {
        "2xl": "1320px",
      },
    },
  },
  plugins: [],
};
