import React from 'react';
import './CampaignStyling.css' ;
import moment from 'moment';

function CampaignDate(props){  
    let a = moment(props.createdOn) ;
    let current = moment().startOf('day') ;
    let numOfDays = a.diff(current,'days');
    let timeString = '';
    if(numOfDays > 0) {
        if(numOfDays > 1) {
            timeString = "Live in " + numOfDays + " Days" ;    
        }
        else {
            timeString = "Live in " + numOfDays + " Day" ;
        }        
    } else if(numOfDays === 0) {
        timeString = "Live today" ;
    } else if(numOfDays < 0) {
        timeString = -numOfDays + " Days Ago" ;
    }
    
    return (    
        <div className="CampaignContainer">
            <h1 className="Date" >{props.createdOn}</h1>
            <p className="numofDays">{timeString}</p>
        </div>
    );
}

export default CampaignDate;
