import React from 'react';
import './CampaignStyling.css' ;

function CampaignDate(props){         
    // const numOfDays = props.date - Date() ;
    return (    
        <div className="CampaignContainer">
            <h1 className="Date" >Oct 2019, 28</h1>
            <p className="numofDays">5 Days Ago</p>
        </div>
    );
}

export default CampaignDate;
