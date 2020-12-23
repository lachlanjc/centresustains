import { Flex, Button } from 'theme-ui'
import Link from 'next/link'
import { isEmpty } from 'lodash'

const CTA = ({
  primary = [],
  secondary = {},
  colors = ['pink', 'azure'],
  sx = {}
}) => (
    <Flex
      sx={{
        alignItems: 'center',
        flexWrap: 'wrap',
        ...sx
      }}
    >
      <Link href={primary[0]} passHref>
        <Button
          as="a"
          target={primary[0].startsWith('http') ? '_blank' : '_self'}
          sx={{
            fontSize: 2,
            border: '3px solid',
            borderColor: colors[0],
            bg: colors[0],
            mr: [0, 3],
            mb: 2
          }}
        >
          {primary[1]} →
      </Button>
      </Link>
      {!isEmpty(secondary?.[0]) && (
        <Link href={secondary[0]} prefetch={false} passHref>
          <Button
            variant="outline"
            as="a"
            target={secondary[0].startsWith('http') ? '_blank' : '_self'}
            sx={{ color: colors[1], mb: 2 }}
          >
            {secondary[1]} →
        </Button>
        </Link>
      )}
    </Flex>
  )

export default CTA
