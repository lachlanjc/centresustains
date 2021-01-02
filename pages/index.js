import { Box, Heading, Text } from 'theme-ui'
import BGImg from '../components/bg-img'
import CTA from '../components/cta'
import Story from '../components/story'
import Survey from '../components/survey.mdx'

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
        textAlign: 'center'
      }}
    >
      <BGImg
        src="/photos/leaves_pano.jpg"
        alt="Fog over a meadow with a sunlit tree"
        width={9926}
        height={4256}
        gradient="rgba(0,0,0,0), rgba(0,0,0,0.5)"
      />
      <Heading
        as="h1"
        variant="layout.container"
        sx={{ variant: 'text.ultratitle', color: 'inherit' }}
      >
        Centre County is planning bold climate action.
      </Heading>
      <Text as="p" variant="layout.copy" sx={{ variant: 'text.lead' }}>
        We’re a group of elected officials in central Pennsylvania working on stewardship & climate planning in our community.
      </Text>
      <CTA
        primary={['/climate', 'Learn about climate']}
        secondary={['/about', 'About us']}
        sx={{ mt: [3, 4], px: 3, justifyContent: 'center' }}
      />
    </Box>
    <Story sx={{ py: [5] }}>
      <Survey />
    </Story>
  </>
)

export default HomePage
