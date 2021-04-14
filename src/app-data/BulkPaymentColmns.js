const BULKPAYMENT_COLUMNS = [
    /* {
        Header: 'Matrix no',
        accessor: 'matrix_no',
        Filter: ColumnFiltering,
    } */,
    {Header:'Matrix File Ref No.',
    accessor:'matrixFileRefNo' ,
    Cell: e => <a href={'http://localhost:3000/bulkPaymentdetails/'+e.value} target='_blank' rel='noopener'> {e.value} </a>
    },

    {
        Header: 'Sub Product',
        accessor: 'subProduct'
    },

    {
        Header: 'Debit Account Number',
        accessor: 'debitAccountNumber'
    },
    {
        Header: 'Beneficiary Name',
        accessor: 'benificiaryName'
    },
    {
        Header: 'Value Date',
        accessor: 'valueDate'
    },
    {
        Header: 'Payment Currency',
        accessor: 'paymentCurrency'
    },
    {
        Header: 'Payment Amount',
        accessor: 'paymentAmount'
    },
    {
        Header: 'Customer Reference',
        accessor: 'customerRef'
    },
    {
        Header: 'Initiator Name/Date & Time',
        accessor: 'iniatorName'
    },
    {
        Header: 'Remarks',
        accessor: 'remarks'
    }
]
export default BULKPAYMENT_COLUMNS