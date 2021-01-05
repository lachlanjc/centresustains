import Link from 'next/link'
import { Box, Flex } from 'theme-ui'
import { ArrowRightCircle } from 'react-bootstrap-icons'
import { colors } from '../lib/theme'

const NavCard = ({
  to = '/',
  icon: Icon,
  color = 'primary',
  sx,
  children,
  ...props
}) => (
    <Link href={to} passHref>
      <Flex
        as="a"
        className="nav-card"
        style={{ '--card-color': colors[color] }}
        {...props}
        sx={{
          alignItems: 'center',
          justifyContent: 'space-between',
          color: 'white !important',
          maxWidth: 'narrowPlus',
          mx: 'auto',
          position: 'relative',
          WebkitTapHighlightColor: 'transparent',
          textDecoration: 'none',
          fontWeight: 'bold',
          fontSize: 3,
          lineHeight: 'subheading',
          letterSpacing: 'title',
          mt: [3, 4],
          mb: [4, 5],
          px: [3, 4],
          py: 4,
          ...sx,
          svg: {
            transition: 'transform 0.125s ease-out'
          },
          '> svg': {
            fontSize: 4,
            transformOrigin: 'center left'
          },
          ':hover, :focus': {
            '> span': {
              transform: 'scale(1.0625)',
              svg: {
                transform: 'scale(1.25) translateX(-50%) translateY(-37.5%)'
              }
            },
            '> svg': {
              transform: 'scale(1.5)'
            }
          }
        }}
      >
        <Box
          as="span"
          sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            zIndex: -1,
            borderRadius: 'extra',
            boxShadow: 'elevated',
            bg: 'var(--card-color)',
            transition: 'transform 0.125s ease-out',
            svg: {
              position: 'absolute',
              left: 0,
              top: '50%',
              transform: 'translateY(-50%)',
              width: 64,
              height: 64,
              opacity: 0.25
            }
          }}
        >
          {Icon && <Icon aria-hidden />}
        </Box>
        {children}
        <ArrowRightCircle aria-hidden />
      </Flex>
    </Link>
  )

export default NavCard
