import React from 'react';
import './PricingModal.css';

function PricingModal(props) {
  return (
    <div className="PricingModal">
        <div className="ImageNameRegion">
            <img 
                className="CampaignLogo"
                alt="Jacket" 
                src={require('./GameLogo.png')}   
                width="130"
                height="130" 
            />
            <div className="NameRegion">
                <h1 className="CampaignName" >{props.name}</h1>
                {console.log(props.name)}
                <p className="CampaignRegion">{props.region}</p>   
                {console.log(props.name)}
            </div>
        </div>
        <h1 className="PricingHeader">
            Pricing
        </h1>
        <div className="Prices" > 
            <p>
                1 Week - 1 Month
            </p>
            <h1>
                $ 100.00
            </h1>
        </div>
        <div className="Prices" > 
            <p>
                6 Months
            </p>
            <h1>
                $ 500.00
            </h1>
        </div>
        <div className="Prices" > 
            <p>
                1 Year
            </p>
            <h1>
                $ 900.00
            </h1>
        </div>
        <div className="CloseButtonContainer">
            <button className="CloseButton" onClick={props.handleClose}>
                close
            </button>   
        </div>
    </div>
  );
}

export default PricingModal;
