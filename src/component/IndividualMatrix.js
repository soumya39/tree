import '../App.css';

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
  Col,
  Container,
  Form,
  FormGroup,
  Input,
  Label,
  Row,
  Table,
} from 'reactstrap';

import { DocumentTable } from './DocumentTable';

<switch>
  <Route path='/indvPaymentdetails/:id' children={<Child />} />
</switch>

const IndividualMatrix = (props) => {
  
  let { id } = useParams();
  console.log(id)

  const [formData, setState] = useState({

  });

  const loadMatrixFileDetails = (ids) => {
    axios.get(`http://localhost:3001/Matrixinfo/${ids}`)
      .then((response) => {
        console.log('Response Data loaded here' + JSON.stringify(response.data));
        console.info('see >>>> ' + response.data.debitAccountNo)

        setState({
          ...formData,
          matrixRefNo:id,
          debitAccountNo: response.data[0].debitAccountNo,
          valueDate: response.data[0].valueDate,
          customerReference: response.data[0].customerReference,
          beneficiaryAccountNo: response.data[0].beneficiaryAccountNo,
          beneficiaryName: response.data[0].beneficiaryName,
          beneficiaryType: response.data[0].beneficiaryType,
          debitCcyAmount: response.data[0].debitCcyAmount,
          amountCcyAmount: response.data[0].amountCcyAmount,
          initiationDate: response.data[0].initiationDate,
          secondaryInformation: response.data[0].secondaryInformation,
          debitAccountCurrency: response.data[0].debitAccountCurrency,
          budgetYear: response.data[0].budgetYear,
          invoiceYear: response.data[0].invoiceYear,
          remarks: response.data[0].remarks,
        });
      },
        (error) => {
          console.log(error);
        }
      )
  }
  useEffect(() => {
    loadMatrixFileDetails(`${id}`);
  }, [])

  const inputEvent = (e) => {
    console.info(e.target.value);
    setState({
      ...formData,
      [e.target.name]: e.target.value,
    });
  }

  const putData=(ids , formData)=>{
   console.log(JSON.stringify(formData))
   axios.put(`http://localhost:3001/PaymentUpdate/${ids}` , formData)
   .then(response=>{
  if(response!=null)
  {
    alert('Data Successfully Updated: ')
  }
   } , (error=>{
    alert('post error '+error.message+" /"+id)
   }))
  }

  const updateFormData = (e) => {
    putData(id, formData);
    e.preventDefault();
  }

  return (
    <div >
      
      <h5 className="ml-2" style={{ color: 'red' }}>{formData.remarks}</h5>
      <Col>
        <div >

          <Row>
            <Col style={{ background: '#254a9e', height: '30px' }}>
              <h4 className="text-center" style={{ marginTop: 5 }} style={{ color: 'white', marginRight: '13%' }}>Debit Details</h4>
            </Col>
            <Col style={{ background: '#254a9e', height: '30px' }}>
              <h4 style={{ color: 'white', marginLeft: '23%' }}> Beneficiary Details</h4>
            </Col>
          </Row>
          <Table borderless size="sm">

            <tbody>
              <tr>

                <td>Debit Account Number</td>
                <td>{formData.debitAccountNo}</td>
                <td>Beneficiary Account Number</td>
                <td>{formData.beneficiaryAccountNo}</td>

              </tr>
              <tr>

                <td>Value Date</td>
                <td>{formData.valueDate}</td>
                <td>Beneficiary Name</td>
                <td>{formData.beneficiaryName}</td>

              </tr>
              <tr>

                <td>Customer Reference</td>
                <td>{formData.customerReference}</td>
                <td>Beneficiary Type</td>
                <td>{formData.beneficiaryType}</td>
              </tr>

            </tbody>
          </Table>
        </div>

      </Col>


      <Form onSubmit={updateFormData}>
        <Col style={{ background: '#254a9e', height: '30px' }}>
          <h4 className="text-center" style={{ color: 'white' }}>Payment Details</h4>
        </Col>

        <Col>
          <FormGroup row>
            <Label sm={2} style={{ fontWeight: 'bold' }}>Pay By</Label>
            <Label className="my-1" style={{ fontWeight: 'bold' }}>Debit Account Currency</Label>
          </FormGroup>
        </Col>

        <Col>
          <FormGroup row>
            <Label sm={2}>Debit CCY/Amount</Label>

            <Label sm={2}>{formData.debitAccountCurrency}</Label>
            <Col sm={1}>
              <Input size="sm" name='debitCcyAmount' type="text" defaultValue={formData.debitCcyAmount} onChange={inputEvent} />
            </Col>

            <Label style={{ marginLeft: '7%' }}>Budget Year</Label>
            <Col sm={1}>
              <Input size="sm" name='budgetYear' type="text" defaultValue={formData.budgetYear} onChange={inputEvent} required />
            </Col>
          </FormGroup>
        </Col>

        <Col>
          <FormGroup row>
            <Label sm={2}>Amount CCY/Amount</Label>

            <Label sm={2}>{formData.debitAccountCurrency}</Label>
            <Col sm={1}>
              <Input size="sm" name='amountCcyAmount' type="text" defaultValue={formData.amountCcyAmount} onChange={inputEvent} />
            </Col>

            <Label style={{ marginLeft: '7%' }}>Invoice Year</Label>
            <Col sm={1}>
              <Input size="sm" name='invoiceYear' type="text" defaultValue={formData.invoiceYear} onChange={inputEvent} required />
            </Col>
          </FormGroup>
        </Col>

        <Col>
          <FormGroup row>
            <Label sm={2}>Initiation Date</Label>

            <Label sm={2}>{formData.initiationDate}</Label>

          </FormGroup>
        </Col>

        <Col>
          <FormGroup row>
            <Label sm={2}>Secondary Information</Label>
            <Col sm={1}>
              <Input size="sm" type="text" name='secondaryInformation' defaultValue={formData.secondaryInformation} onChange={inputEvent} required>

              </Input>
            </Col>
          </FormGroup>
        </Col>

        <Container className="text-center">
          <Button type="submit" style={{ background: '#254a9e' }}>Update</Button>
        </Container>
      </Form>
                &nbsp;

      <div className="App">
        <h4 className="text-center" style={{ color: 'white', background: '#254a9e', height: "30px" }}>Document Details</h4>

        <DocumentTable />
      </div>
      

    </div>
  )

};

function Child() {
  let { id } = useParams();
  return (
    <div>
    </div>
  )

}
export default IndividualMatrix;

