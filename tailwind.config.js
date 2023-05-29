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
        "dark-strong": "#333A44",
        "dim-grey": "#939CAA",
        "light-grey": "#E5ECF4",
        "snow-scoot": "#F2F5F9",
        "light-yellow": "#FFF4DF",
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

