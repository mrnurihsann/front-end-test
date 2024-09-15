/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        bluecustom: "#5575A5",
        yellowcustom: "#FFD409",
      },
    },
  },
  plugins: [],
};
