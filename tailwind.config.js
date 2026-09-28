/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        iiti: {
          navy: '#0f2a4a',
          blue: '#003366',
          gold: '#d4af37',
          lightBlue: '#1e40af',
          bgSky: '#f0f4f8'
        }
      }
    },
  },
  plugins: [],
}