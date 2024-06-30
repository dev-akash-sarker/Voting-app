/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      xs: "320px",
      sm: "576px",
      md: "768px",
      lg: "992px",
      xl: "1200px",
      xl2: "1400px",
      xl3: "1600px",
    },
    color: {
      primary_border_color: "var(--primary-border-color)",
    },
    fontFamily: {
      GilroyNormal: ["Gilroy regular"],
      GilroyMedium: ["Gilroy medium"],
      GilroyBold: ["Gilroy bold"],
      GilroyLight: ["Gilroy light"],
      GilroySemiBold: ["Gilroy semibold"],
      GilroyExtraBold: ["Gilroy extrabold"],
    },
    extend: {},
  },
  plugins: [],
};
