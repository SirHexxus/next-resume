const withPWA = require('next-pwa');
const debug = process.env.NODE_ENV !== 'production';

module.exports = withPWA({
  pwa: {
    disable: process.env.NODE_ENV === 'development',
    dest: 'public'
  },
  images: {
    domains: ['media-exp1.licdn.com', 'www.leftcoastscales.net']
  },
  assetPrefix: !debug ? '/next-resume/' : ''
});
