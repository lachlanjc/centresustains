import { Box, Container } from 'theme-ui'
import Content from './footer.mdx'

const Footer = () => (
  <Box
    as="footer"
    sx={{
      py: 3,
      bg: 'sunken'
    }}
  >
    <Container
      variant="narrow"
      sx={{
        color: 'muted',
        textAlign: 'center',
        ul: {
          p: 0,
          listStyle: 'none',
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'center'
        },
        li: {
          my: 1,
          pl: 2,
          '+ li::before': { content: '"|"', pr: 2 },
        },
        a: {
          color: 'secondary',
          textUnderlinePosition: 'under'
        }
      }}
    >
      <Content />
    </Container>
  </Box>
)

export default Footer
