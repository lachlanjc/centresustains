import { Box, Flex, Grid, Text } from 'theme-ui'

const Stat = ({ title, unit, children }) => (
  <Flex
    sx={{
      flexDirection: 'column',
      alignItems: 'center',
      textAlign: 'center'
    }}
  >
    <Text as="strong" sx={{ fontSize: [1, 2] }}>
      {title}
    </Text>
    <Text as="span" variant="caption" sx={{ pb: [2, 3], mb: 'auto' }}>
      {unit}
    </Text>
    {children}
  </Flex>
)

const Bubble = ({ value, bg, sx, scale = 1, ...props }) => (
  <Box
    sx={{
      fontSize: scale === 1 ? [3, 4] : 1,
      fontWeight: 'bold',
      width: [96, 128],
      height: [96, 128],
      lineHeight: ['96px', '128px'],
      textAlign: 'center',
      position: 'relative',
      color: 'white',
      ...sx,
      ':after': {
        bg,
        borderRadius: 'circle',
        content: '""',
        position: 'absolute',
        top: '0',
        left: '0',
        right: '0',
        bottom: '0',
        zIndex: '-1',
        transform: `scale(${scale})`
      }
    }}
    children={value}
    {...props}
  />
)

const Footprint = () => (
  <Box>
    <Text as="p" sx={{ maxWidth: '48ch', fontSize: 2 }}>
      Across Centre Region, our annual emissions are{' '}
      <strong>824,209&nbsp;MT&nbsp;CO₂e</strong> (that’s “CO
      <sub>2</sub> equivalent”—some greenhouse gas emissions are pollutants
      other than carbon dioxide). Our emissions per person is{' '}
      <strong>more than 2X the global average</strong>, though fairly average
      for US suburbs.
    </Text>
    <Grid columns={2} sx={{ width: '100%', maxWidth: 384 }}>
      <Stat title="Centre, PA" unit="MT CO₂/person">
        <Bubble scale={1} bg="brown" value={10.21} />
      </Stat>
      <Stat title="Global average" unit="MT CO₂/person">
        <Bubble scale={0.42} bg="muted" value={4.35} />
      </Stat>
    </Grid>
  </Box>
)

export default Footprint
