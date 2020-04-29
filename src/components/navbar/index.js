import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
//import IconButton from '@material-ui/core/IconButton';
//mport MenuIcon from '@material-ui/icons/Menu';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import AddProduct from '../addproduct';
import Cart from  '../../cart';
import './_style.css';
import  Isuues from '../../dashboard2/issues/index';
import Admin from '../../dashboard/admin-dashboard/dashboard';

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
         <Link to={'/addproduct'} className="nav-link" style={{paddingLeft:"5rem"}}>AddProduct</Link>
          </Typography>
          <Typography variant="h6" color="inherit">
          <Link to={'/cart'} className="nav-link">Cart</Link>
          </Typography>
          <Typography variant="h6" color="inherit">
          <Link to={'/admin'} className="nav-link">Admin</Link>
          </Typography>
          <Typography variant="h6" color="inherit">
          <Link to={'/analytics'} className="nav-link">issues </Link>
          </Typography>
        </Toolbar>
        
      </AppBar>
      
     
        <div>
          <Switch>

              <Route path='/addproduct' component={AddProduct} />
              <Route path='/cart' component={Cart} />
              <Route path='/admin' component={Admin} />
              <Route path='/analytics' component={ Isuues} />
          </Switch>
        </div>
      </Router> 

      
    </div>
  );
}
