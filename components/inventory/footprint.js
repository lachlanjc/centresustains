import { Flex, Heading, Text, Paragraph } from 'theme-ui'

const Footprint = () => (
  <Flex as="section" sx={{ flexDirection: 'column', justifyContent: 'center' }}>
    <Heading as="h3" variant="headline">Local carbon footprint</Heading>
    <Paragraph>
      Our annual emissions of <strong>824,209 MTCO<sub>2</sub>e</strong>
      <br />
      <Text variant="caption">equates to a per person emission rate more than 2X the global average</Text>
    </Paragraph>
    <Paragraph sx={{ pt: 3 }}>
      Annual average carbon footprint: <strong>10.21 MT CO2/person</strong>
    </Paragraph>
    <Paragraph>
      Global average: <strong>4.35 MT CO2/person</strong>
    </Paragraph>
  </Flex>
)

export default Footprint
