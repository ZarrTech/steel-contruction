/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundColor: {
        bgsColor: "var(--secondary-color)",
        bgpColor: "var(--primary-color)",
      },
      colors: {
        "icon-color": "var(--icon-rgb)",
        textColor: "var(--textPrimary-color)",
      },
      fontSize: {
        smallFont: "var(--fontSize-small)",
        mediumFont: "var(--fontSize-medium)",
        bigFont: "var(--fontSize-big)",
      },
      fontFamily: {
        font: "var(--fontFamily-thin)",
      },
    },
  },
  plugins: [require("daisyui")],
};
