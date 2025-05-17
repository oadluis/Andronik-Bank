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
  plugins: [
    function ({ addUtilities }) {
      const newUtilities = {
        ".gradient-deposit": {
          "background-image":
            "linear-gradient(to top left, var(--tw-gradient-stops))",
          "--tw-gradient-from": "var(--deposit-start)",
          "--tw-gradient-to": "var(--deposit-end)",
        },
        ".gradient-withdrawal": {
          "background-image":
            "linear-gradient(to top left, var(--tw-gradient-stops))",
          "--tw-gradient-from": "var(--withdrawal-start)",
          "--tw-gradient-to": "var(--withdrawal-end)",
        },
      };
      addUtilities(newUtilities);
    },
  ],
};
