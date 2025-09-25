/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'bali-beige': '#FFF7ED', 
        'bali-green': '#2F4B26', 
        'bali-orange': '#FF8C42', 
      },
      fontFamily: {
        nav: ['Open Sans', 'sans-serif'],
      },

    },
  },
  plugins: [],
}

