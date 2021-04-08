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
        source: '/forum-details',
        destination: '/forum',
        permanent: false
      },
      {
        source: '/forum-register',
        destination:
          'https://psu.zoom.us/meeting/register/tJ0ucO2orz0uG9YAUgxYrSyKxkoOUfUUlgjS',
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
