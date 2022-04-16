import React from 'react';
import useReport from '../../../hooks/useReport';
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip } from 'recharts';

export default function ChartSales() {

  const { Historic } = useReport()

  return (
  <LineChart width={600} height={300} data={Historic} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
    <Line dataKey="Sales" stroke="#8884d8" />
    <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
    <XAxis dataKey="Year" />
    <YAxis />
    <Tooltip />
  </LineChart>
  )
}
