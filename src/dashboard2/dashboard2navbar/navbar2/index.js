import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
//import IconButton from '@material-ui/core/IconButton';
//mport MenuIcon from '@material-ui/icons/Menu';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import  Storeinfo from '../../Storeinfo/addstore';
import Analytics from '../../Analytics/index';
import Issues from '../../issues/index';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
}));

export default function DenseAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
       <Router>

      <AppBar position="static">
        <Toolbar variant="dense">
         <Typography variant="h6" color="inherit">
         <Link to={'/addproduct'} className="nav-link" style={{paddingLeft:"5rem"}}>Analytics</Link>
          </Typography>
          <Typography variant="h6" color="inherit">
          <Link to={'/storeinfo'} className="nav-link">Store Info</Link>
          </Typography>
          <Typography variant="h6" color="inherit">
          <Link to={'/issues'} className="nav-link">Issues</Link>
          </Typography>        
        </Toolbar>        
      </AppBar>        
        <div>
          <Switch>
                   
              <Route path='/analytics' component={Analytics} />
              <Route path='/storeinfo' component={ Storeinfo} />    
              <Route path='/issues' component={Issues} />
             
          </Switch>
        </div>
      </Router> 

      
    </div>
  );
}
