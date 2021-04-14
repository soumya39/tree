import React from 'react';

import MaterialTable from 'material-table';

import { Link } from '@material-ui/core';

import { SEARCH_DATA } from '../app-data/Search-data';
import ActionBtn from './ActionBtn';

export const SearchResult=()=> {
   
    const data=[
        {matrix_no:'Aman',age:20},
        {matrix_file_ref:'B',age:20},
        {sub_product:'c',age:20},
        {debit_accno:'d',age:20},
        {benificiary_name:'c',age:20},
        {value_date:'d',age:20},
        {payment_currency:'Aman',age:20},
        {payment_amnt:'B',age:20},
        {customer_ref:'c',age:20},
        {iniator_name_dtval:'d',age:20},
        {last_approved_by:'c',age:20}
    ]
    const columns=[
        {title:'Matrix No',field:'matrix_no' ,
        render: rowData => <Link to="/{rowData.matrix_file_ref}">{rowData.matrix_no}</Link>,
        cellStyle: {
          width: 2,
          maxWidth: 2
        },
        headerStyle: {
          width: 2,
          maxWidth: 2
        }} ,
        {title:'Matrix File Ref No.',field:'matrix_file_ref' ,
        render: rowData => <Link to="/{rowData.matrix_file_ref}">{rowData.matrix_file_ref}</Link>, },
        {title:'Sub Product',field:'sub_product'} ,
        {title:'Debit Account No',field:'debit_accno'},
        {title:'Benificiary Name',field:'benificiary_name'} ,
        {title:'Value Date',field:'value_date'},
        {title:'Payment Currency',field:'payment_currency'} ,
        {title:'Payment Amount',field:'payment_amnt'},
        {title:'Customer Ref',field:'customer_ref'} ,
        {title:'Iniator Name/Date & Time',field:'iniator_name_dtval'},
        {title:'Last Approved By',field:'last_approved_by'} 

    ]
    return (
        <div>
           
            <MaterialTable  hover={true} style={{marginTop:-40}} title="" columns={columns} data={SEARCH_DATA}  
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
                tableLayout:'fixed',      
              }}/>
             <ActionBtn />
        </div>
    )
}

