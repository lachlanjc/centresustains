import Image from 'next/image'
import { Box } from 'theme-ui'

const Avatar = ({ size = 32, sx, ...props }) => (
  <Box
    as="figure"
    sx={{
      display: 'inline-block',
      verticalAlign: 'middle',
      lineHeight: 0,
      ...sx,
      img: { borderRadius: 'circle' }
    }}
  >
    <Image width={size} height={size} {...props} />
  </Box>
)

export default Avatar
