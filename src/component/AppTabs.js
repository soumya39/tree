import { useState } from 'react';

import {
  AppBar,
  Tab,
  Tabs,
} from '@material-ui/core';

import PaymentTabs from './PaymentTabs';
import ReportIForm from './ReportIForm';
import Example from './TransactionSearchCriteria';

const AppTabs=()=> {
    const[tbVal,setVal] = useState(0);

    const moveTab=(e,val)=>
{
    setVal(val)
}
    return (
        <div>
                <AppBar /* color="default" */ variant="elevation" position="sticky" style={{marginTop:-10, backgroundColor:'#254a9e'/* backgroundImage:'blue' */,maxHeight:'35px'}}>
                    <Tabs TabIndicatorProps={{style: {background:'#25befa', marginBottom:'12px'}}} value={tbVal} onChange={moveTab}>
                        <Tab label="Exception Queue" style={{fontWeight:'bold',minWidth:"2%",fontSize:'13px' ,paddingTop:'0px' ,paddingBottom:'2px',paddingLeft:'10px',paddingRight:'0px',marginTop:'-3px'}} />
                        <Tab label="Search" style={{fontWeight:'bold',minWidth:"2%",fontSize:'13px' ,paddingTop:'0px' ,paddingBottom:'2px',paddingLeft:'10px',paddingRight:'0px' ,marginTop:'-3px'  }}/>
                        <Tab label="Reports" style={{fontWeight:'bold',minWidth:"2%",fontSize:'13px' ,paddingTop:'0px' ,paddingBottom:'2px',paddingLeft:'10px',paddingRight:'0px',marginTop:'-3px' }}/>
                    </Tabs>
                </AppBar>
                {tbVal=== 0 && <PaymentTabs/>}
            {tbVal=== 1 && <Example/>}
            {/* {tbVal=== 2 && <ReportSheet/>} */}
            {tbVal=== 2 && <ReportIForm/>}
        </div>
    )
}

export default AppTabs
