import Chart from './chart'

const data = [
  { name: 'Forests', value: 0.49, acres: 47052, fill: 'green' },
  { name: 'Agriculture', value: 0.26, acres: 25169, fill: 'brown' },
  { name: 'Residential', value: 0.12, acres: 11165, fill: 'azure' },
  { name: 'Transportation', value: 0.04, acres: 4092, fill: 'yellow' },
  { name: 'Vacant', value: 0.03, acres: 2564, fill: 'muted' },
  { name: 'Recreation', value: 0.02, acres: 1939, fill: 'pink' },
  { name: 'Other', value: 0.02, acres: 5948, fill: 'secondary' }
]

const LandUseChart = () => <Chart data={data} />

export default LandUseChart
