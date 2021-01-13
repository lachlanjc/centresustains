import { Box } from 'theme-ui'

const Cal = ({ month, day, color = 'brown' }) => (
  <Box
    sx={{
      borderRadius: 'extra',
      border: '4px solid',
      borderColor: color,
      textAlign: 'center',
      fontWeight: 'bold',
      width: 96,
      height: 96,
      mr: 3
    }}
  >
    <Box
      as="strong"
      sx={{
        textTransform: 'uppercase',
        bg: color,
        color: 'white',
        display: 'block',
        fontSize: 2,
        pb: 1
      }}
      children={month}
    />
    <Box
      as="strong"
      sx={{ color: 'secondary', fontSize: 5, lineHeight: 'heading' }}
      children={day}
    />
  </Box>
)

export default Cal
