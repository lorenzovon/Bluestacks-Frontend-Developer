import React from 'react';
import NavBar from '../Static/NavBar' ;
import ManageCampaigns from '../Static/ManageCampaigns' ;
import InternalTabs from '../Dynamic/InternalTabs' ;
import './Playground.css' ;
// import CampaignDate from '../Dynamic/CampaignRow/CampaignDate' ;

function Playground() {
  // let today = new Date() ;
  return (
    <div className="Playground">
      <NavBar />    
      <div className ="InnerContent">
        <ManageCampaigns /> 
        <InternalTabs />
      </div> 
      {/* <CampaignDate date={"Oct 8 2019"} /> */}
    </div>
  );
}

export default Playground;
