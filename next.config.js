const withMDX = require('@next/mdx')()
module.exports = withMDX({
  pageExtensions: ['js', 'mdx'],
  async redirects() {
    return [
      {
        source: '/survey',
        destination: '/',
        permanent: false
      },
      {
        source: '/survey.',
        destination: '/',
        permanent: true
      },
      {
        source: '/forum-details',
        destination: '/forum',
        permanent: false
      },
      {
        source: '/forum-register',
        destination: '/forum',
        permanent: false
      },
      {
        source: '/card.jpg',
        destination: '/cards/default.jpg',
        permanent: true
      }
    ]
  }
})
