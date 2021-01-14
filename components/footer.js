import { Box, Container } from 'theme-ui'
import BGImg from './bg-img'
import Content from './footer.mdx'

const Footer = () => (
  <Box
    as="footer"
    sx={{
      py: [3, 4],
      bg: 'secondary',
      position: 'relative'
    }}
  >
    <BGImg
      src="/content/footer.jpg"
      width={3405}
      height={1086}
    />
    <Container
      variant="narrow"
      sx={{
        color: 'white',
        textShadow: 'text',
        textAlign: 'center',
        ul: {
          p: 0,
          listStyle: 'none',
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'center'
        },
        li: {
          my: 1,
          pl: 2,
          '+ li::before': { content: '"|"', opacity: 0.625, pr: 2 }
        },
        a: {
          color: 'inherit',
          textUnderlinePosition: 'under'
        }
      }}
    >
      <Content />
    </Container>
  </Box>
)

export default Footer
