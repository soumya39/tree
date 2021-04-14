
import React, { useMemo, useState, useEffect} from 'react';
import './Btn.css';
import './mydiv.css';
import axios from 'axios';
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button, Container, Form, FormGroup, Label, Input, Row, Col
  } from 'reactstrap';

  class Login extends React.Component{
    constructor(props){
        super(props);
        this.state = 
        {
            user_id:'',
            password:'',
            
        }
    }

    handleUserIDChange = (event) => {
        this.setState(
            { user_id: event.target.value}
        )
    }

    handlePasswordChange = (event) => {
        this.setState({
            password: event.target.value
        })
    }
    handleSubmit=event=>{
        if(`${this.state.user_id}`=="babu"&& `${this.state.password}`=="babu"){
            this.props.history.push('/Welcome');
            
        }
        else{
            alert('Bad Credentials!')
        }
        event.preventDefault();
    }

    componentDidMount()
    {
        axios.get(`http://localhost:8865/login`)
        .then((response)=>{
            console.log('loading....')
            console.log(response.data);
        } ,
        (error)=>{
            console.log(error);
        }
        );
    }

    render(){

        const{user_id, password} = this.state;

        return(
        
        <div id="mydiv"> 

            <Card style={{width:800}}>
                <CardBody style={{background:'#254a9e', width:800, height:50}}>
                <h4  style={{color:'white'}}>Login</h4>
                </CardBody>
            
            
            <Card className="my-3 ml-4" style={{width:750}}>
            
           
            <Form className="text-center my-3"  onSubmit={this.handleSubmit}>
            <FormGroup>
            
                <Label style={{color:'#254a9e'}}for="MashreqUser">User ID</Label>              
                <input className="ml-4" type="userid" value={user_id} onChange={this.handleUserIDChange} required />
            </FormGroup>
            
            <FormGroup>
                <Label  style={{color:'#254a9e'}} for="MashreqPassword">Password</Label>
                <input className="ml-2" type="password" value={password} onChange={this.handlePasswordChange} required/>                            
                   
            </FormGroup>

            <Container className="ml-4" style={{height:50}}>
               
                                    
               <Button size="sm" style={{background:'#254a9e'}}>Submit</Button>
               <Button size="sm" style={{background:'#254a9e'}} className="ml-4">Reset</Button>
              
               </Container>  
            </Form>
           
            </Card>
                    <CardBody style={{background:'#254a9e', width:800, height:50}}>
                                   
                    </CardBody>
                
            <Card/>
             </Card>

        </div>
          
            
          
       
    );
    };
}
export default Login;
