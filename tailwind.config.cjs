/** @type {import('tailwindcss').Config} */
module.exports = {
  prefix: 'jk-',
  content: ['./index.html'],
  theme: {
    extend: {
      fontFamily: {
        display: 'Poppins, sans-serif',
      },
      colors: {
        'onda-primary': '#254e14',
      },
    },
  },
  plugins: [],
};
