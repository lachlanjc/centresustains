import {
  useColorMode,
  Box,
  Container,
  IconButton,
  NavLink,
} from 'theme-ui'
import Link from 'next/link'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { Moon } from 'react-feather'

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
      display: 'inline-flex',
      alignItems: 'flex-end',
      width: 'auto',
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
      sx={{ color: 'secondary', ml: 'auto', ...props.sx }}
      title="Reverse color scheme"
    >
      <Moon size={24} />
    </NavButton>
  )
}

const Nav = () => {
  const { pathname } = useRouter()
  const home = pathname === '/'
  if (home) return null
  const [colorMode] = useColorMode()
  return (
    <Box as="nav"
      variant={'cards.translucent' + (colorMode === 'dark' ? 'Dark' : '')}
      sx={{ position: 'absolute', top: 0, left: 0, right: 0, py: 2, zIndex: 4 }}>
      <Container
        sx={{
          display: 'flex',
          alignItems: 'center',
          a: {
            ...linkEffect,
            fontSize: 1,
            color: 'secondary',
            textDecoration: 'none',
            mr: [3, 4]
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
            <Image
              src="/SCR-Seondary-Tree-Color-Logo.png"
              alt="Sustainable Centre Region logo"
              width={48}
              height={48}
            />
          </NavLink>
        </Link>
        <Link href="/forum" passHref>
          <NavLink px={2}>Forum</NavLink>
        </Link>
        <Link href="/about" passHref>
          <NavLink px={2}>About Us</NavLink>
        </Link>
        <Link href="/climate" passHref>
          <NavLink px={2}>Learn</NavLink>
        </Link>
        <ColorSwitcher />
      </Container>
    </Box>
  )
}

export default Nav
