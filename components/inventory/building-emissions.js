import { Box, Heading, Flex, Grid } from 'theme-ui'
import { Building, House } from 'react-bootstrap-icons'

const bar = {
  py: 2,
  px: 3,
  borderRadius: 'default',
  alignItems: 'center',
  fontWeight: 'bold',
  color: 'white',
  svg: {
    width: 32,
    height: 32,
    mr: 2
  }
}

const BuildingEmissions = () => (
  <Box as="section">
    <Heading as="h3" variant="subheadline">
      Building Emissions
    </Heading>
    <Flex
      sx={{
        ...bar,
        mb: 2,
        maxWidth: 256,
        pr: 4,
        bg: 'slate'
      }}
    >
      <Building />
        52% residential
      </Flex>
    <Flex
      sx={{
        ...bar,
        maxWidth: 256 * 0.92,
        bg: 'muted'
      }}
    >
      <House />
        48% commercial
      </Flex>
  </Box>
)

export default BuildingEmissions
