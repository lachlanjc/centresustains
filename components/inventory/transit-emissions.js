import { Box, Flex, Text } from 'theme-ui'

const Bar = ({ opacity, style, ...props }) => (
  <Flex
    {...props}
    sx={{
      py: 1,
      px: 2,
      borderRadius: 'default',
      width: 'fit-content',
      alignItems: 'center',
      fontWeight: 'bold',
      maxWidth: 256,
      bg: 'pink',
      color: 'white'
    }}
    style={{ opacity, ...style }}
  />
)

const TransitEmissions = () => (
  <Box sx={{ mt: 1, maxWidth: 384 }}>
    <Bar style={{ width: '100%' }}>79% passenger vehicles</Bar>
    <Flex sx={{ alignItems: 'center', my: 1 }}>
      <Bar opacity={0.75}>17% trucks</Bar>
      <Text as="span" variant="caption" pl={2}>
        (freight & service)
      </Text>
    </Flex>
    <Flex sx={{ alignItems: 'center' }}>
      <Bar opacity={0.625}>4%</Bar>
      <Text as="span" variant="caption" pl={2}>
        <strong>transit</strong> (buses)
      </Text>
    </Flex>
  </Box>
)

export default TransitEmissions
