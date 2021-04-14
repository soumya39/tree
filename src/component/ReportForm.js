import '../mystyle/mybootstrap.css';

import React from 'react';

import ReportSheet from './ReportSheet';

class ReportForm extends React.Component {
    constructor(props) {
        super(props);
        this.state =
        {
            mnanagement_comp: '',
            supplier: 'audi',
            budget_year: '',
            invoice_year: ''
        }
    }

    //methods as a class props
    handleCompanyNameChange = (event) => {
        //extract a value & set the value
        this.setState({
            mnanagement_comp: event.target.value
        })
    }

    handleSupplierChange = (event) => {
        this.setState({
            supplier: event.target.value
        })
    }

    handleBudgetYearChange = (event) => {
        this.setState({
            budget_year: event.target.value
        })
    }
    handleInvoiceYearChange = (event) => {
        this.setState({
            invoice_year: event.target.value
        })
    }

    handleSubmit=event=>{
        alert(`${this.state.mnanagement_comp}
         ${this.state.supplier} ${this.state.budget_year} 
        ${this.state.invoice_year}`)
        //avoid page reload
        event.preventDefault();
    }

    render() {

        //define value states
        const {mnanagement_comp , supplier , budget_year , invoice_year } = this.state
        return (
            <form style={{ marginTop: '100px' }} onSubmit={this.handleSubmit}>
                <div>
                    <label>Management Company : {mnanagement_comp}</label><br />
                    <input type="text" value={mnanagement_comp} onChange={this.handleCompanyNameChange} />
                </div>

                <div>
                    <label>Supplier : {supplier}</label><br />
                    <select value={supplier} onChange={this.handleSupplierChange} >
                        <option value="volvo">Volvo</option>
                        <option value="saab">Saab</option>
                        <option value="mercedes">Mercedes</option>
                        <option value="audi">Audi</option>
                    </select>
                </div>
                <div>
                    <label>Budget Year : {budget_year} </label><br />
                    <input type="text" value={budget_year} onChange={this.handleBudgetYearChange} />
                </div>
                <div>
                    <label>Invoice Year : {invoice_year}</label><br />
                    <input type="text" value={invoice_year} onChange={this.handleInvoiceYearChange} />
                </div>
                <button id="btn-primary" type="submit">Submit</button>
                <ReportSheet/>
            </form>

        )
    }
}
export default ReportForm