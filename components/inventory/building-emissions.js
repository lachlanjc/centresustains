import { Box, Flex } from 'theme-ui'

const bar = {
  py: 1,
  px: 2,
  borderRadius: 'default',
  alignItems: 'center',
  fontWeight: 'bold',
  bg: 'indigo',
  color: 'white'
}

const BuildingEmissions = () => (
  <Box>
    <Flex
      sx={{
        ...bar,
        maxWidth: 200,
        pr: 4,
        mt: 2,
        mb: 1
      }}
    >
      52% residential
    </Flex>
    <Flex
      sx={{
        ...bar,
        maxWidth: 200 * 0.92,
        opacity: 0.75
      }}
    >
      48% commercial
    </Flex>
  </Box>
)

export default BuildingEmissions
