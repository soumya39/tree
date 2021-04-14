const SEARCH_RESULT_COLUMNS = [
    {
        Header: 'Matrix Ref No.',
        accessor: 'matrix_no',
        Cell: e => <a href=''> {e.value} </a>
    },
    {
        Header: 'Matrix File Ref No.',
        accessor: 'matrix_file_ref',
        Cell: e => <a href=''> {e.value} </a>
    },
    {
        Header: 'Sub Product',
        accessor: 'sub_product'
    },

    {
        Header: 'Debit Account Number',
        accessor: 'debit_accno'
    },
    {
        Header: 'Beneficiary Name',
        accessor: 'benificiary_name'
    },
    {
        Header: 'Value Date',
        accessor: 'value_date'
    },
    {
        Header: 'Payment Currency',
        accessor: 'payment_currency'
    },
    {
        Header: 'Payment Amount',
        accessor: 'payment_amnt'
    },
    {
        Header: 'Customer Reference',
        accessor: 'customer_ref'
    },
    {
        Header: 'Initiator Name/Date & Time',
        accessor: 'iniator_name_dtval'
    },
    {
        Header: 'Remarks',
        // accessor: 'last_approved_by'
    }
]
export default SEARCH_RESULT_COLUMNS