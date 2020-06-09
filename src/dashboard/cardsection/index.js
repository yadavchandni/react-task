import React, { Component } from 'react';
// import Grid from '@material-ui/core/Grid';
// import Button from '@material-ui/core/Button';
// import StorageIcon from '@material-ui/icons/Storage';
// import AddCircleIcon from '@material-ui/icons/AddCircle';
// import Card from '@material-ui/core/Card';
// import CardContent from '@material-ui/core/CardContent';
// import Typography from '@material-ui/core/Typography';
// import PersonIcon from '@material-ui/icons/Person';
//import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
//import Analytics from '../../dashboard2/Analytics/index';
import './cardsection.css';
import Barchart from '../barchart/barchart';
import data from '../barchart/data.json';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

export default class cardsection extends Component {
    render() {
        return (
            <div className="row main">                 
            <main className="page-content" style={{float:"left",backgroundColor:"#efefef",paddingLeft:"2px"}}>
              <div className="col-md-12" >
                <h2>Admin Panel</h2>
                <hr />
                <br></br>
                <div className="row" >                
                    <div className="form-group col-md-12" >                                       
                          <div className="row">                            
                            <div className="col-lg-4 col-md-8 col-sm-6">
                              <div className="card card-stats">
                                <div className="card-header card-header-warning card-header-icon" >
                                <div className="card-icon"  >                                   
                                 <i className="material-icons">store</i>
                                  </div>                               
                                  <h3 className="card-title" >
                                     <Link to={'/store'}>Store Product  </Link>                  
                                  </h3>                                
                                </div>                                                           
                              </div>
                            </div>                        
                              
                            {/*======================= inventory info router =========================*/}
                           
                            <div className="col-lg-4 col-md-6 col-sm-6">
                              <div className="card card-stats">
                                <div className="card-header card-header-success card-header-icon" >
                                  <div className="card-icon" >
                                  <i className="material-icons" >content_copy</i>
                                  </div>                                 
                                  <h2 className="card-title">
                                    <Link to={'/inventory'}>Inventory</Link> 
                                  </h2>
                                </div>                                
                              </div>
                            </div>
                                                      
                            {/*=================================== users info ========================= */}                       
                            <div className="col-lg-4 col-md-6 col-sm-6">
                              <div className="card card-stats">
                                <div className="card-header card-header-danger card-header-icon" >
                                  <div className="card-icon" >
                                    <i className="material-icons">info_outline</i>
                                  </div>
                                  
                                  <h2 className="card-title">
                                  <Link to={'/users'}>Users</Link> 
                                  </h2>
                                </div>                               
                              </div>
                            </div>                      
                            <div>                                 
                              </div>                                                     
                          </div>
                  </div>                 
                </div>              
                <h2>Analytics</h2>
                <hr />
                <br></br>
                
                   {/*============================= Barchart =======================*/}
                   <Barchart data={data} />
              
              </div>
            </main>
        </div>
        )
    }
}
