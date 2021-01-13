import { Flex, Text } from 'theme-ui'
import Link from 'next/link'

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
      ...sx
    }}
  >
    <Link href={primary[0]} passHref>
      <Text
        as="a"
        variant="buttons.primary"
        target={primary[0].startsWith('http') ? '_blank' : '_self'}
        sx={{
          fontSize: 2,
          border: '3px solid',
          borderColor: colors[0],
          bg: colors[0],
          color: 'white',
          mr: [0, 3],
          mb: 2
        }}
      >
        {primary[1]} →
      </Text>
    </Link>
    {secondary?.[0] && (
      <Link href={secondary[0]} prefetch={false} passHref>
        <Text
          as="a"
          variant="buttons.primary"
          target={secondary[0].startsWith('http') ? '_blank' : '_self'}
          sx={{
            fontSize: 1,
            color: colors[1],
            border: '3px solid',
            borderColor: colors[2] || colors[1],
            mb: 2
          }}
        >
          {secondary[1]} →
        </Text>
      </Link>
    )}
  </Flex>
)

export default CTA
