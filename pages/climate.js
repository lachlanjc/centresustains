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
    <Box as="section" bg="sunken">
      <Box as="header" p={[3, 4, 5]}>
        <Heading as="h2" variant="title" color="secondary">Roads</Heading>
      </Box>
      <Grid columns={[null, 3]} gap={[2, 3]}>
        <Image src="/photos/roads_2.jpg" alt="Panorama of winding road around mountain, frame 1" width={2336} height={3504} />
        <Image src="/photos/roads_1.jpg" alt="Panorama of winding road around mountain, frame 2" width={1912} height={2868} />
        <Image src="/photos/roads_3.jpg" alt="Panorama of winding road around mountain, frame 3" width={2336} height={3504} />
      </Grid>
    </Box>
    <Box as="section" bg="sunken">
      <Box as="header" p={[3, 4, 5]}>
        <Heading as="h2" variant="title" color="green">Forests</Heading>
      </Box>
      <Grid columns={[null, 3]} gap={[2, 3]}>
        <Image src="/photos/forest_spring.jpg" alt="Panorama of winding road around mountain, frame 1" width={1912} height={2868} />
        <Image src="/photos/forest_summer.jpg" alt="Panorama of winding road around mountain, frame 2" width={1912} height={2868} />
        <Image src="/photos/forest_fall.jpg" alt="Panorama of winding road around mountain, frame 3" width={1912} height={2868} />
      </Grid>
    </Box>
  </>
)

export default ClimatePage
