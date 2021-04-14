import '../mystyle/mybootstrap.css';

import { Component } from 'react';

import ReportsTable from './ReportsTable';

class ReportSheet extends Component {
    constructor(props) {
        super(props);
        this.state =
        {
            mnanagement_comp: '',
            supplier: 'Select Supllier',
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
        alert(`${this.state.mnanagement_comp} ${this.state.supplier} ${this.state.budget_year} ${this.state.invoice_year}`)
        //avoid page reload
        event.preventDefault();
    }

    render() {
        const {mnanagement_comp , supplier , budget_year , invoice_year } = this.state
        return (
                <>
                           <div class="container" style={{marginTop:12}}>
            <form onSubmit={this.handleSubmit} >
                <div class="form-row">
                    <div class="form-group col-xs-5">
                        <label for="inputCity">Management Company</label>
                        <input type="text" class="form-control form-control-sm" value={mnanagement_comp} onChange={this.handleCompanyNameChange}/>
                    </div>
                    <div class="form-group col-xs-8">
                        <label for="inputState">Supplier</label>
                        <select value={supplier} class="form-control form-control-sm" onChange={this.handleSupplierChange}>
                            <option>Turner and Sons</option>
                            <option>Torphy Group</option>
                            <option>McGlynn Group</option>
                            <option>Weimann LLC</option>
                        </select>
                    </div>
                    <div class="form-group col-xs-2">
                        <label for="inputZip">Budget Year</label>
                        <input type="text" id='year1'  class="form-control form-control-sm" value={budget_year} onChange={this.handleBudgetYearChange}/>
                    </div>
                    <div class="form-group col-xs-2">
                        <label for="inputZip">Invoice Year</label>
                        <input type="text" class="form-control form-control-sm" value={invoice_year} onChange={this.handleInvoiceYearChange}/>
                    </div>

                    <div class="form-group col-xs-2">
                        <button id="btnPrimary" type="submit" class="btn btn-primary btn-sm" style={{marginTop:18}}>Generate Report</button>
                    </div>
                </div>
                
            </form>
        </div>
       <ReportsTable/>
                </>
        );
    }

}//ReportSheet ends here 
export default ReportSheet