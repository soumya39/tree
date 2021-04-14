import './mydiv.css';

import React from 'react';

import {
  Button,
  CardBody,
  CardTitle,
  Col,
  Form,
  FormGroup,
  Input,
  Label,
} from 'reactstrap';

import SearchResults from './SearchResults';

const Example = (props) => {
  return (
<>
<div >
      
        <CardTitle tag="h4" style={{marginLeft:3 , color:'blue',marginTop: 5}}> Transaction Search Criteria</CardTitle>
        <CardBody >

          <Form >
            <FormGroup row >
              <Label for="MatrixRefNo:" sm={2}>Matrix Ref No:</Label>
              <Col sm={2}>
                <Input size="sm" type="text" name="Matrix Ref No" />
              </Col>
              <Label for="Beneficiary Name:" sm={2}>Matrix File Ref No:</Label>
              <Col sm={2}>
                <Input size="sm" type="text" name="Matrix Ref No" />
              </Col>
              <Label for="Customer Ref" sm={2}>Customer Ref:</Label>
              <Col sm={2}>
                <Input size="sm" type="text" name="Matrix Ref No" />
              </Col>
            </FormGroup>

            <FormGroup row>
                 
            <Label for="Beneficiary Name:" sm={2}>Beneficiary Name:</Label>
              <Col sm={2}>
                <Input size="sm" type="text" name="Matrix Ref No" />
              </Col>

              <Label for="Product" sm={2}>Product:</Label>
              <Col sm={2}>
                <Input size="sm" type="select" name="select" id="exampleSelect">
                  <option>select</option>
                  <option>Dell</option>
                  <option>Lenovo</option>
                  <option>4</option>
                  <option>5</option>
                </Input>
              </Col>
              <Label for=" subProduct" sm={2}>Sub Product:</Label>
              <Col sm={2}>
                <Input size="sm" type="select" name="select" id="exampleSelect">
                  <option>select</option>
                  <option>Mouse</option>
                  <option>ram</option>
                  <option>Battery</option>
                  <option>screen</option>
                </Input>
              </Col>
            </FormGroup>

            <FormGroup row>
              <Label for="Initiation Date From" sm={2}>Initiation Date From:</Label>
              <Col sm={2}>
                <Input size="sm" type="date" name="date" id="exampleDate" placeholder="date placeholder"
                />
              </Col>
              <Label for="Initiation Date To" sm={2}>Initiation Date To:</Label>
              <Col sm={2}>
                <Input size="sm" type="date" name="date" id="exampleDate" placeholder="date placeholder"
                />
              </Col>
              <Label for="Amount From" sm={2}>Amount From:</Label>
              <Col sm={2}>
                <Input size="sm" type="text" name="emaMatrix Ref No" />
              </Col>
            </FormGroup>

            <FormGroup row>
              
              <Label for="Amount To" sm={2}>Amount To:</Label>
              <Col sm={2}>
                <Input size="sm" type="text" name="emaMatrix Ref No" />
              </Col>
              <Label for="Sortby" sm={2}>Account Number:</Label>
              <Col sm={2}>
              <Input size="sm" type="Number" name="Account Number" />
              </Col>
              <Label for="Sortby" sm={2}>Sort By:</Label>
              <Col sm={2}>
                <Input size="sm" type="select" name="select" id="Sortby">
                  <option>select</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                  <option>5</option>
                </Input>
              </Col>
             
            </FormGroup>
            <FormGroup row>
            <Label for="Sortby" sm={2}>Sort Order:</Label>
              <Col sm={2}>
                <Input size="sm" type="select" name="select" id="Sortby">
                  <option>select</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                  <option>5</option>
                </Input>
              </Col>
              <Label for="Sortby" sm={2}>Management Company Name:</Label>
              <Col sm={2}>
              <Input size="sm" type="text" name="emaMatrix Ref No" />
              </Col>
              <Label for="Sortby" sm={2}>Building Name:</Label>
              <Col sm={2}>
              <Input size="sm" type="text" name="Building Name" />
              </Col>
            </FormGroup>
            <FormGroup row>
            <Label for="Sortby" sm={2}>Status:</Label>
              <Col sm={2}>
                <Input size="sm" type="select" name="select" id="Sortby">
                  <option>Exception</option>
                  <option>Rejected</option>
                  <option>Approved</option>
                </Input>
              </Col>
             
            <Label for="currency" sm={2}>Currency:</Label>
              <Col sm={2}>
                <Input size="sm" type="select" name="select" id="exampleSelect">
                  <option>select</option>
                  <option>rupee</option>
                  <option>doller</option>
                  <option>dirham</option>
                </Input>
              </Col>
            </FormGroup>
            <Col sm={{ size: 10, offset: 10 }} style={{marginBottom:5,maxWidth:"18%"}}>
              <Button size="sm" color="primary" style={{ marginBottom: 20 }}>Search</Button>
              <Button size="sm" color="primary" type="reset" className="ml-1" style={{marginBottom:20}} >Reset</Button>
            </Col>
          </Form>
        </CardBody>
    </div>
    <SearchResults/>
</>
  );
};

export default Example;