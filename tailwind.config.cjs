/** @type {import('tailwindcss').Config} */
module.exports = {
  prefix: 'jk-',
  content: ['./index.html'],
  theme: {
    extend: {
      fontFamily: {
        poppins: 'Poppins, sans-serif',
        roboto: 'Roboto Condensed, sans-serif',
      },
      colors: {
        'onda-primary': '#254e14',
      },
    },
  },
  plugins: [],
};
