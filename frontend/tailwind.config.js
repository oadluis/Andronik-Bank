/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "deposit-start": "#39b385",
        "deposit-end": "#9be15d",
        "withdrawal-start": "#e52a5a",
        "withdrawal-end": "#ff585f",
      },
    },
  },
  plugins: [],
};
