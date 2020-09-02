import React from 'react';

function CampaignDate(props){         
    // const numOfDays = props.date - Date() ;
    return (    
        <div>
            <h1>{props.date}</h1>
            <p>
                5 Days Ago
            </p>
        </div>
    );
}

export default CampaignDate;
