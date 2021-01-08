import { useColorMode, Box, Container, IconButton, NavLink } from 'theme-ui'
import Link from 'next/link'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { Moon } from 'react-bootstrap-icons'

const linkEffect = {
  borderRadius: 'circle',
  transition: 'box-shadow .125s ease-in-out',
  ':hover,:focus': {
    color: 'primary',
    boxShadow: '0 0 0 2px',
    outline: 'none'
  }
}

const NavButton = ({ sx, ...props }) => (
  <IconButton
    {...props}
    sx={{
      ...linkEffect,
      width: 'auto',
      flexShrink: 0,
      svg: { stroke: 'currentColor' },
      ...sx
    }}
  />
)

export const ColorSwitcher = props => {
  const [mode, setMode] = useColorMode()
  return (
    <NavButton
      {...props}
      onClick={() => setMode(mode === 'dark' ? 'light' : 'dark')}
      sx={{ color: 'secondary', ...props.sx }}
      title="Reverse color scheme"
    >
      <Moon size={24} />
    </NavButton>
  )
}

const Nav = () => {
  const { pathname } = useRouter()
  const [colorMode] = useColorMode()
  return (
    <Box
      as="nav"
      variant={'cards.translucent' + (colorMode === 'dark' ? 'Dark' : '')}
      sx={{ position: 'absolute', top: 0, left: 0, right: 0, py: 2, zIndex: 4 }}
    >
      <Container
        variant="copy"
        sx={{
          display: 'flex',
          alignItems: 'center',
          a: {
            ...linkEffect,
            fontSize: 1,
            color: 'secondary',
            textDecoration: 'none'
          }
        }}
      >
        <Link href="/" passHref>
          <NavLink
            sx={{
              display: 'flex',
              alignItems: 'center',
              color: 'secondary',
              textTransform: 'uppercase',
              fontSize: [1, 2],
              fontWeight: 'bold'
            }}
          >
            <img
              src="/icon/icon@96.png"
              alt="Centre Sustains logo"
              width={48}
              height={48}
              loading="eager"
            />
          </NavLink>
        </Link>
        <Box
          sx={{
            maxWidth: [128 * 1.5, 'none'],
            mx: 'auto',
            textAlign: 'center',
            a: { mx: [2, 3], px: 2 }
          }}
        >
          <Link href="/forum" passHref>
            <NavLink>Forum</NavLink>
          </Link>
          <Link href="/about" passHref>
            <NavLink>About</NavLink>
          </Link>
          <Link href="/resources" passHref>
            <NavLink>Resources</NavLink>
          </Link>
          <Link href="/climate" passHref>
            <NavLink>Learn</NavLink>
          </Link>
        </Box>
        <ColorSwitcher />
      </Container>
    </Box>
  )
}

export default Nav
