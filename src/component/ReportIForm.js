import React from 'react';

import axios from 'axios';

import ReportsTable from './ReportsTable';

class ReportIForm extends React.Component {
    constructor(props) {
        super(props)
        this.state =
        {
            managementCompany: '',
            supplier: 'Select Supplier',
            budgetYear: '',
            invoiceYear: '',
            balanceAmount: '',
            repodata:[]
        }//end of state
    }//end of constructor


    changeValue=(e)=>{
        this.setState({[e.target.name ]: e.target.value})
    }

    handleSubmit = event => {
        //avoid page reload
        event.preventDefault();

        const report = {
            managementCompany: this.state.managementCompany,
            supplier: this.state.supplier,
            budgetYear: this.state.budgetYear,
            invoiceYear: this.state.invoiceYear,
            balanceAmount: this.state.balanceAmount
        }
        console.info(JSON.stringify(report))
        console.info("state : "+this.state.balanceAmount)
        alert(`${this.state.managementCompany}
             ${this.state.supplier} ${this.state.budgetYear} 
            ${this.state.invoiceYear} ${this.state.balanceAmount}`);
        
           axios.post(`http://localhost:3001/exception/queue/reports/generate` , 
           report, {headers:{"Content-Type" : "application/json"}})
                        .then(response => response.data )
                        .then((data)=>{
                            console.info(data)
                            this.setState(
                              //  JSON.parse(JSON.stringify(data))
                              {repodata: data}
                            )
                            console.table('from Parent Component[] : '+JSON.stringify(this.state.repodata))
                            
                        }).
                        catch(error => {
                            console.log('POST Report Data Error#: '+error.message)
                        });
    }

    componentDidMount() {
    }

    render() {
        //define value states
        const { managementCompany, supplier, budgetYear, invoiceYear, balanceAmount } = this.state
        const myArray = ['Jack', 'Mary', 'John', 'Krish', 'Navin'];  
        return (
            <div>
                <div>
                    <form style={{ marginTop: 15, marginLeft: 300 }} onSubmit={this.handleSubmit}>
                        <div class="form-row align-items-center">
                            <label class="sr-only" htmlFor="inlineFormInput">Management Company</label>
                            <div class="col-auto">

                                <input type="text" style={{ fontSize: '13px' }} size="sm" name='managementCompany' value={managementCompany} onChange={this.changeValue} placeholder="Management Company" required />
                            </div>
                            <div class="col-auto" >
                                <label class="sr-only" htmlFor="inlineFormInput">Supplier</label>
                                <select style={{ fontSize: '13px', padding: "4px" }} name='supplier'  value={supplier} onChange={this.changeValue} size="sm" placeholder="Select Supplier">
                                    <option>Select Supplier</option>
                                    <option>REMEDYREPACK INC</option>
                                    <option>CareStream Health, Inc</option>
                                    <option>Apotheca Company</option>
                                    <option>ALK-Abello, Inc</option>
                                    <option>Qualitest Pharmaceuticals</option>
                                    <option>STAT Rx USA LLC</option>
                                    <option>Antigen Laboratories, Inc</option>
                                    <option>Amerisource Bergen</option>
                                </select>
                            </div>
                            <div class="col-auto">
                                <label class="sr-only" htmlFor="inlineFormInput">Budget Year</label>
                                <input style={{ width: "100px", fontSize: '13px' }} type="number" size="sm" name='budgetYear' value={budgetYear} onChange={this.changeValue} placeholder="Budget Year" />
                            </div>

                            <div class="col-auto">
                                <label class="sr-only" htmlFor="inlineFormInput">Invoice Year</label>
                                <input style={{ width: "100px", fontSize: '13px' }} type="number" size="sm" name='invoiceYear' value={invoiceYear} onChange={this.changeValue} placeholder="Invoice Year" />
                            </div>

                            <div class="col-auto">
                                <label class="sr-only" htmlFor="inlineFormInput">Amount</label>
                                <input style={{ width: "100px", fontSize: '13px' }} type="number" size="sm" name='balanceAmount' value={balanceAmount} onChange={this.changeValue} placeholder="Amount" />
                            </div>

                            <div class="col-auto">
                                <button size="sm" style={{ backgroundColor: '#254a9e', borderColor: '#254a9e', fontSize: '12px' }} type="submit" class="btn btn-primary">Generate Report</button>
                            </div>
                        </div>
                    </form>
                </div>

              {/*   <ReportsTable  message={myArray}/> */}
              <ReportsTable  dataArray={this.state.repodata}/>
            {/*  
             {
                  this.state.repodata.map((rep) => {
                    <p>{rep.supplier}</p>
                    console.info(rep.supplier);
                })
             } */}
              
            </div>
        
        )
    }
}

export default ReportIForm