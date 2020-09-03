import React from 'react';
import './CampaignStyling.css' ;

function CampaignAction(props){         
    return (    
        <div className="Campaign CampaignContainer">
            <img 
                className="ViewLogo"
                alt="File" 
                src={require('./file.png')}   
                width="18"
                height="24" 
            />            
            <p className="Actions ActionsSpace">CSV</p>
            <img 
                className="StatisticsLogo"
                alt="Statistics" 
                src={require('./statistics-report.png')}   
                width="24"
                height="20" 
            />            
            <p className="Actions ActionsSpace">Report</p>
            <img 
                className="CalendarLogo"
                alt="Calendar" 
                src={require('./calendar.png')}   
                width="24"
                height="22" 
            />            
            <p className="Actions ActionsSpace">Schedule Again</p>
        </div>
    );
}

export default CampaignAction;
