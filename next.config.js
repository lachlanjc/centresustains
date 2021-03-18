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
        source: '/forum/details',
        destination: 'https://pennstatelaw.psu.edu/events/forum-climate-impacts-centre-region',
        permanent: false
      },
      {
        source: '/forum/register',
        destination: 'https://pennstatelaw.psu.edu/form/addressing-climate-impacts-centre-region-registration',
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
