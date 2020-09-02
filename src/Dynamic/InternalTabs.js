import React from 'react';
import './InternalTabs.css';
import { Tabs, Tab} from '@material-ui/core' ;
import { makeStyles } from '@material-ui/core/styles';
import UpcomingCampaigns from './Campaigns/UpcomingCampaigns' ;
import LiveCampaigns from './Campaigns/LiveCampaigns' ;
import PastCampaigns from './Campaigns/PastCampaigns' ;

const InternalTabs = () => {
    const [selectedTab, setSelectedTab] = React.useState(0);

    const handleChange = (event, newValue) => {
        setSelectedTab(newValue);
    };     

    const useStyles = makeStyles((theme) => ({        
        tabStyle: {
            textTransform: "none", 
            fontSize: 18, 
            fontWeight: 500,
        },        
    }));

    const classes = useStyles();

    return (
        <div className="InternalTabs">  
            <Tabs 
                value={selectedTab} 
                onChange={handleChange}                 
                TabIndicatorProps={{
                    style: {
                        backgroundColor: "#83A515",
                        height: "4px",
                    }
                }} 
                         
            >
                <Tab label="Upcoming Campaigns"  className={classes.tabStyle} />
                <Tab label="Live Campaigns"   className={classes.tabStyle} />
                <Tab label="Past Campaigns"  className={classes.tabStyle} />                
            </Tabs>
            { selectedTab === 0 && <UpcomingCampaigns /> }
            { selectedTab === 1 && <LiveCampaigns /> }
            { selectedTab === 2 && <PastCampaigns /> }
        </div>
    );
}

export default InternalTabs;
