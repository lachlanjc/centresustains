import { Box, Text, Container, Grid, Heading } from 'theme-ui'
import Image from 'next/image'
import BGImg from '../components/bg-img'
import Meta from '../components/meta'
import { Section, SectionHeader } from '../components/learn/section'

import EmissionsChart from '../components/inventory/emissions-chart'
import Footprint from '../components/inventory/footprint'
import TransitEmissions from '../components/inventory/transit-emissions'
import BuildingEmissions from '../components/inventory/building-emissions'
import Reports from '../components/inventory/reports'

import Forests from '../components/learn/forests.mdx'
import Weather from '../components/learn/weather.mdx'
import Roads from '../components/learn/roads.mdx'
import Farms from '../components/learn/farms.mdx'

const ClimatePage = () => (
  <>
    <Meta
      title="Central PA Climate Change"
      description="Learn about how climate change is affecting State College & all of Pennsylvania, and explore our breakdown of local carbon emissions."
    />
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
          'h1, p': {
            textAlign: 'center',
            color: 'white',
            textShadow: 'text'
          }
        }}
      >
        <Heading as="h1" variant="ultratitle">
          Our climate in Central&nbsp;PA is changing, fast.
        </Heading>
        <Text as="p" variant="lead">
          We’re already experiencing{' '}
          <strong>costly changes in weather patterns</strong> in&nbsp;central
          Pennsylvania as a result of human-caused climate change.
        </Text>
      </Container>
    </Box>
    <Section sx={{ py: 5 }}>
      <Container>
        <Heading as="h2" variant="title">
          Emissions breakdown
        </Heading>
        <Text as="p" variant="subtitle">
          Based on our 2016 inventory of local greenhouse gas emissions.
        </Text>
        <Grid
          columns={[null, null, 2]}
          gap={3}
          sx={{
            alignItems: 'center',
            pb: 3,
            h3: { gridColumn: [null, null, 'span 2'], mb: 0 }
          }}
        >
          <Heading as="h3" variant="headline">
            Local carbon footprint
          </Heading>
          <Footprint />
          <Heading as="h3" variant="headline">
            Emissions by sector
          </Heading>
          <EmissionsChart />
          <Grid
            columns={[null, 2]}
            sx={{ pt: [null, null, 4], gridColumnGap: 4 }}
          >
            <TransitEmissions />
            <BuildingEmissions />
          </Grid>
          <Reports />
        </Grid>
      </Container>
    </Section>
    <Section>
      <Grid as="footer" columns={3}>
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
      <SectionHeader title="Weather" color="aqua" children={<Weather />} />
    </Section>
    <Section>
      <Grid as="footer" columns={3}>
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
    <Section>
      <Image
        src="/photos/farms.jpg"
        alt="Happy Valley Farm"
        width={3072}
        height={2048}
        layout="responsive"
      />
      <SectionHeader title="Farms" color="purple" children={<Farms />} />
      <Grid as="footer" columns={2}>
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
