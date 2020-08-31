import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';

const useStyles = makeStyles((theme) => ({    
  navbar: {
    background: "#1F2640",
    height: "80px",
  },
  topbar: {
    padding: "0px",
  },
  logoposition: {
    left: "182px",
    marginTop: "17px",
    marginBottom: "18px",
    padding: "0px",
  },
}));

function NavBar() {
  const classes = useStyles();

  return (
    <AppBar position="static" className={classes.navbar} >
      <Toolbar className={classes.topbar}>
        <IconButton            
          color="inherit"
          className={classes.logoposition}
        >            
          <img src="https://cdn-www.bluestacks.com/bs-images/bs-logo-new.png" alt="Bluestacks" width="147" height="45" />
        </IconButton>        
      </Toolbar>
    </AppBar>
  );
}

export default NavBar;
