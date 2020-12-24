import { Box, Text, Container, Grid, Heading } from 'theme-ui'
import Image from 'next/image'
import BGImg from '../components/bg-img'

const Section = props => (
  <Box
    as="section"
    {...props}
    sx={{ ':nth-of-type(even)': { bg: 'card' }, ...props.sx }}
  />
)
const SectionHeader = ({ color, title, subtitle, ...props }) => (
  <Box
    as="header"
    {...props}
    id={title.toLowerCase()}
    sx={{ p: [4, 5], ...props.sx }}
  >
    <Heading as="h2" variant="title" color={color}>
      {title}
    </Heading>
    {subtitle && <Text as="p" variant="subtitle">
      {subtitle}
    </Text>}
  </Box>
)

const ClimatePage = () => (
  <>
    <Box as="header" sx={{ position: 'relative', bg: 'muted' }}>
      <BGImg
        src="/photos/fog.jpg"
        alt="Fog over a meadow with a sunlit tree"
        width={3072}
        height={2048}
      />
      <Container
        variant="copy"
        sx={{
          pt: 6,
          pb: [4, 5],
          textAlign: 'center',
          color: 'white',
          textShadow: 'text'
        }}
      >
        <Heading as="h1" variant="title" color="inherit">
          Climate in Central&nbsp;PA
        </Heading>
        <Text as="p" variant="lead">
          We’re already experiencing expensive changes in weather patterns in
          central Pennsylvania as a result of human-caused climate change.
        </Text>
      </Container>
    </Box>
    <Section>
      <SectionHeader title="Forests" color="green" />
      <Grid columns={[null, 3]} gap={[2, 3]}>
        <Image
          src="/photos/forest_spring.jpg"
          alt="Panorama of winding road around mountain, frame 1"
          width={1912}
          height={2868}
        />
        <Image
          src="/photos/forest_summer.jpg"
          alt="Panorama of winding road around mountain, frame 2"
          width={1912}
          height={2868}
        />
        <Image
          src="/photos/forest_fall.jpg"
          alt="Panorama of winding road around mountain, frame 3"
          width={1912}
          height={2868}
        />
      </Grid>
    </Section>
    <Section>
      <SectionHeader title="Wildlife" color="brown" />
      <Image
        src="/photos/deer.jpg"
        alt="Deer crouching on the forest floor"
        width={3504}
        height={2336}
      />
    </Section>
    <Section>
      <SectionHeader title="Roads" color="secondary" />
      <Grid columns={[null, 3]} gap={[2, 3]}>
        <Image
          src="/photos/roads_2.jpg"
          alt="Panorama of winding road around mountain, frame 1"
          width={2336}
          height={3504}
        />
        <Image
          src="/photos/roads_1.jpg"
          alt="Panorama of winding road around mountain, frame 2"
          width={1912}
          height={2868}
        />
        <Image
          src="/photos/roads_3.jpg"
          alt="Panorama of winding road around mountain, frame 3"
          width={2336}
          height={3504}
        />
      </Grid>
    </Section>
    <Section>
      <SectionHeader title="Weather" color="yellow" />
      <Image
        src="/photos/fog.jpg"
        alt="Fog over a meadow with a sunlit tree"
        width={3072}
        height={2048}
      />
    </Section>
    <Section>
      <SectionHeader title="Water" color="azure" />
      <Grid columns={2} gap={[2, 4]}>
        <Image
          src="/photos/marsh.jpg"
          alt="Marsh with a small stream running through it"
          width={2048}
          height={3072}
        />
        <Image
          src="/photos/water.jpg"
          alt="Lily pads with a flower on the surface of still water"
          width={2048}
          height={3072}
        />
      </Grid>
    </Section>
    <Section>
      <SectionHeader title="Farms" color="purple" />
      <Image
        src="/photos/farms.jpg"
        alt="Happy Valley Farm"
        width={3072}
        height={2048}
      />
    </Section>
  </>
)

export default ClimatePage
