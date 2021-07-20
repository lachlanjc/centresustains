import { Flex, Text } from 'theme-ui'
import Link from 'next/link'

const varExternal = (path, int, ext) => (path.startsWith('http') ? ext : int)

const CTA = ({
  primary = [],
  secondary = [],
  colors = ['primary', 'muted'],
  sx = {}
}) => (
  <Flex
    sx={{
      justifyContent: 'center',
      alignItems: 'center',
      flexWrap: 'wrap',
      color: colors[1],
      ...sx
    }}
  >
    <Link href={primary[0]} passHref>
      <Text
        as="a"
        variant="buttons.primary"
        target={varExternal(primary[0], undefined, 'http')}
        sx={{
          fontSize: 2,
          border: '3px solid',
          borderColor: colors[0],
          bg: colors[0],
          color: 'white !important',
          mr: [0, 3],
          mb: 2
        }}
      >
        {primary[1]} {varExternal(primary[0], '→', '↗')}
      </Text>
    </Link>
    {secondary?.[0] && (
      <Link href={secondary[0]} passHref>
        <Text
          as="a"
          variant="buttons.primary"
          target={varExternal(secondary[0], undefined, 'http')}
          sx={{
            fontSize: 1,
            color: 'inherit !important',
            border: '3px solid',
            borderColor: colors[2] || colors[1],
            mb: 2
          }}
        >
          {secondary[1]} {varExternal(primary[0], '→', '↗')}
        </Text>
      </Link>
    )}
  </Flex>
)

export default CTA
