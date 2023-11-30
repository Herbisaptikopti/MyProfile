/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        ungu: "#4A3895",
        hijau: "#2F9073",
        kuning: "#FFA901",
      },

      height: {
        747: "747px",
      },
    },
  },
  plugins: [],
};
