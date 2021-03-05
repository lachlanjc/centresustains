const withMDX = require('@next/mdx')()
module.exports = withMDX({
  pageExtensions: ['js', 'mdx'],
  async redirects() {
    return [
      {
        source: '/survey',
        destination: 'https://www.surveymonkey.com/r/CRPAplan',
        permanent: false
      },
      {
        source: '/survey.',
        destination: 'https://www.surveymonkey.com/r/CRPAplan',
        permanent: true
      },
      {
        source: '/card.jpg',
        destination: '/cards/default.jpg',
        permanent: true
      }
    ]
  }
})
