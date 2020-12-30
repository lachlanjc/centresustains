import { Box, Heading, Flex, Text } from 'theme-ui'
import { People, PersonBoundingBox, Truck } from 'react-bootstrap-icons'

const bar = {
  py: 2,
  px: 3,
  my: 2,
  borderRadius: 'default',
  width: 'fit-content',
  alignItems: 'center',
  fontWeight: 'bold',
  color: 'white',
  svg: {
    width: 32,
    height: 32,
    mr: 2
  }
}

const TransitEmissions = () => (
  <Box as="section">
    <Heading as="h3" variant="subheadline">
      Transportation Emissions
    </Heading>
    <Box>
      <Flex
        sx={{
          ...bar,
          width: '100%',
          maxWidth: 512,
          bg: 'blue'
        }}
      >
        <PersonBoundingBox />
        79% passenger vehicles
      </Flex>
      <Flex
        sx={{
          ...bar,
          pr: 4,
          bg: 'purple'
        }}
      >
        <Truck />
        17% freight & service trucks
      </Flex>
      <Flex sx={{ alignItems: 'center', my: 2 }}>
        <Flex
          sx={{
            ...bar,
            my: 0,
            bg: 'green'
          }}
        >
          <People />
        4% transit
      </Flex>
        <Text as="span" variant="caption" pl={3}>(CATA & other buses)</Text>
      </Flex>
    </Box>
  </Box>
)

export default TransitEmissions
