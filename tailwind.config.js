/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/pages/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        gabi: {
          bg: "#0B0A0E",
          panel: "#121019",
          border: "#2A2433",
          text: "#EDEAF2",
          muted: "#B6AFC4",
          plum: "#533E59",
          lavender: "#CCB1CD",
          amber: "#F4B942",
          orange: "#F08A4B",
          clay: "#C65D3B",
        },
      },
    },
  },
  plugins: [],
};
