import React from 'react';
import NavBar from '../Static/NavBar' ;
import ManageCampaigns from '../Static/ManageCampaigns' ;
import InternalTabs from '../Dynamic/InternalTabs' ;
import './Playground.css' ;
// import data from '../Data/TestData.json' ;
// import CampaignDate from '../Dynamic/CampaignRow/CampaignDate' ;
// import Campaign from '../Dynamic/CampaignRow/Campaign' ;
// import CampaignView from '../Dynamic/CampaignRow/CampaignView' ;
// import CampaignAction from '../Dynamic/CampaignRow/CampaignAction' ;

function Playground() {
  // let today = new Date() ;
  return (
    <div className="Playground">      
      <NavBar /> 
      {/* <p>Lets chill</p>  
      <CampaignDate />
      <Campaign /> 
      <CampaignView />
      <CampaignAction /> */}
      <div className ="InnerContent">
        <ManageCampaigns /> 
        <InternalTabs />
      </div> 
      {/* {data.map((campaignDetail, index)=>{
        return (
          <h1>
            {campaignDetail.name}
          </h1>
        );
      })} */}      
    </div>
  );
}

export default Playground;
