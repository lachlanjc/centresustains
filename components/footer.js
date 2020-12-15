import { Box, Container } from 'theme-ui'
import Content from './footer.mdx'

const Footer = () => (
  <Box
    as="footer"
    sx={{
      py: 4,
      bg: 'sunken',
      color: 'secondary',
    }}
  >
    <Container
      variant="narrow"
      sx={{
      textAlign: 'center',
        p: { mt: 3 },
        a: { color: 'primary' }
      }}
    >
      <Content />
    </Container>
  </Box>
)

export default Footer
