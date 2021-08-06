module.exports = {
  purge: [
    './src/**/*.html',
    './src/**/*.js',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      spacing: {
        '37': '146.94px',
        '17': '72px'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
