import Image from 'next/image'
import { Grid } from 'theme-ui'
import { MDXProvider } from '@mdx-js/react'

const Layout = ({ compact, ...props }) => (
  <Grid
    columns={['64px 1fr', compact ? 'repeat(2, 96px 1fr)' : '96px 1fr']}
    gap={3}
    sx={{
      py: [3, 4],
      alignItems: compact ? 'center' : 'start',
      img: { borderRadius: 'circle' },
      '> p': { my: 0 },
      'p > div': { verticalAlign: 'middle' },
      a: { whiteSpace: 'nowrap' }
    }}
    {...props}
  />
)

const Avatar = props => <Image width={512} height={512} {...props} />

const Team = props => (
  <Layout compact={props.compact}>
    <MDXProvider components={{ img: Avatar }} {...props} />
  </Layout>
)

export default Team
