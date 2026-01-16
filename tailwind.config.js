module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}', './index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    minHeight: {
      '0': '0',
      '1/4': '25%',
      '1/2': '50%',
      '3/4': '75%',
      full: '100%'
    },
    backgroundColor: theme => ({
      primary: '#3490dc',
      secondary: '#ffed4a',
      danger: '#e3342f',
      button_netflex_hover: '#e6e6e6',
      button_netflex: '#1f1e1e'
    }),
    extend: {
      backgroundImage: {
        'netflex-banner':
          'url("https://springboard-cdn.appadvice.com/wp-content/appadvice-v2-media/2016/11/Netflix-background_860c8ece6b34fb4f43af02255ca8f225-xl.jpg")'
        //'footer-texture': "url('/img/footer-texture.png')",
      }
    }
  },
  variants: {
    extend: {
      animation: ['motion-reduce'],
      transitionProperty: [
        'hover',
        'focus',
        'responsive',
        'motion-safe',
        'motion-reduce'
      ]
    }
  },
  plugins: []
}
