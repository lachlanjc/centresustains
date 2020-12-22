import { Box, Container, Heading, Text } from 'theme-ui'
import BGImg from '../components/bg-img'
import Nav from '../components/nav'
import CTA from '../components/cta'

const HomePage = () => (
  <>
    <Box
      as="header"
      sx={{
        bg: 'sheet',
        color: 'white',
        textShadow: 'text',
        lineHeight: 'body',
        position: 'relative',
        pt: [5, 128 * 1.5],
        pb: 4,
        textAlign: 'center'
      }}
    >
      <BGImg
        src="/photos/leaves_pano.jpg"
        alt="Fog over a meadow with a sunlit tree"
        width={9926}
        height={4256}
        gradient="rgba(0,0,0,0.125), rgba(0,0,0,0.375)"
      />
      <Heading
        as="h1"
        variant="layout.container"
        sx={{ variant: 'text.ultratitle', color: 'inherit' }}
      >
        Centre County is planning bold climate action.
      </Heading>
      <Text as="p" variant="layout.copy" sx={{ variant: 'text.lead' }}>
        Take our survey on the climate action you care about in our community.
      </Text>
      <CTA
        primary={['/about', 'About us']}
        secondary={['/climate', 'Learn more']}
        sx={{ mt: [3, 4], px: 3, justifyContent: 'center' }}
      />
    </Box>
    {/* <Container
      id="projects"
      as="article"
      sx={{ py: [3, 4], mt: [3, 4], mb: [5, 6] }}
    >
      <Heading as="h1" sx={{ variant: 'text.title', fontSize: [4, 5] }} />
      <Text sx={{ fontSize: [2, 3], my: [3, 4], maxWidth: 'copyPlus' }} />
    </Container> */}
  </>
)

export default HomePage
