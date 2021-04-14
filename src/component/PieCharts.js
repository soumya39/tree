import React from 'react';

import {
  Pie,
  PieChart,
  Tooltip,
} from 'recharts';

import { Paper } from '@material-ui/core';

const PieCharts=()=> {
    const data01 = [
        {name:'Supplier-1', value:20000},
        {name:'Supplier-2', value:50000},
        {name:'Supplier-3', value:80000},
        {name:'Supplier-4', value:250000}
    ]
    return (
        <>
                

      <Paper>
              <PieChart width={500} height={300} style={{marginTop:20}}>
        <Pie data={data01} dataKey="value" cx={200} cy={200} outerRadius={60} fill="#8884d8" label />
        <Tooltip />
      </PieChart>
      </Paper>
        </>
    )
}

export default PieCharts
