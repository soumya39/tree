import React from 'react';

import MaterialTable from 'material-table';
import {
  BrowserRouter,
  Link,
  Route,
} from 'react-router-dom';

import navigate from '../navigate';
import { DATA } from './indiv-data2';

export const MTable2 = () => {

  const data = [
    { matrix_no: 'Aman', age: 20 },
    { matrix_file_ref: 'B', age: 20 },
    { sub_product: 'c', age: 20 },
    { debit_accno: 'd', age: 20 },
    { benificiary_name: 'c', age: 20 },
    { value_date: 'd', age: 20 },
    { payment_currency: 'Aman', age: 20 },
    { payment_amnt: 'B', age: 20 },
    { customer_ref: 'c', age: 20 },
    { iniator_name_dtval: 'd', age: 20 },
    { last_approved_by: 'c', age: 20 }
  ]
  const columns = [
    {
      title: 'Matrix File Ref No',
      field: 'matrix_file_ref',

      render: rowData => <BrowserRouter>
        <Link to="/navigate">{rowData.matrix_file_ref}</Link>
        <Route exact path="/navigate" component={navigate} />
      </BrowserRouter>,


      cellStyle: {
        width: 180,
        minWidth: 180,
        padding:'none',
        },
        headerStyle: {
        width: 180,
        minWidth: 180
        },filtering: false,
    },
    //{title:'Matrix/File Ref',field:'matrix_file_ref'},
    { title: 'Sub Product', field: 'sub_product', filtering: false,
    cellStyle: {
      width: 200,
      minWidth: 200,
      padding:'none',
      },
      headerStyle: {
      width: 200,
      minWidth: 200,
      padding:'0px',
      }
  },
    { title: 'Debit Account No', field: 'debit_accno', filtering: false,    cellStyle: {
      width: 200,
      minWidth: 200
      },
      headerStyle: {
      width: 200,
      minWidth: 200
      } },
    { title: 'Benificiary Name', field: 'benificiary_name', filtering: false,     cellStyle: {
      width: 200,
      minWidth: 200
      },
      headerStyle: {
      width: 200,
      minWidth: 200
      }},
    { title: 'Value Date', field: 'value_date', filtering: false,     cellStyle: {
      width: 150,
      minWidth: 150
      },
      headerStyle: {
      width: 150,
      minWidth: 150
      }},
    { title: 'Payment Currency', field: 'payment_currency', filtering: false,    cellStyle: {
      width: 180,
      minWidth: 180
      },
      headerStyle: {
      width: 180,
      minWidth: 180
      } },
    { title: 'Payment Amount', field: 'payment_amnt', filtering: false,    cellStyle: {
      width: 180,
      minWidth: 180
      },
      headerStyle: {
      width: 180,
      minWidth: 180
      } },
    { title: 'Customer Reference', field: 'customer_ref', filtering: false,     cellStyle: {
      width: 200,
      minWidth: 200
      },
      headerStyle: {
      width: 200,
      minWidth: 200
      }},
    { title: 'Iniator Name/Date Time', field: 'iniator_name_dtval', filtering: false,    cellStyle: {
      width: 220,
      minWidth: 220
      },
      headerStyle: {
      width: 220,
      minWidth: 220
      }},
    { title: 'Last Approved By', field: 'last_approved_by', filtering: false,     cellStyle: {
      width: 180,
      minWidth: 180
      },
      headerStyle: {
      width: 180,
      minWidth: 180
      }},


  ]
  return (
    <div>
      <MaterialTable size='small' padding-left='0' style={{ marginTop: 20 }} title="" columns={columns} data={DATA}
        localization={{ toolbar: { searchPlaceholder: 'Mashreq File Ref. No.:' } }}

        options={{
          rowStyle: {
            backgroundColor: '#EEE',
          },
          headerStyle: {
            backgroundColor: '#25bafa',
            color: '#FFF',

          },
          selection: false
          ,
          exportButton: false,
          FilterRow: true,
          searchFieldAlignment: "left",
          searchFieldVariant: "outlined",
          showTitle: true,
          paginationType: 'normal',
          filtering: true,
          headerStyle: {
            backgroundColor: '#01579b', color: '#FFF',
            fontSize: '14', fontSmooth: 'auto', fontStyle: 'normal',
            height: '20px',
            fontFamily: 'sans-serif',
            textOverflow: 'unset',
            overflow: 'auto',
            align: 'left',
           
          },

        }} />
      {/*  <ActionBtn/> */}

    </div>
  )
}

