import ColumnFiltering from './ColumnFiltering';

const EXCPQ_COLUMNS = [
    {
        Header: 'Matrix Ref No.',
        accessor: 'matrixRefNo',
        Filter: ColumnFiltering,
        Cell: e => <a href={'http://localhost:3000/indvPaymentdetails/'+e.value} target='_blank' rel='noopener'> {e.value} </a>
    },
    // {Header:'Matrix/File Ref',accessor:'matrix_file_ref'},
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
        Header: 'Initiator Name/Date Time',
        accessor: 'iniatorName'
    },
    {
        Header: 'Remarks',
        accessor: 'remarks'
    }
]
export default EXCPQ_COLUMNS