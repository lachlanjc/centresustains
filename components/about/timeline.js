import { Flex, Box, Text } from 'theme-ui'

const Step = ({ name, duration, color = 'primary' }) => (
  <Flex
    sx={{
      alignItems: 'center',
      lineHeight: 'heading',
      py: 2,
      position: 'relative',
      zIndex: 1
    }}
  >
    <Box sx={{ p: 2, borderRadius: 'circle', bg: color, mr: [3, 4] }} />
    <Box>
      <Text sx={{ color: 'muted', fontSize: 1, mb: 1 }} children={duration} />
      <Text as="div" sx={{ color: 'text', fontSize: [2, 3] }} children={name} />
    </Box>
  </Flex>
)

const Timeline = () => (
  <Flex
    sx={{
      flexDirection: 'column',
      lineHeight: 1.125,
      position: 'relative',
      mb: 3,
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
      }
    }}
  >
    <Step
      name="Group created"
      duration="2016"
      color="indigo"
    />
    <Step
      name="Pam does XYZ"
      duration="March 2018"
      color="purple"
    />
    <Step
      name="GHG inventory for 2016 completed"
      duration="June 2019"
      color="azure"
    />
    <Step
      name="Survey of community"
      duration="January 2021"
      color="aqua"
    />
    <Step
      name="Public Forum"
      duration="April 2021"
      color="green"
    />
  </Flex>
)

export default Timeline
