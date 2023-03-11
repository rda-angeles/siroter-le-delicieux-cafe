/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "c-primary": "#2C3639",
        "c-secondary": "#C5A880",
        "c-tertiary": "#A27B5C",
        "c-quarternary": "#DCD7C9",
        "c-quinary": "#3C2A21",
      },

      fontFamily: {
        "f-primary": "'Lora', serif;",
        "f-secondary": "Montserrat , sans-serif",
      },
    },
  },
  plugins: [],
};
