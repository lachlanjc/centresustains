import { Box, Heading, Flex, Grid } from 'theme-ui'
import { Building, House } from 'react-bootstrap-icons'

const bar = {
  py: 1,
  px: 2,
  borderRadius: 'default',
  alignItems: 'center',
  fontWeight: 'bold',
  color: 'white'
}

const Row = props => (
  <Flex
    sx={{
      alignItems: 'center',
      my: 2,
      svg: {
        width: 24,
        height: 24,
        mr: 3
      }
    }}
    {...props}
  />
)

const BuildingEmissions = () => (
  <Box as="section">
    <Heading as="h4" variant="subheadline">
      Building emissions
    </Heading>
    <Row color="slate">
      <Building />
      <Flex
        sx={{
          ...bar,
          maxWidth: 256,
          pr: 4,
          bg: 'slate'
        }}
      >
        52% residential
      </Flex>
    </Row>
    <Row color="muted">
      <House />
      <Flex
        sx={{
          ...bar,
          maxWidth: 256 * 0.92,
          bg: 'muted'
        }}
      >
        48% commercial
      </Flex>
    </Row>
  </Box>
)

export default BuildingEmissions
