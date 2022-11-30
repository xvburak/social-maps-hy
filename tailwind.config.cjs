/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    fontSize: {
      'xs': ['0.8rem', {
        lineHeight: '1.25rem'
      }],
      's': ['1rem', {
        lineHeight: '1.45rem'
      }],
      'm': ['1.66rem', {
        lineHeight: '1.66rem'
      }],
      'l': ['2.66rem', {
        lineHeight: '2.66rem'
      }],
    },
    extend: {
      backgroundImage: {
        'hero-pattern': "url('./Background_Mapa.png')"
      },
      colors: {
        'white':'#FFFFFF',
        'gray': '#BDBDBD',
        'black': '#4F4F4F',
        'blue': '#2D9CDB',
        'purple': '#9B51E0',
        'yellow': '#F2C94C',
        'green': '#3ED20B',
        'red': '#EB5757',
        'offwhite': '#F5F5F5'
      },
    },
  },
  plugins: [],
}
