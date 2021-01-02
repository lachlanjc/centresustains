import { Box, Text, Container, Grid, Heading } from 'theme-ui'
import Image from 'next/image'
import Link from 'next/link'
import BGImg from '../components/bg-img'
import { Section, SectionHeader } from '../components/learn/section'

import EmissionsChart from '../components/inventory/emissions-chart'
import LandUseChart from '../components/inventory/land-use-chart'
import Footprint from '../components/inventory/footprint'
import TransitEmissions from '../components/inventory/transit-emissions'
import BuildingEmissions from '../components/inventory/building-emissions'

// import Wildlife from '../components/learn/wildlife.mdx'
// import Water from '../components/learn/water.mdx'
import Forests from '../components/learn/forests.mdx'
import Weather from '../components/learn/weather.mdx'
import Roads from '../components/learn/roads.mdx'
import Farms from '../components/learn/farms.mdx'

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
        <Heading as="h1" variant="ultratitle" color="inherit">
          Our climate in Central&nbsp;PA is changing, fast.
        </Heading>
        <Text as="p" variant="lead">
          We’re already experiencing expensive changes in weather patterns in
          central Pennsylvania as a result of human-caused climate change.
        </Text>
      </Container>
    </Box>
    <Section sx={{ py: [4, 5] }}>
      <Container
        as="header"
        variant="copy"
        sx={{ textAlign: 'center', a: { color: 'azure' } }}
      >
        <Heading as="h2" variant="title">
          Emissions breakdown
        </Heading>
        <Text as="p" variant="subtitle">
          Based on our{' '}
          <Link href="/progress">
            <a>2016 inventory</a>
          </Link>{' '}
          of local greenhouse gas emissions.
        </Text>
      </Container>
      <Grid
        columns={[null, '2fr 3fr']}
        gap={3}
        sx={{
          px: [3, 4, 5],
        }}
      >
        <EmissionsChart />
        <Heading as="h3" variant="headline" mb={0}>Local carbon footprint</Heading>
        <Footprint />
        <TransitEmissions />
        <BuildingEmissions />
      </Grid>
    </Section>
    <Section>
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
      <SectionHeader title="Forests" color="green" children={<Forests />} />
    </Section>
    {/* <Section>
      <SectionHeader title="Wildlife" color="brown" children={Wildlife} />
      <Image
        src="/photos/deer.jpg"
        alt="Deer crouching on the forest floor"
        width={3504}
        height={2336}
      />
    </Section> */}
    <Section>
      <Image
        src="/photos/fog.jpg"
        alt="Fog over a meadow with a sunlit tree"
        width={3072}
        height={2048}
      />
      <SectionHeader title="Weather" color="yellow" children={<Weather />} />
    </Section>
    <Section>
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
      <SectionHeader title="Roads" color="azure" children={<Roads />} />
    </Section>
    {/* <Section>
      <SectionHeader title="Water" color="azure" children={Water} />
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
    </Section> */}
    <Section>
      <Image
        src="/photos/farms.jpg"
        alt="Happy Valley Farm"
        width={3072}
        height={2048}
      />
      <SectionHeader title="Farms" color="purple" children={<Farms />} />
    </Section>
    <Grid columns={[null, 2]} gap={[2, 3]} pb={[4, 5]}>
      <Image
        src="/photos/leaves.jpg"
        alt="Leaves"
        width={2912}
        height={4368}
      />
      <Image
        src="/photos/tree_portrait.jpg"
        alt="Leaves"
        width={2912}
        height={4368}
      />
    </Grid>
  </>
)

export default ClimatePage
