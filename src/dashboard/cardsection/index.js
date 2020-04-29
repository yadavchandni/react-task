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

export default class cardsection extends Component {
    render() {
        return (
            <div>                 
            <main className="page-content" style={{float:"left",backgroundColor:"#efefef",paddingLeft:"2px"}}>
              <div className="container-fluid main-right-contain" >
                <h2>Admin Panel</h2>
                <hr />
                <br></br>
                <div className="row" >                
                  <div className="form-group col-md-12" >                                       
                          <div className="row">                      
                            <div className="col-lg-4 col-md-6 col-sm-6">
                              <div className="card card-stats">
                                <div className="card-header card-header-warning card-header-icon" style={{height:"6.5rem", paddingRight:"1rem"}}>
                                  <div className="card-icon">                                   
                                    <i className="material-icons">store</i>
                                  </div>
                                  <p className="card-category">Used Space</p>
                                  <h3 className="card-title"> Store Product                    
                                   </h3>                                
                                </div>                             
                                <div className="card-footer">
                                  <div className="stats">
                                    <i className="material-icons text-danger">warning</i>
                                    <a href="javascript:;">Get More Space...</a>
                                  </div>
                                </div>
                              </div>
                            </div>                        
                            <div className="col-lg-4 col-md-6 col-sm-6">
                              <div className="card card-stats">
                                <div className="card-header card-header-success card-header-icon"  style={{height:"6.5rem"}}>
                                  <div className="card-icon">
                                  <i className="material-icons">content_copy</i>
                                  </div>
                                  <p className="card-category">Revenue</p>
                                  <h2 className="card-title">Inventory</h2>
                                </div>
                                <div className="card-footer">
                                  <div className="stats">
                                    <i className="material-icons">date_range</i> Last 24 Hours
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="col-lg-4 col-md-6 col-sm-6">
                              <div className="card card-stats">
                                <div className="card-header card-header-danger card-header-icon"  style={{height:"6.5rem"}}>
                                  <div className="card-icon">
                                    <i className="material-icons">info_outline</i>
                                  </div>
                                  <p className="card-category">Fixed Issues</p>
                                  <h2 className="card-title">Users</h2>
                                </div>
                                <div className="card-footer">
                                  <div className="stats">
                                    <i className="material-icons">local_offer</i> Tracked from Github
                                  </div>
                                </div>
                              </div>
                            </div>
                           
                          </div>
                  </div>                 
                </div>              
                <h2>Analytics</h2>
                <hr />
                <br></br>
                
                   {/* Barchart */}
                   <Barchart data={data} />
              
              </div>
            </main>
        </div>
        )
    }
}
