/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", // Include your source files
  ],
  theme: {
    extend: {
      colors: {
        purple: "#801529",
        red: "#E74111",
        cream: "#EFECD9",
      },
      fontFamily: {
        myFont: ["ABC", "sans-serif"],
      },
    },
  },
  plugins: [],
};
