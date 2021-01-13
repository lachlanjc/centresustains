import Chart from './chart'
import { Grid, Flex, Box, Text } from 'theme-ui'
import { colors } from '../../lib/theme'
import { Fragment } from 'react'
import BuildingEmissions from './building-emissions'
import TransitEmissions from './transit-emissions'

const data = [
  {
    name: 'Buildings/Energy',
    desc: 'Electricity, natural gas, & heating fuels',
    children: BuildingEmissions,
    value: 0.67,
    fill: 'indigo'
  },
  {
    name: 'Transportation',
    value: 0.2,
    fill: 'pink',
    children: TransitEmissions
  },
  {
    name: 'Solid Waste',
    desc: (
      <>
        Transit of solid waste & recycling, processing, &{' '}
        <a href="https://wastebits.com/locator/location/advanced-disposal-greentree-landfill">
          landfill
        </a>{' '}
        operations
      </>
    ),
    value: 0.06,
    fill: 'brown'
  },
  {
    name: 'Agriculture',
    desc: 'Livestock emissions, fertilizer, & park land maintenance',
    value: 0.05,
    fill: 'green'
  },
  {
    name: 'Water',
    desc: 'Water treatment plant electricity/propane & emissions',
    value: 0.02,
    fill: 'azure'
  }
]

export const EmissionsChart = () => <Chart data={data} />

const Item = ({ fill, value, name, desc, children: Viz = Fragment }) => (
  <Flex
    as="li"
    style={{ '--item-color': colors[fill] }}
    sx={{ alignItems: 'start', m: 0 }}
  >
    <Box
      as="span"
      sx={{
        display: 'inline-block',
        p: '5px',
        mr: 2,
        mt: 2,
        borderRadius: 'default',
        bg: 'var(--item-color)'
      }}
    />
    <Box>
      <Text as="strong" color="text" children={name} />
      <Text as="span" color="muted" ml={1} children={`(${value * 100}%)`} />
      <Text
        as="p"
        sx={{ color: 'muted', m: 0, a: { color: 'var(--item-color)' } }}
        children={desc}
      />
      <Viz />
    </Box>
  </Flex>
)

export const EmissionsLegend = () => (
  <Grid
    as="ol"
    gap={3}
    columns={[null, 2]}
    sx={{ p: 0, lineHeight: 'caption' }}
  >
    {data.map(row => (
      <Item {...row} />
    ))}
  </Grid>
)
