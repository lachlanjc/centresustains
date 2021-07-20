import { Box, Container, Flex, Link } from 'theme-ui'
import { Instagram, Facebook } from 'react-bootstrap-icons'
import BGImg from './bg-img'
import img from '../public/content/footer.jpg'
import Content from './footer.mdx'

const Service = ({ href, service, icon: Icon, ...props }) => (
  <Link
    target="_blank"
    rel="noopener"
    href={href}
    title={`Centre Sustains on ${service}`}
    children={<Icon size={32} />}
    mx={3}
    color="white"
    {...props}
  />
)

const Footer = () => (
  <Box
    as="footer"
    sx={{
      py: [3, 4],
      bg: 'slate',
      position: 'relative'
    }}
  >
    <BGImg
      src={img}
      alt="Mount Nittany and skyline of State College houses at sunset"
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
      <Flex sx={{ justifyContent: 'center', alignItems: 'center', mt: 3 }}>
        <Service
          href="https://instagram.com/centreregionalplanning"
          service="Instagram"
          icon={Instagram}
        />
        <Service
          href="https://facebook.com/centreregionalplanning"
          service="Facebook"
          icon={Facebook}
        />
      </Flex>
      <Content />
    </Container>
  </Box>
)

export default Footer
