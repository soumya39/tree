

export const DocumentColumns=[
    {
        Header: 'Document Id',
        accessor: 'documentId',
        Cell: e =><a href={"http://localhost:3000/documentpath/"+e.value} target='_blank' rel='noopener'> {e.value} </a>
    },
    {
        Header: 'Document Name',
        accessor: 'documentName'
    },
    {
        Header: 'Document Type',
        accessor: 'documentType'
    },
    
    {
        Header: 'Expires On',
        accessor: 'expiresOn'
    }
    
]