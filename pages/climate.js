import { Box, Text, Container, Grid, Heading, Image as Img } from 'theme-ui'
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
        src="/photos/overlook_fall.jpg"
        alt="Overlook of Centre County forest in the fall"
        width={3504}
        height={2336}
        gradient="rgba(0,0,0,0.125), rgba(0,0,0,.25)"
        loading="eager"
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
          We’re already experiencing <strong>expensive changes in weather patterns</strong> in
          central Pennsylvania as a result of human-caused climate change.
        </Text>
      </Container>
    </Box>
    <Section sx={{ py: 5 }}>
      <Container
        as="header"
        variant="copy"
        sx={{ textAlign: [null, 'center'], a: { color: 'green' } }}
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
        variant="layout.container"
        columns={[null, null, 2]}
        gap={3}
        sx={{
          alignItems: 'center',
          h3: { gridColumn: [null, null, 'span 2'] }
        }}
      >
        <Heading as="h3" variant="headline" mb={0}>Local carbon footprint</Heading>
        <Footprint />
        <Heading as="h3" variant="headline" mb={0}>Emissions by sector</Heading>
        <EmissionsChart />
        <Grid columns={[null, 2]} sx={{ pt: [null, null, 4], gridColumnGap: 4 }}>
          <TransitEmissions />
          <BuildingEmissions />
        </Grid>
        <Heading as="h3" variant="headline" mt={4} mb={0}>Local land use</Heading>
        <LandUseChart />
      </Grid>
    </Section>
    <Section>
      <Grid columns={3} gap={[1, 3]} sx={{ div: { minHeight: 300 } }}>
        <Image
          src="/photos/forest_spring.jpg"
          alt="Panorama of winding road around mountain, frame 1"
          width={1912}
          height={2868}
          objectFit="cover"
          layout="responsive"
        />
        <Image
          src="/photos/forest_summer.jpg"
          alt="Panorama of winding road around mountain, frame 2"
          width={1912}
          height={2868}
          objectFit="cover"
          layout="responsive"
        />
        <Image
          src="/photos/forest_fall.jpg"
          alt="Panorama of winding road around mountain, frame 3"
          width={1912}
          height={2868}
          objectFit="cover"
          layout="responsive"
        />
      </Grid>
      <SectionHeader title="Forests" color="green" children={<Forests />} />
    </Section>
    <Section>
      <Image
        src="/photos/fog.jpg"
        alt="Fog over a meadow with a sunlit tree"
        width={3072}
        height={2048}
        layout="responsive"
      />
      <SectionHeader title="Weather" color="yellow" children={<Weather />} />
    </Section>
    <Section>
      <Grid columns={3} gap={[1, 3]} sx={{ div: { minHeight: 300 } }}>
        <Image
          src="/photos/roads_2.jpg"
          alt="Panorama of winding road around mountain, frame 1"
          width={2336}
          height={3504}
          objectFit="cover"
          layout="responsive"
        />
        <Image
          src="/photos/roads_1.jpg"
          alt="Panorama of winding road around mountain, frame 2"
          width={1912}
          height={2868}
          objectFit="cover"
          layout="responsive"
        />
        <Image
          src="/photos/roads_3.jpg"
          alt="Panorama of winding road around mountain, frame 3"
          width={2336}
          height={3504}
          objectFit="cover"
          layout="responsive"
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
        layout="responsive"
      />
      <SectionHeader title="Farms" color="purple" children={<Farms />} />
      <Grid columns={2} gap={[1, 3]} sx={{ div: { minHeight: 300 } }}>
        <Image
          src="/photos/leaves.jpg"
          alt="Leaves"
          width={2912}
          height={4368}
          objectFit="cover"
          layout="responsive"
        />
        <Image
          src="/photos/tree_portrait.jpg"
          alt="Leaves"
          width={2912}
          height={4368}
          objectFit="cover"
          layout="responsive"
        />
      </Grid>
    </Section>
  </>
)

export default ClimatePage
