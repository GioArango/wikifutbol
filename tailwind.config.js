const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    './public/*.{html,js}',
    './public/view/*.{html,js}'
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