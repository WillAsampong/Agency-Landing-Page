/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        primary: '#4CAF4F',
        neutralGray: '#717171',
      },
    },
  },
  plugins: [],
}

