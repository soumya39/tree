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

  const [formData, setState] = useState(
    {
      matrixFileRefNo: '',
      subProduct: '',
      debitAccountNumber: '',
      benificiaryName: '',
      valueDate: '',
      paymentCurrency: '',
      paymentAmount: '',
      customerRef: '',
      iniatorName: '',
      remarks: '',
      managementCompany: '',
      budgetYear: '',
      invoiceYear: '',
      availableBalance: ''
    }
  );
  /* 
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
    ]); */
  const loadMatrixFileDetails = (ids) => {
    axios.get(`http://localhost:3001/exception/queue/bulkpayments/get/${ids}`).then(
      (response) => {
        console.info('Data get by this ID ' + `${id}`)
        console.info(' Response Data loaded here: ' + JSON.stringify(response.data));
        // setData(response.data);
        console.info('now data ...state changed ')
        setState({
          ...formData,
          matrixFileRefNo: response.data.matrixFileRefNo,
          subProduct: response.data.subProduct,
          debitAccountNumber: response.data.debitAccountNumber,
          benificiaryName: response.data.benificiaryName,
          valueDate: response.data.valueDate,
          paymentCurrency: response.data.paymentCurrency,
          paymentAmount: response.data.paymentAmount,
          customerRef: response.data.customerRef,
          iniatorName: response.data.iniatorName,
          remarks: response.data.remarks,
          managementCompany: response.data.managementCompany,
          budgetYear: response.data.budgetYear,
          invoiceYear: response.data.invoiceYear,
          availableBalance: response.data.availableBalance
        });

      }, (error) => {
        console.info(error)
      }
    )
  }

  useEffect(() => {
    console.info('calling loadMatrixFileDetails(id)')
    loadMatrixFileDetails(`${id}`);
  }, []);


  //creating function to send data to the server
  const putDataToServer = (ids, data) => {
    axios.put(`http://localhost:3001/exception/queue/bulkpayments/update/${ids}`, data)
      .then((response) => {
        console.log(response);
        console.info(' sending form data here: ' + JSON.stringify(data));
      }, (error) => {
        console.log(error);
        alert('failed to update!')
        console.info(' sending form data failed here: ' + JSON.stringify(data));
      });
  };

  const handleForm = (event) => {
    putDataToServer(id, formData);
    event.preventDefault();
  }

  const inputEvent = (e) => {
    console.info("inputEvent called : setForm Data")
    console.info(e.target.value);
    setState({
      ...formData,
      [e.target.name]: e.target.value,
    });

    /*     const { name, value } = event.target;
    
        setData((oldData) => {
          console.info('old data : ' + oldData);
          return {
            ...oldData, [name]: value,
          };
        }); */
  }
  return (

    <div>
      <CardBody>
        <Form onSubmit={handleForm}>
          <FormGroup row>
            <Label for="matrixFileRefNo" sm={2}>Matrix File Reference No.</Label>
            <Col sm={3}>
              <Input size="sm" type="text" name="matrixFileRefNo" value={id} />
            </Col>
          </FormGroup>
          <FormGroup row>
            <Label for="managementCompany" sm={2}>Management Company</Label>
            <Col sm={3}>
              <Input size="sm" type="text" name="managementCompany" onChange={inputEvent} value={formData.managementCompany} />
            </Col>

            <Label for="BudgetYear:" sm={2}>Budget Year</Label>
            <Col sm={3}>
              <Input size="sm" type="text" name="budgetYear" onChange={inputEvent} value={formData.budgetYear} />
            </Col>
          </FormGroup>

          <FormGroup row>
            <Label for="DebitAccounrtNo:" sm={2}>Debit Account Number</Label>
            <Col sm={3}>
              <Input size="sm" type="number" name="debitAccountNumber" onChange={inputEvent} value={formData.debitAccountNumber} />
            </Col>
            <Label for="Beneficiary Name:" sm={2}>Invoice Year</Label>
            <Col sm={3}>
              <Input size="sm" type="number" name="invoiceYear" onChange={inputEvent} value={formData.invoiceYear} />
            </Col>
          </FormGroup>
          <FormGroup row>
            <Label for="MatrixRefNo:" sm={2}>Available Balance</Label>
            <Col sm={3}>
              <Input size="sm" type="number" name="availableBalance" onChange={inputEvent} value={formData.availableBalance} />
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