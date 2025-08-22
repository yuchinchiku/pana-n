/** @type {import('tailwindcss').Config} */
import aspectRatio from '@tailwindcss/aspect-ratio';

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./pages/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontSize: {
        '22px': '1.375rem',
        '32px': '2rem',
        '120px': '7.5rem',
        '160px': '10rem',
      },
      colors: {
        pana: {
          DEFAULT: '#1D1112',
          salmonPink: '#F093A0',
          pink: '#F3A3C5',
          lightPink: '#FEECF4',
          blueLagoon: '#00B0C7',
          blue: '#A2D9F3',
          lightBlue: '#E6F7FF',
          lightBlue: '#E6F7FF',
          gray01: '#8B8787',
          gray02: '#E9E9E9',
          gray03: '#F4F4F4',
          gray04: '#E1DDD7'
        },
      },
    },
  },
  plugins: [
    aspectRatio,
    function ({ addUtilities }) {
      addUtilities({
        '.writing-vertical': {
          writingMode: 'vertical-rl',
          textOrientation: 'upright',
        },
      });
    },
  ],
}