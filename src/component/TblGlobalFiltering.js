import React, { useMemo } from 'react';

import {
  useSortBy,
  useTable,
} from 'react-table';
import { Table } from 'reactstrap';

import EXCPQ_COLUMNS from './ExcpCol';
import { DATA } from './indiv-data';

const TblGlobalFiltering = () => {
    const columns = useMemo(() => EXCPQ_COLUMNS, [])
    const data = useMemo(() => DATA, [])

    const {
        getTableProps ,
        getTableBodyProps,
        headerGroups,
        rows,
        prepareRow ,
    } = useTable({columns, data },useSortBy)

    return (
        <div>
            <Table bordered style={{marginTop:20}} {...getTableProps()}> 
                <thead>
                    {
                        headerGroups.map((headerGroup)=>(
                            <tr {...headerGroup.getHeaderGroupProps()}>
                                {
                                    headerGroup.headers.map((column)=>(
                                        <th {...column.getHeaderProps(column.getSortByToggleProps())}>
                                            {column.render('Header')}
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

export default TblGlobalFiltering
