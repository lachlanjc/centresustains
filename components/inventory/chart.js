import { PieChart, Pie, Cell } from 'recharts'
import { colors } from '../../lib/theme'
import { useRef } from 'react'
import useComponentSize from '@rehooks/component-size'

const RADIAN = Math.PI / 180

const renderCustomizedLabel = ({
  cx,
  cy,
  midAngle,
  innerRadius,
  outerRadius,
  percent,
  acres,
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

const SIZE = 300

const Chart = ({ data }) => {
  const ref = useRef(null)
  const { width } = useComponentSize(ref)
  return (
    <div ref={ref}>
      <PieChart width={width} height={SIZE}>
        <Pie
          data={data}
          dataKey="value"
          cx={width / 2}
          cy={SIZE / 2}
          innerRadius={64}
          outerRadius={96}
          label={renderCustomizedLabel}
          paddingAngle={2}
        >
          {data.map(entry => (
            <Cell fill={colors[entry.fill]} stroke="none" key={entry.name} />
          ))}
        </Pie>
      </PieChart>
    </div>
  )
}

export default Chart
