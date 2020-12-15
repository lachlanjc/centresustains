import { Box, Text, Container, Grid, Heading } from 'theme-ui'
import Image from 'next/image'
import Photo from '../components/photo'
import BGImg from '../components/bg-img'

const ClimatePage = () => (
  <>
    <Box as="header" sx={{ position: 'relative' }}>
      <Container variant="copy" sx={{ py: 4, textAlign: 'center' }}>
        <Heading as="h1" variant="title">
          Climate in Central PA
        </Heading>
        <Text as="p" variant="lead">
          We’re already experiencing expensive changes in weather patterns in
          central Pennsylvania as a result of human-caused climate change.
        </Text>
      </Container>
    </Box>
  </>
)

export default ClimatePage
