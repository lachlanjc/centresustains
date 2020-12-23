import { Flex, Box, Text } from 'theme-ui'

export const TimelineStep = ({ name, duration, color = 'primary' }) => (
  <Flex
    sx={{
      alignItems: 'center',
      lineHeight: 'heading',
      py: 2,
      position: 'relative',
      zIndex: 1
    }}
  >
    <Box sx={{ p: 2, borderRadius: 'circle', bg: color, mr: [3, 4] }} aria-hidden />
    <Box>
      <Text sx={{ color: 'muted', display: 'block', fontSize: 1, pb: 1 }} children={duration} />
      <Text as="div" sx={{ color: 'text', fontSize: [2, 3] }} children={name} />
    </Box>
  </Flex>
)

export const Timeline = (props) => (
  <Flex
    {...props}
    sx={{
      flexDirection: 'column',
      lineHeight: 1.125,
      position: 'relative',
      mb: [3, 4],
      ':before': {
        backgroundImage: theme => `linear-gradient(
          to bottom,
          ${theme.colors.sheet} 0%,
          ${theme.colors.border} 15%,
          ${theme.colors.border} 85%,
          ${theme.colors.sheet} 100%
        )`,
        content: '""',
        height: '100%',
        width: 3,
        ml: '6px',
        position: 'absolute',
        zIndex: 0
      },
      ...props.sx
    }}
  />
)
