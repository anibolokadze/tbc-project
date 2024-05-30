/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        lightBlue: "#75b1f5",
        darkBlue: "#121316",
        darkGray: "#1E1F22",
        hoverDarkBlue: "#4461F2",
        darkMode: "#121212",
      },
      brightness: {
        60: ".60",
      },
      scale: {
        105: "1.05",
      },
    },
  },
  plugins: [],
  darkMode: "class",
};
