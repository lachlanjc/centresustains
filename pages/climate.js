import { Box, Text, Container, Grid, Heading } from 'theme-ui'
import Image from 'next/image'
import Photo from '../components/photo'
import BGImg from '../components/bg-img'

const ClimatePage = () => (
  <>
    <Box as="header" sx={{ position: 'relative', bg: 'secondary' }}>
      <BGImg src="/photos/fog.jpg" alt="Fog over a meadow with a sunlit tree" width={3072} height={2048} />
      <Container variant="copy" sx={{ pt: [5, 6], pb: [4, 5], textAlign: 'center', color: 'white', textShadow: 'text' }}>
        <Heading as="h1" variant="title" color="inherit">
          Climate in Central PA
        </Heading>
        <Text as="p" variant="lead">
          We’re already experiencing expensive changes in weather patterns in
          central Pennsylvania as a result of human-caused climate change.
        </Text>
      </Container>
    </Box>
    <Box as="section">
      <Box as="header" p={[3, 4, 5]}>
        <Heading as="h2" variant="title" color="green">Forests</Heading>
      </Box>
      <Grid columns={[null, 3]} gap={[2, 3]}>
        <Image src="/photos/forest_spring.jpg" alt="Panorama of winding road around mountain, frame 1" width={1912} height={2868} />
        <Image src="/photos/forest_summer.jpg" alt="Panorama of winding road around mountain, frame 2" width={1912} height={2868} />
        <Image src="/photos/forest_fall.jpg" alt="Panorama of winding road around mountain, frame 3" width={1912} height={2868} />
      </Grid>
    </Box>
    <Box as="section" bg="sunken">
      <Box as="header" p={[3, 4, 5]}>
        <Heading as="h2" variant="title" color="brown">Wildlife</Heading>
      </Box>
      <Image src="/photos/deer.jpg" alt="Deer crouching on the forest floor" width={3504} height={2336} />
    </Box>
    <Box as="section">
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
        <Heading as="h2" variant="title" color="yellow">Weather</Heading>
      </Box>
      <Image src="/photos/fog.jpg" alt="Fog over a meadow with a sunlit tree" width={3072} height={2048} />
    </Box>
    <Box as="section">
      <Box as="header" p={[3, 4, 5]}>
        <Heading as="h2" variant="title" color="azure">Water</Heading>
      </Box>
      <Grid columns={2} gap={[2, 4]}>
        <Image src="/photos/marsh.jpg" alt="Marsh with a small stream running through it" width={2048} height={3072} />
        <Image src="/photos/water.jpg" alt="Lily pads with a flower on the surface of still water" width={2048} height={3072} />
      </Grid>
    </Box>
    <Box as="section" bg="sunken">
      <Box as="header" p={[3, 4, 5]}>
        <Heading as="h2" variant="title" color="purple">Farms</Heading>
      </Box>
      <Image src="/photos/farms.jpg" alt="Happy Valley Farm" width={3072} height={2048} />
    </Box>
  </>
)

export default ClimatePage
