import React from 'react';
import './CampaignStyling.css' ;

function CampaignView(props){         
    return (    
        <div className="Campaign CampaignContainer">
            <img 
                className="ViewLogo"
                alt="Girl in a jacket" 
                src={require('./Price.png')}   
                width="24"
                height="24" 
            />            
            <p className="ViewPricing PricingSpace">View Pricing</p>
        </div>
    );
}

export default CampaignView;
