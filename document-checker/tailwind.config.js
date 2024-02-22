/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgrouundImage: {
        readingMan: "url('./public/images/readingMan.jpg')",
      },
    },
  },
  plugins: [require("daisyui")],
};
