/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html'],
  theme: {
    extend: {
      fontFamily: {
        display: 'Poppins, sans-serif',
      },
      backgroundImage: {
        'hero-banner': 'url(/assets/banner-desktop-compressed.jpg)',
      },
    },
  },
  plugins: [],
};
