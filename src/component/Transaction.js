import './btn.css';
import './label.css';
import './input.css';

import React from 'react';

import {
  Card,
  CardBody,
  Col,
  Container,
  Form,
  FormGroup,
  Input,
  Label,
} from 'reactstrap';

const Transaction = () => {
    return (
        <div>

            <Card>
                <CardBody>
                    <Form>
                        <h4 style={{ color: 'blue' }}>Tranaction Search Criteria</h4>

                        <FormGroup row style={{ marginTop: 24 }}>
                            <Label sm={2}>Matrix Ref No</Label>
                            <Col sm={5}>
                                <Input type="name" name="name" id="name" />
                            </Col>
                        </FormGroup>

                        <FormGroup row style={{ marginTop: 24 }}>
                            <Label sm={2}>Beneficiary Name</Label>
                            <Col sm={5}>
                                <Input type="name" name="name" id="name" />
                            </Col>
                        </FormGroup>
                        <FormGroup row style={{ marginTop: 24 }}>
                            <Label sm={2}>Customer Reference</Label>
                            <Col sm={5}>
                                <Input type="RefNo" />
                            </Col>
                        </FormGroup >



                        <Form inline style={{ marginTop: 25 }}>
                            <FormGroup >
                                <Label >Product</Label>

                                <Input id="Product" type="select" >
                                    <option>---Select---</option>
                                    <option>Admin</option>
                                    <option>Bill Transaction</option>
                                    <option>Card</option>
                                    <option>Collection</option>
                                    <option>Core Services</option>
                                    <option>Factoring</option>
                                    <option>Gurantees</option>
                                    <option>Import Transactions</option>
                                    <option>Investments</option>
                                    <option>Payments</option>
                                    <option>Transaction Tracker</option>
                                    <option>Trust receipt</option>
                                    <option>e-Dropbox</option>
                                </Input>

                            </FormGroup>
                            <CardBody >
                                <FormGroup id="product" >
                                    <Label >Sub Product</Label>

                                    <Input id="Subproduct" type="select" >
                                        <option>----Select----</option>
                                    </Input>

                                </FormGroup>
                            </CardBody>
                        </Form>
                        <Form inline style={{ marginTop: 30 }}>
                            <FormGroup id="date">
                                <Label >Initiaton Date To</Label>
                                <Col>
                                    <Input id="Dateto"
                                        type="date"
                                        name="date"
                                        placeholder="date placeholder" />

                                </Col>
                            </FormGroup>
                            <FormGroup>
                                <Label >Initiaton Date From</Label>

                                <Input id="Datefrom"
                                    type="date"
                                    name="date"
                                    placeholder="date placeholder" />


                            </FormGroup>
                        </Form>

                        <Form inline style={{ marginTop: 30 }}>
                            <FormGroup  >
                                <Label >Amount From</Label>
                                <Input id="Amountfrom" type="number" />
                            </FormGroup>

                            <FormGroup id="Amount">

                                <Label >Amount To</Label>
                                <Input id="Amountto" type="number" />
                            </FormGroup>

                        </Form>

                        <Form inline style={{ marginTop: 35 }}>
                            <FormGroup>
                                <Label >Sort By</Label>

                                <Input id="Sortby" type="select" >
                                    <option>--Select--</option>
                                    <option>Currency</option>
                                    <option>Amount</option>
                                    <option>Initiation Date</option>
                                </Input>

                            </FormGroup>


                            <FormGroup id="order">
                                <Label >Sort Order</Label>

                                <Input id="Sortorder" type="select" >
                                    <option>--Select--</option>
                                    <option>Ascending</option>
                                    <option>Descending</option>
                                </Input>

                            </FormGroup>

                        </Form>
                    </Form>

                    <Form inline>
                        <FormGroup></FormGroup>
                        <FormGroup >
                            <Label id="currency" >Currency</Label>

                            <Input id="Currency" type="select" name="select" >
                                <option>--Select--</option>
                                <option>AED-UAE Dirham</option>
                                <option>AUD-Australian Dollar</option>
                                <option>BDT-Bangladeshi Taka</option>
                                <option>BHD-Bahrain Dinar</option>
                                <option>CAD-Canadian Dollar</option>
                                <option>CHF-Swiss Franc</option>
                                <option>CNY-Chinese Yuan</option>
                                <option>DKK-Danish Krone</option>
                                <option>EGP-Egyptian Pound</option>
                                <option>EUR-Euro</option>
                                <option>GBP-Great Britain Pound</option>
                                <option>HKD-Hong Kong Dollar</option>
                                <option>INR-Indian Rupee</option>
                                <option>JOD-Jordanian Dinar</option>
                                <option>JPY-Yen</option>
                                <option>KRW-Won</option>
                                <option>KWD-Kuwaiti Dinar</option>
                                <option>LKR-Sri Lanka Rupee</option>
                                <option>MAD-Moroccan Dirham</option>
                                <option>NOK-Norwegian Krona</option>
                                <option>NZD-New Zealand Dollar</option>
                                <option>OMR-Omani Riyal</option>
                                <option>PHP-Philippine Peso</option>
                                <option>PKR-Pakistan Rupee</option>
                                <option>QAR-Qatari Riyal</option>
                                <option>SAR-Saudi Riyal</option>
                                <option>SEK-Swedish Krona</option>
                                <option>SGD-Singapore Dollar</option>
                                <option>TRY-Turkish Lira</option>
                                <option>USD-United State Dollar</option>
                                <option>USN-US Dollar (Next day)</option>
                                <option>USS-US Dollar (Same day)</option>
                                <option>ZAR-South African Rand</option>
                                <option>ZWL-Zimbabwe Dollar</option>
                            </Input>

                        </FormGroup>
                    </Form>

                    <Container className="text-right" style={{ height: 117 }}>

                        <button id="Button" class="button" type="submit" value="submit">Search</button>
                        <button id="Reset" class="button" type="reset" value="Reset">Clear</button>

                    </Container>

                </CardBody>
            </Card>
        </div>
    )
}

export default Transaction;