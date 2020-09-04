import React from 'react';
import './InternalTabs.css';
import { Tabs, Tab} from '@material-ui/core' ;
import { makeStyles } from '@material-ui/core/styles';
import CompleteCampaigns from './Campaigns/CompleteCampaigns' ;
import moment from 'moment';

function createData(id, name, region, createdOn, price, csv, report, image_url) {
    return { id, name, region, createdOn, price, csv, report, image_url };
}
  
const rows = [
    createData(
        1,
        "Prison Break",
        "US",
        "Sep 4, 2020",
        "Price info of Test Whatsapp",
        "Some CSV link for Whatsapp",
        "Some report link for Whatsapp",
        "Some image url of the campaign" 
    ),
    createData(
        2,
        "Super Jewels Quest",
        "CA",
        "Sep 5, 2020",
        "Price info of Super Jewels Quest",
        "Some CSV link for Super Jewels Quest",
        "Some report link for Super Jewels Ques",
        "Some image url of the campaign"
    ),
    createData(
        3,
        "Mole Slayer",
        "FR",
        "Aug 4, 2020",
        "Price info of Mole Slayer",
        "Some CSV link for Mole Slayer",
        "Some report link for Mole Slayer",
        "Some image url of the campaign"
    ),
    createData(
        4,
        "Mancala Mix",
        "JP",
        "Jan 4, 2022",
        "Price info of Mancala Mix",
        "Some CSV link for Mancala Mix",
        "Some report link for Mancala Mix",
        "Some image url of the campaign"
    ),
    createData(
        5,
        "Battle Grounds",
        "US",
        "Dec 4, 2018",
        "Price info of Test Whatsapp",
        "Some CSV link for Whatsapp",
        "Some report link for Whatsapp",
        "Some image url of the campaign" 
    ),
    createData(
        6,
        "PUBG",
        "CA",
        "Feb 14, 2020",
        "Price info of Super Jewels Quest",
        "Some CSV link for Super Jewels Quest",
        "Some report link for Super Jewels Ques",
        "Some image url of the campaign"
    ),
    createData(
        7,
        "Bifrost Defender",
        "FR",
        "May 4, 2020",
        "Price info of Mole Slayer",
        "Some CSV link for Mole Slayer",
        "Some report link for Mole Slayer",
        "Some image url of the campaign"
    ),
    createData(
        8,
        "Avengers Assemble",
        "JP",
        "Sep 4, 2020",
        "Price info of Mancala Mix",
        "Some CSV link for Mancala Mix",
        "Some report link for Mancala Mix",
        "Some image url of the campaign"
    )
];

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

    function upcomingCampaigns(data) {
        let a = moment(data.createdOn) ;
        let current = moment().startOf('day') ;
        return (
            a.diff(current,'days') > 0             
        );
    }

    function liveCampaigns(data) {
        let a = moment(data.createdOn) ;
        let current = moment().startOf('day') ;
        return (
            a.diff(current,'days') === 0             
        );
    }

    function pastCampaigns(data) {
        let a = moment(data.createdOn) ;
        let current = moment().startOf('day') ;
        return (
            a.diff(current,'days') < 0             
        );
    }

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
            { selectedTab === 0 && <CompleteCampaigns campaignData={rows.filter(upcomingCampaigns)} /> }
            { selectedTab === 1 && <CompleteCampaigns campaignData={rows.filter(liveCampaigns)} /> }
            { selectedTab === 2 && <CompleteCampaigns campaignData={rows.filter(pastCampaigns)} /> }
        </div>
    );
}

export default InternalTabs;
