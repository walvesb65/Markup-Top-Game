import React from 'react';
import useReport from '../../../hooks/useReport';
import { LineChart, Line, XAxis, YAxis, Tooltip } from 'recharts';
import './styles.scss';

export default function ChartSales() {

  const { Historic } = useReport()

  return (
    <div className="chart">
      <h1>Histórico</h1>
      <LineChart width={650} height={300} data={Historic} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
        <Line dataKey="Sales" stroke="#fff" strokeWidth={4}/>
        <XAxis padding={{left: 30 , right: 30}} dataKey="Year" stroke="#fff" style={{ fontWeight: "bold" }} />
        <YAxis stroke="#fff" axisLine={false} style={{ fontWeight: "bold" }} />
        <Tooltip itemStyle={{ color: "black" }}/>
      </LineChart>
    </div>
  )
}
