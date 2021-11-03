const colors = require('tailwindcss/colors')
module.exports = {
  mode: 'jit',
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: 'media',
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      gray: colors.gray
    }
  },
  variants: {
    extend: {}
  },
  plugins: []
}
