import { Box, Heading, Flex, Text } from 'theme-ui'

export const CompactFeature = ({ icon: Icon, color, name, desc, ...props }) => (
  <Flex sx={{ alignItems: 'center' }} {...props}>
    <Box
      as="span"
      sx={{
        bg: color,
        color: 'white',
        borderRadius: 18,
        lineHeight: 0,
        p: 3,
        mr: [0, 3],
        display: 'inline-block',
        transform: ['scale(0.75)', 'none'],
        transformOrigin: 'bottom left',
        boxShadow:
          'inset 2px 2px 6px rgba(255,255,255,0.2), inset -2px -2px 6px rgba(0,0,0,0.1), 0 1px 4px rgba(0,0,0,0.1), 0 4px 8px rgba(0,0,0,0.1)'
      }}
    >
      <Icon size={32} />
    </Box>
    <Box>
      <Text as="span" variant="lead" color="secondary" my={0}>
        {name}
      </Text>
      {desc &&
        <Text
          as="p"
          variant="caption"
          sx={{ mt: 2, pb: 2, a: { variant: 'styles.a', color: 'blue' } }}
        >
          {desc}
        </Text>
      }
    </Box>
  </Flex>
)

const Feature = ({ icon: Icon, color, name, desc, children, ...props }) => (
  <Box {...props}>
    {children || (
      <Box
        as="span"
        sx={{
          bg: color,
          color: 'white',
          borderRadius: 18,
          lineHeight: 0,
          p: 3,
          mb: 1,
          display: 'inline-block',
          transform: ['scale(0.75)', 'none'],
          transformOrigin: 'bottom left',
          boxShadow:
            'inset 2px 2px 6px rgba(255,255,255,0.2), inset -2px -2px 6px rgba(0,0,0,0.1), 0 1px 4px rgba(0,0,0,0.1), 0 4px 8px rgba(0,0,0,0.1)'
        }}
      >
        <Icon size={32} />
      </Box>
    )}
    <Box>
      <Heading as="h3" variant="headline" color="text" mb={2}>
        {name}
      </Heading>
      <Text
        as="p"
        variant="subtitle"
        sx={{ mt: 0, pb: 2, a: { variant: 'styles.a', color: 'blue' } }}
      >
        {desc}
      </Text>
    </Box>
  </Box>
)

export default Feature
