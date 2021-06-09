import { Box, Heading, Text } from 'theme-ui'
import BGImg from '../components/bg-img'
import SlideUp from '../components/slide-up'
import CTA from '../components/cta'
import Story from '../components/story'
import Home from '../components/home.mdx'

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
        pt: [6, 128 * 1.5],
        pb: 4,
        textAlign: 'center',
        overflow: 'hidden'
      }}
    >
      <BGImg
        src="/photos/leaves_pano.jpg"
        alt="Fog over a meadow with a sunlit tree"
        width={9926}
        height={4256}
        gradient="rgba(0,0,0,0), rgba(0,0,0,0.625)"
        priority
      />
      <SlideUp>
        <Heading
          as="h1"
          variant="layout.container"
          sx={{ variant: 'text.ultratitle', color: 'inherit' }}
        >
          Centre Region is planning bold climate action.
        </Heading>
        <Text as="p" variant="layout.copy" sx={{ variant: 'text.lead' }}>
          We’re a group out of central Pennsylvania local government
          working&nbsp;on stewardship & climate planning in our community.
        </Text>
        <CTA
          primary={['/climate', 'Learn about our climate']}
          colors={['primary', 'white', 'rgba(255,255,255,0.5)']}
          sx={{ mt: [3, 4], px: 3 }}
        />
      </SlideUp>
    </Box>
    <Story
      sx={{
        pt: [4, 4],
        pb: 5,
        '> p:first-of-type': {
          variant: 'text.lead',
          mb: [4, 4]
        }
      }}
    >
      <Home />
    </Story>
  </>
)

export default HomePage
