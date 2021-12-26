import { Box } from 'theme-ui'
import Image from 'next/image'

/*
 * Use this component inside a container with CSS:
 * `position: relative; overflow: hidden;`
 * then pass width/height/alt/src as usual
 */

const gx = gradient =>
  gradient
    ? {
        '&:after': {
          content: '""',
          position: 'absolute',
          backgroundImage: `linear-gradient(${gradient})`,
          top: 0,
          left: 0,
          right: 0,
          bottom: 0
        }
      }
    : {}

const BGImg = ({ gradient, ...props }) => (
  <Box
    as="figure"
    sx={{
      position: 'absolute',
      display: 'block',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      zIndex: 0,
      ...gx(gradient),
      '> span': { position: 'static !important' },
      '~ *': { position: 'relative' }
    }}
  >
    <Image
      layout="responsive"
      objectFit="cover"
      objectPosition="center"
      placeholder="blur"
      {...props}
    />
  </Box>
)

export default BGImg
