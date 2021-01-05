import { Box } from 'theme-ui'
import Meta from './meta'

const sxCards = {
  ul: {
    listStyle: 'none',
    pl: 0,
    display: 'grid',
    gridGap: 3,
    gridTemplateColumns: [null, 'repeat(2, 1fr)'],
    mb: 4
  },
  li: {
    variant: 'cards.secondary',
    a: {
      ':before': {
        content: '"→"',
        opacity: 0.5,
        fontSize: 2,
        float: 'right',
        fontFamily: 'body',
        fontWeight: 'bold'
      },
      '&[href^="http"]:before': {
        content: '"↗"'
      }
    },
    img: {
      borderRadius: 'default',
      mt: '12px !important'
    }
  }
}

const Story = ({ color, cards = false, sx = {}, title, children, ...props }) => (
  <Box
    as="article"
    {...props}
    sx={{
      variant: 'layout.container',
      maxWidth: ['copy', null, 'copyPlus'],
      'nav + &': { mt: 64 },
      py: [4, 5],
      fontSize: 2,
      h1: {
        variant: 'text.title',
        display: 'flex',
        alignItems: 'flex-start',
        svg: {
          size: '0.75em',
          opacity: 0.625,
          ml: [null, '-1em'],
          mr: '0.25em'
        },
        '+ h2': { variant: 'text.subtitle' }
      },
      h2: {
        svg: {
          ml: 3,
          color: 'secondary',
          float: 'right'
        },
        '+ h3': { mt: 4 }
      },
      ...(color ? { 'h1, a': { color } } : null),
      ...(cards ? sxCards : null),
      '.nav-card:last-child': { mb: [0, 3] },
      ...props.sx
    }}
  >
    {title && <Meta title={title} />}
    {children}
  </Box>
)

export default Story
