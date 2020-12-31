import { Box, Heading } from 'theme-ui'
import { colors } from '../../lib/theme'

export const Section = props => (
  <Box
    as="section"
    {...props}
    sx={{ ':nth-of-type(even)': { bg: 'sheet' }, ...props.sx }}
  />
)

export const SectionHeader = ({ color, title, children, ...props }) => (
  <Box
    {...props}
    id={title.toLowerCase()}
    style={{ '--section-color': colors[color] }}
    sx={{
      px: [3, 4, 5],
      py: [5, null, 6],
      fontSize: 2,
      '> p': {
        maxWidth: 'copy',
        ':first-of-type': {
          variant: 'text.subtitle',
          mb: 3,
          fontWeight: 'bold',
          strong: { color: 'var(--section-color)' }
        }
      },
      a: { color: 'var(--section-color)' },
      details: {
        ml: 0,
        my: [4, null, 5, 6],
        svg: { color: 'var(--section-color)', verticalAlign: 'middle' },
        ':focus-visible': { outline: 'none' },
        summary: {
          p: {
            variant: 'text.title',
            fontSize: [5, 6],
            lineHeight: 'caption',
            // fontWeight: 'bold',
            textAlign: 'center',
            color: 'text',
          },
          strong: {
            variant: 'badges.outline',
            color: 'var(--section-color)',
            px: [3, 4]
          },
          '::-webkit-details-marker': {
            display: 'none'
          },
          'svg:last-of-type': {
            bg: 'var(--section-color)',
            color: 'white',
            borderRadius: 'circle',
            boxShadow: '0 0 12px var(--section-color)',
            p: 2,
            ml: 3,
            transition: '0.125s all ease-in-out',
            willChange: 'transform'
          },
        },
        '&[open] summary svg:last-of-type': {
          transform: 'rotate(-45deg)',
          bg: 'muted',
          boxShadow: 'none'
        },
      },
      hr: { mx: 0 },
      article: {
        variant: 'cards.sunken',
        maxWidth: 'copy',
        mx: 'auto',
        '> p': {
          fontSize: 2,
          letterSpacing: 'headline',
          lineHeight: 'caption',
          color: 'secondary',
          m: 0
        },
        'p + p': { mt: 3 }
      },
      footer: {
        variant: 'cards.primary',
        border: '2px solid var(--section-color)',
        maxWidth: 'copy',
        position: 'relative',
        // textAlign: 'center',
        // mx: 'auto',
        mt: [4, 5],
        '> svg': {
          position: 'absolute',
          top: 0,
          left: 0,
          width: 64,
          height: 64,
          opacity: 0.125
        },
        '> p': { my: 0 }
      },
      ...props.sx
    }}
  >
    <Heading as="h2" variant="ultratitle" color={color}>
      {title}
    </Heading>
    {children}
  </Box>
)
