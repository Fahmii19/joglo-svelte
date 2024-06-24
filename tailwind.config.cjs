const config = {
  content: [
    "./src/**/*.{html,js,svelte,ts}",
    "./node_modules/flowbite-svelte/**/*.{html,js,svelte,ts}",
  ],

  plugins: [require("flowbite/plugin")],

  darkMode: "class",

  theme: {
    screens: {
      xs: "320px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
    },
    extend: {
      colors: {
        "custom-blue": "#0394F7",
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
      fontFamily: {
        lobster: ['"Lobster"'],
        sf_pro_reguler: ["Font SF-Pro reguler"],
        sf_pro_bold: ["Font SF-Pro bold"],
        sf_pro_reguler_new: ["Font SF-Pro-Text-Regular"],
        sf_pro_bold_new: ["Font SF-Pro-Text-Bold-Italic"],
        sf_pro_bold_judul_new: ["Font SF-Pro-Text-Bold"],
        sf_pro_medium: ["Font SF-Pro medium"],
        recoleta: ["Font Recoleta"],
        grajon: ["Font Grajon"],
        grajon_bold: ["Font Grajon Bold"],
      },
    },
  },
};

module.exports = config;
