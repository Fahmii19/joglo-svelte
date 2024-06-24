/** @type {import('tailwindcss').Config}*/
const config = {
  content: [
    "./src/**/*.{html,js,svelte,ts}",
    "./node_modules/flowbite-svelte/**/*.{html,js,svelte,ts}",
  ],

  theme: {
    extend: {
      colors: {
        // flowbite-svelte
        primary: {
          50: "#FFF5F2",
          100: "#FFF1EE",
          200: "#FFE4DE",
          300: "#FFD5CC",
          400: "#FFBCAD",
          500: "#FE795D",
          600: "#EF562F",
          700: "#EB4F27",
          800: "#CC4522",
          900: "#A5371B",
        },
      },
      screens: {
        xs: "320px",
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
      },
      fontFamily: {
        lobster: ['"Lobster"'],
        instagram_reguler: ["Font Instagram reguler"],
        instagram_bold: ["Font Instagram bold"],
        instagram_medium: ["Font Instagram medium"],
        sf_pro_reguler: ["Font SF-Pro-Text-Regular"],
        sf_pro_bold: ["Font SF-Pro-Text-Bold-Italic"],
        sf_pro_bold_judul: ["Font SF-Pro-Text-Bold"],
      },
    },
  },

  plugins: [require("flowbite/plugin")],
};

module.exports = config;
