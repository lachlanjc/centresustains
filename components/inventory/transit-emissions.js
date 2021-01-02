import { Box, Heading, Flex, Text } from 'theme-ui'

const bar = {
  py: 1,
  px: 2,
  borderRadius: 'default',
  width: 'fit-content',
  alignItems: 'center',
  fontWeight: 'bold',
  color: 'white'
}

const TransitEmissions = () => (
  <Box as="section">
    <Heading as="h4" variant="subheadline">
      Transportation emissions
    </Heading>
    <Box sx={{ maxWidth: 384 }}>
      <Flex
        sx={{
          ...bar,
          width: '100%',
          maxWidth: 256,
          bg: 'teal'
        }}
      >
        79% passenger vehicles
      </Flex>
      <Flex sx={{ alignItems: 'center', my: 2 }}>
        <Flex
          sx={{
            ...bar,
            bg: 'green'
          }}
        >
          17% trucks
        </Flex>
        <Text as="span" variant="caption" pl={3}>
          (freight & service)
        </Text>
      </Flex>
      <Flex sx={{ alignItems: 'center', my: 2 }}>
        <Flex
          sx={{
            ...bar,
            my: 0,
            bg: 'yellow',
            color: 'slate'
          }}
        >
          4%
        </Flex>
        <Text as="span" variant="caption" pl={2}>
          <strong>transit</strong> (CATA & other buses)
        </Text>
      </Flex>
    </Box>
  </Box>
)

export default TransitEmissions
