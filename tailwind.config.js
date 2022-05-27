const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    "./public/*.html"
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