/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        "lexend-deca": ['Lexend Deca', 'sans-serif'],
        "space-mono": ['Space Mono', 'monospace'],
      },
      colors: {
        "yellow-scoot": "#FCB72B",
        "dark-navy": "#495567",
        "dark-strong": "#333A44"
      },
      backgroundImage:{
        "hero-mobile": "url('./assets/images/home-hero-mobile.jpg')",
        "hero-desktop": "url('./assets/images/home-hero-desktop.jpg')",
        "hero-tablet": "url('./assets/images/home-hero-tablet.jpg')"
      },
    },
  },
  plugins: [],
}

