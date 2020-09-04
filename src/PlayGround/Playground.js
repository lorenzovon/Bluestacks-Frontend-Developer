import React from 'react';
import NavBar from '../Static/NavBar' ;
import ManageCampaigns from '../Static/ManageCampaigns' ;
import InternalTabs from '../Dynamic/InternalTabs' ;
import './Playground.css' ;
// import moment from 'moment';
// import Message from './Message';
// import CompleteCampaigns from '../Dynamic/Campaigns/CompleteCampaigns' ;

function Playground() {
  // var a = moment("Sep 4, 2020");
  // var b = moment([2007, 0, 28]);
  // a.diff(b)
  return (
    <div className="Playground">      
      <NavBar />   
      {/* <h1>{a.diff(b,'days')}</h1>     */}
      {/* <Message /> */}
      {/* <CompleteCampaigns /> */}
      <div className ="InnerContent">
        <ManageCampaigns /> 
        <InternalTabs />
      </div>       
    </div>
  );
}

export default Playground;
