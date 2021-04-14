import React, { useMemo } from 'react';

import {
  useFilters,
  useGlobalFilter,
  usePagination,
  useSortBy,
  useTable,
} from 'react-table';
import {
  Button,
  Table,
} from 'reactstrap';

import EXCPQ_COLUMNS from './ExcpCol';
import GlobalFiltering from './GlobalFiltering';
import { DATA } from './indiv-data';

const tblBulkPayemnts = () => {
    const columns = useMemo(() => EXCPQ_COLUMNS, [])
    const data = useMemo(() => DATA, [])

    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        rows,
        prepareRow,
        state,
        setGlobalFilter,
        page,
        nextPage,
        previousPage,
        canNextPage,
        canPreviousPage,
        pageOptions,
        gotoPage,
        pageCount,
        setPageSize,
    } = useTable({ columns, data }, useGlobalFilter, useFilters, useSortBy, usePagination)
    const {pageIndex , pageSize} = state
    const { globalFilter } = state

    return (
        <div>
            <div style={{ marginLeft: 10 }}><GlobalFiltering filter={globalFilter} setFilter={setGlobalFilter} style={{ marginLeft: '10' }} /></div>
            <Table size='sm' striped={false} striped={true} bordered style={{ marginTop: 20, }} {...getTableProps()}>
                <thead class="thead-dark">
                    {
                        headerGroups.map((headerGroup) => (
                            <tr {...headerGroup.getHeaderGroupProps()}>
                                {
                                    headerGroup.headers.map((column) => (
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
                        page.map((row) => {
                            prepareRow(row)
                            return (
                                <tr {...row.getRowProps()}>
                                    {
                                        row.cells.map((cell) => {
                                            return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                                        })
                                    }

                                </tr>
                            )
                        })
                    }
                </tbody>
            </Table>
            <div style={{textAlign:'center'}}>
                <span>
                    Page{' '}
                    <strong>
                        {pageIndex+1} of {pageOptions.length}
                    </strong>{' '}
                </span>
                <span>
                    | Go To Page:{' '}
                    <input type="number" defaultValue={pageIndex+1} onChange={(e)=>{
                        const pageNumber = e.target.value ? Number(e.target.value)-1:0
                        gotoPage(pageNumber)                        
                    }} 
                        style={{width:'50px', padding:'2',}}/>{' '}
                </span>
                <select value={pageSize} onChange={(e)=>setPageSize(Number(e.target.value))}>
                        {[10, 20, 50].map((pageSize)=>(
                        <option key={pageSize} value={pageSize}>
                                Show {pageSize}
                        </option>))}
                </select>
                <Button className="bg-dark" color="secondary" size="sm" onClick={()=>gotoPage(0)} disabled={!canPreviousPage}>{'<<'}</Button>{' '}
                <Button className="bg-dark" color="secondary" size="sm" onClick={()=>previousPage()} disabled={!canPreviousPage}>previous</Button>{' '}
                <Button color="secondary" size="sm" onClick={()=>nextPage(pageCount-1)} disabled={!canNextPage}>next</Button>{' '}
                <Button className="bg-dark" color="secondary" size="sm" onClick={()=>gotoPage(pageCount-1)} disabled={!canNextPage}>{'>>'}</Button>
            </div>
        </div>
    )
}

export default tblBulkPayemnts
