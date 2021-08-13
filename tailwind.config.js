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
        '97': '400px',
        '800': '800px',
        '916': '916px',
        '660': '660px'
      },
      transitionDelay: {
        '125': '125ms',
        '175': '175ms',
        '225': '225ms',
        '250': '250ms',
        '275': '275ms',
        '325': '325ms',
        '350': '350ms',
        '375': '375ms',
        '425': '425ms',
        '450': '450ms',
        '474': '475ms',
        '550': '550ms',
        '800': '800ms',
        '900': '900ms',

      },
      rotate: {
        '230': '230deg',
        '130': '130deg',
        '-130': '-130deg'
      },
      scale: {
        '102': '1.02',
        '130': '1.3',
        '135': '1.35',
        '145': '1.45',
        '160': '1.6',
        '170': '1.7',
        '190': '1.9',
        '200': '2',
        '202': '2.02',
        '210': '2.1',
        '220': '2.2',
        '230': '2.3',
      },
      transitionDuration: {
        '230': '230ms',
        '3000': '3000ms',
        '2500': '2500ms',
        '2000': '2000ms'
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
