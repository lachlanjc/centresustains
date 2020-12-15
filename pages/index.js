import { Box, Container, Heading, Text } from 'theme-ui'
import About from '../components/about.mdx'
import Nav from '../components/nav'
import CTA from '../components/cta'

const HomePage = () => (
  <>
    <Nav />
    <Box as="section" sx={{ bg: 'sheet', py: [4, 5] }}>
      <Container
        sx={{
          position: 'relative',
          strong: { color: 'accent' },
          '> p': { fontSize: [2, 3], maxWidth: 'copyPlus', my: [2, 3] }
        }}
      >
        <About />
      </Container>
    </Box>
    <Container
      id="projects"
      as="article"
      sx={{ py: [3, 4], mt: [3, 4], mb: [5, 6] }}
    >
      <Heading sx={{ variant: 'text.title', fontSize: [4, 5] }}>
        Highlighted projects
      </Heading>
      <Text sx={{ fontSize: [2, 3], my: [3, 4], maxWidth: 'copyPlus' }}></Text>
      <CTA
        primary={['/judges', 'Meet the judges']}
        secondary={['/projects', 'See all projects']}
        sx={{ mt: [3, 4] }}
      />
    </Container>
  </>
)

export default HomePage
