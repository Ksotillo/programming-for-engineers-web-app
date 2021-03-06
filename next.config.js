const withPWA = require('next-pwa')
const runtimeCaching = require('next-pwa/cache')
const prod = process.env.NODE_ENV === 'production'

module.exports = withPWA({
  pwa: {
    dest: 'public',
    runtimeCaching,
    disable: prod ? false : true,
  },
//   webpack(config, { dev }) {
//     if (dev) {
//       config.devtool = 'cheap-module-source-map';
//     }
//     return config;
//   }
})
