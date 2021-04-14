import React from 'react';

import {
  CardBody,
  Col,
  Row,
  Table,
} from 'reactstrap';

function Matrix(){
    return(
        <div>
          <img src="/images/Mlogo.png" alt="img"/>
          <Row>
            <Col sm="6">
               <CardBody style={{width:700}}>
                   
                   <Row style={{background:'#4c8dc1'}}>
                   <Col>
                    <h4 className="ml-4" style={{color:'white'}}>Debit Details</h4>
                    </Col>
                   </Row>
                   
                   
                   
                    <Table borderless>
      
      <tbody>
        <tr>
          
          <td>Debit Account Number</td>
          <td>0190005076-BAYSIDE</td>
          
        </tr>
        <tr>
          
          <td>Value Date</td>
          <td>28/02/2021</td>
         
        </tr>
        <tr>
          
          <td>Customer Reference</td>
          
        </tr>
      </tbody>
    </Table>
               </CardBody>
                    
                    </Col>
                    <Col sm="6">
                   
                    <CardBody className="ml-1" style={{ width:700}}>
                        
                            <Row style={{background:'#4c8dc1'}}>
                                <Col>
                                <h4 className="ml-4" style={{color:'white'}}>Beneficiary Details</h4>
                                </Col>
                            </Row>
                      
                   
                   <Table borderless>
      
      <tbody>
        <tr>
          
          <td>Beneficiary Account Number</td>
          <td>019000550680</td>
          
        </tr>
        <tr>
          
          <td>Beneficiary Name</td>
          <td>CONCORDE TOWER</td>
         
        </tr>
        <tr>
          
          <td>Beneficiary Type</td>
          <td>-</td>
          
          
        </tr>
      </tbody>
    </Table>
               </CardBody>
           
           </Col>
           </Row>
          
               <CardBody >
                   
                       <Row>
                           <Col style={{background:'#4c8dc1'}}>
                           <h4 className="text-center" style={{color:'white'}}>Payment Details</h4>
                           </Col>
                       
                   

                <Table borderless>
      
      <tbody>
        <tr>
          
          <td>Pay By</td>
          <td>Debit Account Currency</td>
          <td>--</td>
          
        </tr>
        <tr>
          
          <td>Debit CCY / Amount </td>
          <td>AED-UAE Dirham</td>
          <td>10</td>
         
        </tr>
        <tr>
          
          <td>Initiation Date</td>
          <td>28/02/2021</td>
          <td>10</td>        
        </tr>
        <tr>
          
          <td>Secondary Information</td>
          <td>A2.01</td>
          <td></td>        
        </tr>
      </tbody>
    </Table>
    </Row>
                   
               </CardBody>
          
          
               <CardBody  className="text-center">
                   
                       <Row style={{background:'#4c8dc1'}}>
                           <Col>
                           <h4 style={{color:'white'}}>Workflow Details</h4>
                           </Col>
                       </Row>
                   
                    
                            <h4 style={{color:'blue'}}>Initiator</h4>

                    
        <Row style={{background:'#4c8dc1', color:'white'}}>
        <Col className="columns" xs="6" sm="4">Initiator Name</Col>
        <Col className="columns" xs="6" sm="4">Initiated Date</Col>
        <Col className="columns" sm="4">Role</Col>
      </Row>
      
                   
                    
      <Table borderless>
      <tbody>
        <tr>
         
          <td>OA UATMAKER</td>
          <td>28/02/2021 15:02:22</td>
          <td>Initiator</td>
        </tr>
        
       
      </tbody>
    </Table>
    
        <h4 style={{color:'blue'}}>Authorizers</h4>
        
        <Row style={{background:'#4c8dc1', color:'white'}}>
        <Col className="columns" xs="6" sm="4">Auhtorizer Name</Col>
        <Col className="columns" xs="6" sm="4">Date/Time</Col>
        <Col className="columns" sm="4">Role</Col>
      </Row>
      
    <p>No Records Available</p>
 
   
               </CardBody>
      
          
         
               <CardBody className="text-center">
                   <h4 style={{color:'blue'}}>Documnets Details</h4>
                    <Table>
                        <thead >
                            <tr>
                                <th style={{color:'white'}} bgcolor="#4c8dc1">Document Name</th>
                                <th style={{color:'white'}} bgcolor="#4c8dc1">Document Type</th>
                                <th style={{color:'white'}} bgcolor="#4c8dc1">Management Company Name</th>
                                <th style={{color:'white'}} bgcolor="#4c8dc1">Expires On</th>
                            </tr>
                        </thead>
                       
                       
                            <tbody>
                               
                                <tr>
                                   <td>Sample</td>
                                   <td>PDF</td>
                                   <td>Eidiko</td>
                                   <td>05/05/2021</td>
                                </tr>
                                <tr>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                </tr>
                            </tbody>
                        
                        </Table>
               </CardBody>
         
        </div>
    )
}
export default Matrix;
