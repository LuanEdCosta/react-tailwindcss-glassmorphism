const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false,
  theme: {
    fontFamily: {
      sans: ['Ubuntu', ...defaultTheme.fontFamily.sans],
    },
    extend: {
      backgroundImage: () => ({
        'app-background': "url('./Assets/Background.png')",
      })
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
