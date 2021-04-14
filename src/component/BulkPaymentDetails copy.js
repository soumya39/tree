import './mydiv.css';

import React, {
  useEffect,
  useState,
} from 'react';

import axios from 'axios';
import {
  Route,
  useParams,
} from 'react-router';
import {
  Button,
  CardBody,
  Col,
  Form,
  FormGroup,
  Input,
  Label,
} from 'reactstrap';

import BulkPaymentsDetailsTbl from './BulkPaymentsDetailsTbl';

<switch>
  <Route path='/bulkPaymentdetails/:id' children={<Child />} />
</switch>

const BulkPaymentDetails = (props) => {

  let { id } = useParams();
  console.log(id)

  let{matrixFileRefNo , subProduct, debitAccountNumber , 
    benificiaryName,valueDate,paymentCurrency,paymentAmount,
    customerRef,iniatorName,remarks,managementCompany,
    budgetYear,invoiceYear,availableBalance} = useState({});

  const [data, setData] = useState([
    {
      matrixFileRefNo: "",
      subProduct: "",
      debitAccountNumber: 0,
      benificiaryName: "",
      valueDate: "",
      paymentCurrency: "",
      paymentAmount: 0.0,
      customerRef: "",
      iniatorName: "",
      remarks: "",
      managementCompany: "",
      budgetYear: "",
      invoiceYear: '',
      availableBalance: 0.0
    }
  ]);
  const loadMatrixFileDetails = (ids) => {
    axios.get(`http://localhost:3001/exception/queue/bulkpayments/get/${ids}`).then(
      (response) => {
        console.info(' data loaded: ' + JSON.stringify(response.data));
        setData(response.data);
        
        console.info('data[] : ' + data.subProduct)
        console.log('data size : ' + data.length)
      }, (error) => {
        console.info(error)
      }
    )
  }

  useEffect(() => {
    console.info('in function :---->' + `${id}`)
    loadMatrixFileDetails(`${id}`);
    console.log('data[]= ' + JSON.stringify(data))
  }, []);


      //creating function to send data to the server
      const putDataToServer = (ids,data)=>{

        const data2 = {
          matrixFileRefNo: 111,
          subProduct: data.subProduct,
          debitAccountNumber:data.debitAccountNumber,
          benificiaryName: data.benificiaryName,
          valueDate: data.valueDate,
          paymentCurrency: data.paymentCurrency,
          paymentAmount: data.paymentAmount,
          customerRef: data.customerRef,
          iniatorName: data.iniatorName,
          remarks: data.remarks,
          managementCompany: data.managementCompany,
          budgetYear: data.budgetYear,
          invoiceYear: data.invoiceYear,
          availableBalance: data.availableBalance
        }

        const config = { headers: {
          'Access-Control-Allow-Origin':'*',
          'Content-Type': 'application/json;charset=UTF-8',
      } };
        axios.put(`http://localhost:3001/exception/queue/bulkpayments/update/2164781813`,data2)
        .then((response)=>{
            console.log(response);
           alert('details updated now!')
        }, (error)=>{
            console.log(error);
            alert('details failed to update!')
        } );
    };
    
  const handleForm = (event) => {
    alert('Updating.....' + JSON.stringify(data))
    putDataToServer({id}, data);
    event.preventDefault();
  }

  const inputEvent = (event) => {
    console.info("Hello")
    console.info(event.target.value);

    const { name, value } = event.target;

    setData((oldData) => {
      console.info('old data : ' + oldData);
      return {
        ...oldData, [name]: value,
      };
    });
  }
  return (

    <div>
      <CardBody>
        {console.info('Second Page : ' + JSON.stringify(useParams()).valueOf())}
        <Form onSubmit={handleForm}>
          <FormGroup row>
            <Label for="matrixFileRefNo" sm={2}>Matrix File Reference No.</Label>
            <Col sm={3}>
              <Input size="sm" type="text" name="matrixFileRefNo" defaultValue={id} />
            </Col>
          </FormGroup>
          <FormGroup row>
            <Label for="managementCompany" sm={2}>Management Company</Label>
            <Col sm={3}>
              <Input size="sm" type="text" name="managementCompany" onChange={inputEvent} defaultValue={data.managementCompany} />
            </Col>

            <Label for="BudgetYear:" sm={2}>Budget Year</Label>
            <Col sm={3}>
              <Input size="sm" type="text" name="budgetYear" onChange={inputEvent} defaultValue={data.budgetYear} />
            </Col>
          </FormGroup>

          <FormGroup row>
            <Label for="DebitAccounrtNo:" sm={2}>Debit Account Number</Label>
            <Col sm={3}>
              <Input size="sm" type="number" name="debitAccountNumber" onChange={inputEvent} defaultValue={data.debitAccountNumber} />
            </Col>
            <Label for="Beneficiary Name:" sm={2}>Invoice Year</Label>
            <Col sm={3}>
              <Input size="sm" type="number" name="invoiceYear" onChange={inputEvent} defaultValue={data.invoiceYear} />
            </Col>
          </FormGroup>
          <FormGroup row>
            <Label for="MatrixRefNo:" sm={2}>Available Balance</Label>
            <Col sm={3}>
              <Input size="sm" type="number" name="availableBalance" onChange={inputEvent} defaultValue={data.availableBalance} />
            </Col>
            <Col sm={{ size: 10, offset: 8 }} style={{ marginBottom: 5 }}>
              <Button size="sm" color="primary" style={{ marginBottom: 20 }} type='submit'>Update</Button>
              <Button size="sm" color="primary" type="reset" className="ml-1" style={{ marginBottom: 20 }} >Cancel</Button>
            </Col>
          </FormGroup>
        </Form>

      </CardBody>
      <BulkPaymentsDetailsTbl />

    </div>
  );
};
function Child() {
  let { id } = useParams();
  return (
    <div>

      <h4>id:{id}</h4>
    </div>
  )

}


export default BulkPaymentDetails;