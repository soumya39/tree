import React, {
  useEffect,
  useMemo,
  useState,
} from 'react';

import axios from 'axios';
import {
  usePagination,
  useTable,
} from 'react-table';
import {
  Button,
  Table,
} from 'reactstrap';

import { DocumentColumns } from './DocumentColumns';

export const DocumentTable = () => {

    const columns = useMemo(()=> DocumentColumns,[])
   // const data= useMemo(()=> MOCK_DATA, [])
    const[data , setData] =  useState([]);
 
        const getListDocumnetsFromServer = () =>{
            axios.get(`http://localhost:3001/documents`)
        .then((response)=>{
            console.log('loading....')
            setData(response.data);
            console.log(response.data);
        } ,
        (error)=>{
            console.log(error);
        }
        );
        };
   
        useEffect(() =>{
            getListDocumnetsFromServer();
        },[]);

    


    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        page,
        nextPage,
        previousPage,
        canNextPage,
        canPreviousPage,
        pageOptions,
        state,
        gotoPage,
        pageCount,
        setPageSize,
        prepareRow
    } = useTable({
        columns,
        data
    },
    usePagination)

    const {pageIndex, pageSize} = state
    
    return (
        <>
       
        <Table size='sm' striped={true} style={{marginTop: 3}} {...getTableProps()}>
            <thead style={{background:'#254a9e', color:'white'}}>
                {headerGroups.map((headerGroup) =>
                <tr {...headerGroup.getHeaderGroupProps()}>
                    {headerGroup.headers.map((column) => (
                    <th {...column.getHeaderProps()}>{column.render('Header')}</th>
                    
                    ))}
                    </tr>
                )}               
            
            </thead>
            <tbody {...getTableBodyProps()}>
                
                {page.map((row)=> {
                    prepareRow(row)
                    return (
                    <tr {...row.getRowProps()}>
                        {row.cells.map((cell) => {
                            return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                })}
                </tr>
                )
            })}
            </tbody>
    
        </Table>
        <div>
        <span>
            page{' '}
            <strong>
                {pageIndex + 1} of {pageOptions.length}
            </strong>{' '}
            </span>
            <span>
                 Go to page:{' '}
                <input
                type='number'
                defaultValue={pageIndex + 1}
                onChange={(e) => {
                    const pageNumber = e.target.value ? Number(e.target.value)-1 : 0
                    gotoPage(pageNumber)
                }}
                style={{width: '50px'}}
                />
            </span>
            <select
            value={pageSize}
            onChange={(e) => setPageSize(Number(e.target.value))}>
                {[10,25,50].map((pageSize)=> (
                    <option key={pageSize} value={pageSize}>Show {pageSize}</option>
                ))}
            </select>
            <Button style={{background:'#254a9e', color:'white'}} size="sm" onClick={()=> gotoPage(0)} disabled={!canPreviousPage}>{'<<'}</Button>
            <Button style={{background:'#254a9e', color:'white'}} size="sm" onClick={()=> previousPage()} disabled={!canPreviousPage}>Previous</Button>
            <Button style={{background:'#254a9e', color:'white'}} size="sm" onClick={()=> nextPage()} disabled={!canNextPage}>Next</Button>
            <Button style={{background:'#254a9e', color:'white'}} size="sm" onClick={()=> gotoPage(pageCount-1)} disabled={!canNextPage}>{'>>'}</Button>
        </div>
        
        </>
    )
}
