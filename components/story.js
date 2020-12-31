import { Box } from 'theme-ui'

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
        content: '"↗"',
      }
    },
    img: {
      borderRadius: 'default',
      mt: '12px !important'
    }
  }
}

const Story = ({ color, cards = false, sx = {}, ...props }) => (
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
      ...props.sx
    }}
  />
)

export default Story
