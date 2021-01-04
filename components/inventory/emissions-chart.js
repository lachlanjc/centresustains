import { Grid, Box, Text } from 'theme-ui'
import Chart from './chart'

const data = [
  { name: 'Transportation', value: 0.2, fill: 'pink' },
  { name: 'Solid Waste', value: 0.06, fill: 'brown' },
  { name: 'Agriculture', value: 0.05, fill: 'green' },
  { name: 'Water', value: 0.02, fill: 'azure' },
  { name: 'Energy', value: 0.67, fill: 'yellow' }
]

export const EmissionsChart = () => <Chart data={data} />

const EmissionsInfographic = () => (
  <Grid
    columns={[null, 'auto auto 1fr auto']}
    sx={{ alignItems: 'center', justifyContent: 'center' }}
  >
    <Box sx={{ textAlign: 'center' }}>
      <Text as="strong" sx={{ display: 'block', fontSize: [2, 3, 4] }}>
        824,209
      </Text>
      <Text as="span" variant="caption">
        MT CO
        <sub>2</sub>e
      </Text>
    </Box>
    <Text sx={{ fontSize: 128, fontWeight: 'body', color: 'muted', display: ['none', 'block'] }}>
      {'{'}
    </Text>
    <EmissionsChart />
    <Text sx={{ fontSize: 128, color: 'muted', display: ['none', 'block'] }}>
      {'}'}
    </Text>
  </Grid>
)

export default EmissionsChart // Infographic
