import Chart from './chart'

const data = [
  { name: 'Transportation', value: 0.2, fill: 'pink' },
  { name: 'Solid Waste', value: 0.06, fill: 'brown' },
  { name: 'Agriculture', value: 0.05, fill: 'green' },
  { name: 'Water', value: 0.02, fill: 'azure' },
  { name: 'Buildings/Energy', value: 0.67, fill: 'yellow' }
]

export const EmissionsChart = () => <Chart data={data} />

export default EmissionsChart
