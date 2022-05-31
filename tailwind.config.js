const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    './public/*.{html,js}',
    './public/view/*.html',
    './src/**/*.{html,js}',
    './js/*.js'
  ],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['system-ui', ...defaultTheme.fontFamily.sans],
      },
    }
  },
  plugins: [],
}