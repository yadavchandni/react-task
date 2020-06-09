
import React, { Component }  from 'react'
import './style.css';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import EqualizerIcon from '@material-ui/icons/Equalizer';
import ReceiptIcon from '@material-ui/icons/Receipt';
import LocalActivityIcon from '@material-ui/icons/LocalActivity';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
// import MyBills from '../bills/index';

import HomeIcon from '@material-ui/icons/Home';
import './style.css';
export default class Leftsidebar extends Component  { 
        
        render() {
    return (
        
        <div className="sidebar-main ">  
            <Router>  
         {/* <MyProfile /> */}   
        <div className="sidebar sidebar-phone-format">
          <ul>
            <li className="link-sidebar">             
             <Link to={'/home'}><i ><HomeIcon   className="sidebar-icon" /></i>
                <span className="sidebar-phone-format-heading">Home</span></Link>         
            </li>
            <li className="link-sidebar">               
                 <Link to={'/home'}><i className="sidebar-phone-format-i"><AccountCircleIcon className="sidebar-icon"/></i>
                    <span className="sidebar-phone-format-heading">Profile</span>     
                </Link>        
            </li>
            <li className="link-sidebar">              
                <Link to={'/home'}><i className="sidebar-phone-format-i"><ReceiptIcon className="sidebar-icon"/></i>
                   <span className="sidebar-phone-format-heading">Report</span>      
                </Link>     
            </li>
            <li className="link-sidebar">           
                <Link to={"/home"}><i className="sidebar-phone-format-i"><LocalActivityIcon className="sidebar-icon"/></i>
                    <span className="sidebar-phone-format-heading">Details</span>    
                </Link>      
            </li>
            <li className="link-sidebar">          
                <Link to={'/profile'}><i className="sidebar-phone-format-i"><AccountCircleIcon className="sidebar-icon"/></i>
                    <span className="sidebar-phone-format-heading">User</span>
                </Link>                
            </li>
          </ul>
        </div>
        {/* =================================== Router =================================================== */}
        {/* <div>
            <Switch>      
                <Route exact path="/home" component={Home}></Route>
                <Route path="/analytic" component={Analytics}></Route>
                <Route path="/history" component={History}></Route>
                <Route path="/offer" component={MyOffer}></Route>
                <Route path="/profile" component={MyProfile}></Route>
            </Switch>
        </div>       */}
        </Router>
        </div>
       
        
    );
}
}


