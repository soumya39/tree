import React from 'react';

import MaterialTable from 'material-table';

import { REPORT } from '../app-data/report_data';

export const ReportTable=()=> {
   
    const data=[
        {mnanagement_comp:'Aman',age:20},
        {supplier:'B',age:20},
        {budget_year:'c',age:20},
        {invoice_year:'d',age:20}
    ]
    const columns=[
        {title:'Management Company',field:'mnanagement_comp'},
        {title:'Supplier',field:'supplier'} ,
        {title:'Budget Year',field:'budget_year'},
        {title:'Invoice Year',field:'invoice_year'} 
    ]
    return (
        <div>
            <MaterialTable  hover={true} style={{marginTop:20}} title="" columns={columns} data={REPORT}  
               options={{
                rowStyle: {
                    backgroundColor: '#EEE',
                  },
                headerStyle: {
                  backgroundColor: '#01579b',
                  color: '#FFF'
                } ,
                selection:false
                ,
                exportButton :false,
                search:false,
                tableLayout:'fixed'
                
              }}/>
        </div>
    )
}

