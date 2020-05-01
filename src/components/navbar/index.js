import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
//import IconButton from '@material-ui/core/IconButton';
//mport MenuIcon from '@material-ui/icons/Menu';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
// import AddProduct from '../addproduct';
// import Cart from  '../../cart';
import './_style.css';
// import  NavbarTab from '../../dashboard2/navigationtab/index';
// import AdminDasboard from '../Admindashboardtab/admindashboardtab';
import AdminPanel from '../../dashboard/admin-dashboard/dashboard';

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
        <div>        
        <Router>
          <AppBar position="static" style={{backgroundColor:"#fcfcfc"}}>
            <Toolbar variant="dense">                
              <Typography variant="h6" >
              <Link to={'/admin'} target className="nav-link"></Link>
              </Typography>
            </Toolbar>       
          </AppBar>           
            <div>
              <Switch>              
                  <Route path='/admin' component={AdminPanel} />            
              </Switch>
          </div>
      </Router>   
        </div>    
    </div>
  );
}
