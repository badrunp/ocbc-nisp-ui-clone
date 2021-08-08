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
        '17': '72px',
        '97': '400px'
      }
    },
  },
  variants: {
    extend: {
      display: ['group-hover', 'hover'],
      width: ['group-hover', 'hover'],
      height: ['group-hover', 'hover'],
      transform: ['group-hover', 'hover'],
      translate: ['hover', 'group-hover'],
      scale: ['hover', 'group-hover'],
      visibility: ['hover', 'group-hover']
    },
  },
  plugins: [
  ],
}
