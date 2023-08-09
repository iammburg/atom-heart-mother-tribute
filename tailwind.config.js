/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html"],
  theme: {
    container: {
      center: true,
      padding: "16px",
    },
    fontFamily: {
      ultra: ["Ultra"],
      dm_serif: ["DM Serif Display"],
      playfair: ["Playfair Display SC"],
      anon: ["Anonymous Pro"],
      josefin: ["Josefin Sans:wght@600"],
    },
    extend: {
      screens: {
        "2xl": "1320px",
      },
    },
  },
  plugins: [],
};