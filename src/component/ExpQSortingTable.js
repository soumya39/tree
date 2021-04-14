import React, { useMemo } from 'react';

import {
  useFilters,
  useGlobalFilter,
  useSortBy,
  useTable,
} from 'react-table';
import { Table } from 'reactstrap';

import EXCPQ_COLUMNS from './ExcpCol';
import GlobalFiltering from './GlobalFiltering';
import { DATA } from './indiv-data';

const ExpQSortingTable = () => {
    const columns = useMemo(() => EXCPQ_COLUMNS, [])
    const data = useMemo(() => DATA, [])

    const {
        getTableProps ,
        getTableBodyProps,
        headerGroups,
        rows,
        prepareRow ,
        state ,
        setGlobalFilter ,
    } = useTable({columns, data },useGlobalFilter ,useFilters,useSortBy )

    const {globalFilter} = state

    return (
        <div>
            <div style={{marginLeft:10}}><GlobalFiltering filter={globalFilter} setFilter={setGlobalFilter} style={{marginLeft:'10'}}/></div>
            <Table size='sm' striped={false}  striped={true} bordered style={{marginTop:20 , }} {...getTableProps()}> 
                <thead class="thead-dark">
                    {
                        headerGroups.map((headerGroup)=>(
                            <tr {...headerGroup.getHeaderGroupProps()}>
                                {
                                    headerGroup.headers.map((column)=>(
                                        <th {...column.getHeaderProps(column.getSortByToggleProps())}> {column.render('Header')}
                                            
                                            
                                            <span>
                                                {
                                                    column.isSorted ? (column.isSortedDesc ? ' ⬇️' : ' ⬆️') : ''
                                                }
                                            </span>
                                        </th>
                                    ))
                                }
                               
                            </tr>
                        ))
                    }
                </thead>
                <tbody {...getTableBodyProps()}>
                    {
                       rows.map((row)=>{
                           prepareRow(row)
                           return(
                               <tr {...row.getRowProps()}>
                                   {
                                       row.cells.map((cell)=>{
                                            return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                                       })
                                   }
                                   
                               </tr>
                           )
                       })
                    }
                </tbody>
            </Table>
        </div>
    )
}

export default ExpQSortingTable
