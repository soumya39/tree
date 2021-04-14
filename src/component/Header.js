import './mydiv.css';

import React from 'react';
import logo from './logo.png';

import { CardBody } from 'reactstrap';

const Header = () => {
    return (
        <div >
        <CardBody style={{minHeight:"1vh",display:"flex",padding: "0px",}}>
        <text style={{position:"absolute",marginTop:'2vh',marginLeft:'89%',color:'#0000EE'}}>User Name </text>     
           <img style={{position:"relative",marginLeft:"2%",height:"10vh",top:"1vh",padding: "none",}}  src={logo}alt="img"/>
             <h3 style={{color:"red",marginLeft:"35vh",position:"relative",top:"5vh"}}>Owner's Association</h3>  
          </CardBody>
           </div>
           
        );
};

export default Header;