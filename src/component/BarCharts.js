import React from 'react';

import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';

import { Paper } from '@material-ui/core';

const BarCharts = () => {
  const data = [
    { name: 'Supplier-1', value: 20000 },
    { name: 'Supplier-2', value: 50000 },
    { name: 'Supplier-3', value: 80000 },
    { name: 'Supplier-4', value: 250000 }
  ]
  return (
    <>
<Paper >
<BarChart
        width={500}
        height={300}
        data={data}
        margin={{
          top: 20,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="value" stackId="a" fill="#8884d8" />
      </BarChart>
</Paper>
    </>
  )
}

export default BarCharts
