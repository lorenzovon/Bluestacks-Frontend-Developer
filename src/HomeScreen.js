import React from 'react';
import NavBar from './Static/NavBar' ;
import ManageCampaigns from './Static/ManageCampaigns' ;
import InternalTabs from './Dynamic/InternalTabs' ;
import './HomeScreen.css' ;

function HomeScreen() {
  return (
    <div className="HomeScreen">      
      <NavBar />       
      <div className ="InnerContent">
        <ManageCampaigns /> 
        <InternalTabs />
      </div>       
    </div>
  );
}

export default HomeScreen;
