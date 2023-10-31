/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens:{
        xxxs:'360px',
        XXS :"500px",

      }
    },
  },
  plugins: [],
}

