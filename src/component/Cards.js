import React from 'react';

import BarCharts from './BarCharts';
import PieCharts from './PieCharts';
import PieChartsMix from './PieChartsMix';

function Cards() {
    return (
<><h1 style={{marginTop:20}}>Supplier Report</h1>
<div class="card-columns card-columns-2" >
  <div class="card bg-light" style={{height:400,width:400}}>
    <div class="card-body text-center">
    <PieCharts />
    
    </div>
  </div>
  <div class="card bg-light">
    <div class="card-body text-center" style={{height:400,width:400}}>
    <PieChartsMix />
    </div>
  </div>

</div>

<div class="card-columns" >
  <div class="card bg-light" style={{height:400,width:400}}>
    <div class="card-body text-center">
    <BarCharts />
    
    </div>
  </div>
  <div class="card bg-light">
    <div class="card-body text-center" style={{height:400,width:400}}>
    <BarCharts />
    </div>
  </div>

</div>

</>
    )
}

export default Cards
