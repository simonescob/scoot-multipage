/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    fontFamily: {
      "lexend-deca": ['Lexend Deca', 'sans-serif'],
      "space-mono": ['Space Mono', 'monospace'],
    },
    colors: {
      "yellow-scoot": "#FCB72B"
    }
  },
  plugins: [],
}

