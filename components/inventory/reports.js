import { Box, Grid, Flex } from 'theme-ui'
import Image from 'next/image'
import { PlusCircle } from 'react-bootstrap-icons'

const File = ({ img, width, height, url, name }) => (
  <Flex
    sx={{
      border: '1px solid',
      borderColor: 'border',
      borderRadius: 'extra',
      bg: 'elevated',
      flexDirection: 'column',
      alignItems: 'center',
      textAlign: 'center',
      fontSize: [1, 2],
      color: 'azure',
      lineHeight: 'subheading',
      p: 2,
      mr: 3,
      '> div': { borderRadius: 'default', overflow: 'hidden' },
      span: { mt: 1 }
    }}
    as="a"
    href={url}
    target="_blank"
  >
    <Image src={img} alt={`${name} thumbnail `} width={width} height={height} />
    <span>{name}</span>
  </Flex>
)

const Reports = () => (
  <Box
    as="details"
    sx={{
      borderRadius: 24,
      mt: 3,
      '&[open]': {
        bg: 'sunken',
        summary: {
          bg: 'sunken',
          color: 'text',
          width: '100%'
        },
        svg: {
          color: 'azure',
          transform: 'rotate(45deg)'
        },
        ':focus svg, summary:hover svg': {
          transform: 'rotate(45deg)'
        }
      }
    }}
  >
    <Box
      as="summary"
      sx={{
        outline: 'none',
        WebkitTapHighlightColor: 'transparent',
        color: 'white',
        bg: 'azure',
        display: 'inline-block',
        span: {
          display: 'inline-flex',
          alignItems: 'center'
        },
        p: 2,
        pr: 3,
        fontSize: 2,
        fontWeight: 'bold',
        height: 48,
        borderRadius: 24,
        cursor: 'pointer',
        userSelect: 'none',
        transition: '0.125s filter ease-out, 0.25s ease-out color',
        willChange: 'filter',
        '::-webkit-details-marker': {
          display: 'none'
        },
        svg: {
          fontSize: 4,
          mr: 2,
          transition: 'filter 0.125s ease-in-out, color 0.25s ease-out',
          willChange: 'filter'
        },
        ':focus svg,:hover svg': {
          filter: 'drop-shadow(0 0 3px currentColor)'
        }
      }}
    >
      <span>
        <PlusCircle /> Explore the full reports
      </span>
    </Box>
    <Flex sx={{ pt: 2, pl: [2, 3], pb: 3, justifyContent: 'center' }}>
      <File
        url="/progress/ghg_summary.pdf"
        name="Inventory Summary"
        img="/progress/ghg_summary.jpg"
        width={500}
        height={647}
      />
      <File
        url="/progress/ghg_report.pdf"
        name="Full Report"
        img="/progress/ghg_report.jpg"
        width={500}
        height={647}
      />
    </Flex>
  </Box>
)

export default Reports
