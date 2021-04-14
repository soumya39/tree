import './App.css';
import './component/mydiv.css';

import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';

import AppTabs from './component/AppTabs';
import BulkPaymentDetails from './component/BulkPaymentDetails';
import DocumentPath from './component/DocumentPath';
import Footer from './component/Footer';
import Header from './component/Header';
import IndividualMatrix from './component/IndividualMatrix';

function App() {
  return (
    <div className="App" >
      {/** 
     
     <PieCharts />
     <BarCharts />
     <PieChartsMix />
      <Transaction />
      <Header />
      <AppTabs /> 
      <Footer/>*/}
  {/*     <Header />
      <AppTabs /> 
      <Footer/> */}

       <Header />
       <hr/>
      {/* <BulkPaymentsDetails/> */}
     {/*  <AppTabs />  */}
    

   
      <Router>
    <Switch>
        <Route path='/' exact component={AppTabs}/>
        <Route path='/bulkPaymentdetails/:id' exact component={BulkPaymentDetails}/>
        <Route path='/indvPaymentdetails/:id' exact component={IndividualMatrix}/>
        <Route path="/documentpath/:id" component={DocumentPath}/>
    </Switch>
  </Router>
  <Footer/>
    </div>
  );
}
export default App;
