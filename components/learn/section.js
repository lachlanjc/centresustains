import { Box, Heading } from 'theme-ui'
import theme, { colors } from '../../lib/theme'
import { keyframes } from '@emotion/react'

export const Section = props => (
  <Box
    as="section"
    {...props}
    sx={{
      ':nth-of-type(even)': { bg: 'sheet' },
      'img[role="presentation"]': { bg: 'sunken' },
      footer: {
        gridGap: [1, 3],
        div: { minHeight: 300 }
      },
      ...props.sx
    }}
  />
)

const slideDown = keyframes({
  from: { opacity: 0, transform: 'translateY(-50%)' },
  to: { opacity: 1, transform: 'translateY(0)' }
})

export const SectionHeader = ({ color, title, children, ...props }) => (
  <Box
    {...props}
    id={title.toLowerCase()}
    style={{ '--section-color': colors[color] }}
    sx={{
      px: [3, 4, 5],
      pt: [5, null, 6],
      pb: 5,
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
        my: [5, 6],
        svg: { color: 'var(--section-color)', verticalAlign: 'middle' },
        summary: {
          outline: 'none',
          WebkitTapHighlightColor: 'transparent',
          p: {
            variant: 'text.title',
            maxWidth: 'layoutPlus',
            mx: 'auto',
            fontFamily: 'body',
            fontSize: [4, 5, 6],
            lineHeight: ['body', 'caption'],
            textAlign: 'center',
            color: 'text',
          },
          strong: {
            variant: 'badges.outline',
            color: 'var(--section-color)',
            bg: 'background',
            px: [3, 4]
          },
          '::-webkit-details-marker': {
            display: 'none'
          },
          'svg:last-of-type': {
            bg: 'var(--section-color)',
            color: 'white',
            borderRadius: 'circle',
            minWidth: 48,
            minHeight: 48,
            filter: 'drop-shadow(0 0 8px var(--section-color))',
            p: 2,
            m: 3,
            cursor: 'pointer',
            willChange: 'transform, filter',
            transition: '0.125s transform ease-in-out, 0.25s filter ease-out',
          },
          ':focus svg:last-of-type,:hover svg:last-of-type': {
            outline: 'none',
            filter: 'brightness(120%) drop-shadow(0 0 12px var(--section-color))',
            transform: 'scale(1.125)'
          }
        },
        '&[open]': {
          summary: {
            'svg:last-of-type': {
              transform: 'rotate(45deg)',
              p: 1,
              bg: 'muted',
              filter: 'none'
            },
            ':focus svg:last-of-type, svg:last-of-type:hover': {
              transform: 'rotate(45deg) scale(1.125)',
              filter: 'brightness(120%)'
            }
          },
          [theme.util.motion]: {
            article: {
              animation: `${slideDown} 0.25s ease-out`
            }
          }
        }
      },
      hr: { mx: 0 },
      article: {
        variant: 'cards.sunken',
        maxWidth: 'copy',
        mx: 'auto',
        'p, li': {
          fontSize: 2,
          letterSpacing: 'headline',
          lineHeight: 'caption',
          color: 'secondary',
          m: 0
        },
        'p + p': { mt: 3 }
      },
      aside: {
        variant: 'cards.primary',
        border: '2px solid var(--section-color)',
        maxWidth: 'copy',
        position: 'relative',
        // mx: 'auto',
        mt: [4, 5],
        '> svg': {
          position: 'absolute',
          top: 2,
          left: 2,
          width: 64,
          height: 64,
          opacity: 0.25,
          color: 'var(--section-color)'
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
