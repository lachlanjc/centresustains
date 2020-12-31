import { PieChart, Pie, Cell } from 'recharts'
import { colors } from '../../lib/theme'

const RADIAN = Math.PI / 180

const renderCustomizedLabel = ({
  cx,
  cy,
  midAngle,
  innerRadius,
  outerRadius,
  percent,
  name,
  fill,
  index
}) => {
  const sin = Math.sin(-RADIAN * midAngle)
  const cos = Math.cos(-RADIAN * midAngle)
  const ex = cx + (outerRadius + 24) * cos
  const ey = cy + (outerRadius + 32) * sin
  const textAnchor = cos >= 0 ? 'start' : 'end'

  return (
    <text
      x={ex}
      y={ey}
      textAnchor={textAnchor}
      fill={fill}
      dominantBaseline="central"
    >
      {name}
    </text>
  )
}

const SIZE = 384

const Infographic = ({ data }) => (
  <PieChart width={SIZE} height={SIZE}>
    <Pie
      data={data}
      cx={SIZE / 2}
      cy={SIZE / 2}
      innerRadius={64}
      outerRadius={96}
      label={renderCustomizedLabel}
      paddingAngle={3}
    >
      {data.map(entry => (
        <Cell fill={colors[entry.fill]} />
      ))}
    </Pie>
  </PieChart>
)

export default Infographic
