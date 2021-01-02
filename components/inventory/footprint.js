import { PatchQuestion } from 'react-bootstrap-icons'
import { Box, Card, Flex, Grid, Text } from 'theme-ui'
import Intro from './footprint.mdx'

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
      fontSize: scale === 1 ? [3, 4, 5] : 1,
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

const Footprint = () => [
  <Box
    as="section"
    key="intro"
    sx={{
      maxWidth: '48ch',
      fontSize: 2,
      p: { mt: 0 }
    }}
  >
    <Intro />
  </Box>,
  <Box as="section" key="metrics">
    <Grid
      columns={[2]}
      sx={{ width: '100%', maxWidth: 384, pb: 3, alignItems: 'end' }}
    >
      <Stat title="Centre, PA" unit="MT CO₂/person">
        <Bubble scale={1} bg="brown" value={10.21} />
      </Stat>
      <Stat title="Global average" unit="MT CO₂/person">
        <Bubble scale={0.42} bg="muted" value={4.35} />
      </Stat>
    </Grid>
    <Text
      as="p"
      variant="caption"
      sx={{
        maxWidth: '48ch',
        display: 'flex',
        alignItems: 'center',
        ml: [null, 4],
        svg: { mr: 3, flexShrink: 0, fontSize: 3 }
      }}
    >
      <PatchQuestion />
      CO₂e is “carbon dioxide equivalent”: other emissions’ equivalent
      greenhouse pollution as carbon dioxide.
    </Text>
  </Box>
]

export default Footprint
