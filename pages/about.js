import { Box, Text, Container, Grid, Heading } from 'theme-ui'
import Photo from '../components/photo'
import BGImg from '../components/bg-img'
import Content from '../components/about/content.mdx'

const AboutPage = () => (
  <>
    {/*
    <Box as="header" bg="card">
      <Container variant="copy" sx={{ pt: [5, 6], pb: [], textAlign: 'center' }}>
      </Container>
    </Box>
    */}
    <Container
      variant="story"
      as="article"
      sx={{
        h1: { color: 'pink' },
        ul: { fontSize: 2 }
      }}
    >
      <Content />
    </Container>
  </>
)

export default AboutPage
