import { Box } from 'theme-ui'
import { keyframes } from '@emotion/react'
import theme from '../lib/theme'

const slideUp = keyframes({
  from: { transform: 'translateY(100%)', opacity: 0 },
  to: { transform: 'translateY(0)', opacity: 1 }
})

const SlideUp = ({ duration = 720, delay = 0, sx, ...props }) => (
  <Box
    {...props}
    sx={{
      ...sx,
      [theme.util.motion]: {
        animationName: slideUp.toString(),
        animationFillMode: 'backwards',
        animationDuration: duration + 'ms',
        animationDelay: delay + 'ms',
        willChange: 'transform, opacity'
      }
    }}
  />
)

export default SlideUp
