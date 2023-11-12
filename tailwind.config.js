/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'theme-dark-orange' : '#D87D4A',
        'theme-slightly-lighter-black' : '#101010',
        'theme-light-grey' : '#F1F1F1',
        'theme-grayish-white' : '#FAFAFA',
        'theme-light-orange' : '#FBAF85',

        'theme-grayish-black' : '#4C4C4C',
      },
      fontFamily: {
        'theme-manrope': ['Manrope', 'sans-serif'], 
      },
    },
  },
  plugins: [],
}

