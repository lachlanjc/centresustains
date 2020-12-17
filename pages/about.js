import { Box, Text, Container, Grid, Heading, BaseStyles } from 'theme-ui'
import Photo from '../components/photo'
import BGImg from '../components/bg-img'
import Content from '../components/about/content.mdx'

const ClimatePage = () => (
  <>
    {/*
    <Box as="header" bg="card">
      <Container variant="copy" sx={{ pt: [5, 6], pb: [], textAlign: 'center' }}>
      </Container>
    </Box>
    */}
    <Container variant="copy" as={BaseStyles} sx={{ pt: [5, 6], fontSize: 2, ul: { fontSize: 2 }, '> p:first-of-type': { variant: 'text.lead' } }}>
      <Heading as="h1" variant="title" color="pink" pb={3}>
        About us
      </Heading>
      <Content />
    </Container>
  </>
)

export default ClimatePage
