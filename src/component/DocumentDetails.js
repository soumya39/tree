import React from 'react';

import {
  BrowserRouter,
  NavLink,
} from 'react-router-dom';
import {
  Nav,
  NavItem,
  Table,
} from 'reactstrap';

const DocumentDetails=()=> {
    return (
        <div>
                   <h4 className="text-center" style={{color:'white', background:'#254a9e', marginTop:25}}>Documnets Details</h4>
                    <Table borderless size="sm">
                        <thead >
                            <tr>
                            <th style={{color:'white'}} bgcolor="#254a9e">Document Id</th>
                                <th style={{color:'white'}} bgcolor="#254a9e">Document Name</th>
                                <th style={{color:'white'}} bgcolor="#254a9e">Document Type</th>
                                
                                <th style={{color:'white'}} bgcolor="#254a9e">Expires On</th>
                            </tr>
                        </thead>
                      
                       
                            <tbody>
                               
                                <tr>
                                <td>
                                 <BrowserRouter>
                                 <Nav >
                                    <NavItem>
                                    <NavLink to="" >45568</NavLink>
                                    </NavItem>
                                  </Nav>
                                 </BrowserRouter>
                                </td>
                                   <td>Sample</td>
                                   <td>PDF</td>
                                   
                                   <td>05/05/2021</td>
                                </tr>
                                
                                <tr>
                                <td>
                                <BrowserRouter>
                                <Nav >
                                    <NavItem >
                                    <NavLink to="" >75642</NavLink>
                                    </NavItem>
                                  </Nav>
                                </BrowserRouter>
                                </td>
                                   <td>Example</td>
                                   <td>PDF</td>
                                   
                                   <td>10/09/2021</td>
                                </tr>
                            </tbody>
                            
                        </Table>
                        </div>
    )
}

export default DocumentDetails
