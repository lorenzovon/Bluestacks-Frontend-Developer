import React from 'react';
import { Tab} from '@material-ui/core' ;
import { makeStyles } from '@material-ui/core/styles';

function CustomMuiTab(props){     

    const useStyles = makeStyles((theme) => ({        
        tabStyle: {
            textTransform: "none", 
            fontSize: 18, 
            fontWeight: 500,
        },        
    }));

    const classes = useStyles();

    return (            
        <Tab label={props.label} className={classes.tabStyle}    />
    );
}

export default CustomMuiTab;
