const withMDX = require('@next/mdx')()
module.exports = withMDX({
  pageExtensions: ['js', 'mdx'],
  async redirects() {
    return [
      {
        source: '/card.jpg',
        destination: '/cards/default.jpg'
      }
    ]
  }
})
