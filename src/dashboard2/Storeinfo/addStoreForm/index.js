import React, { Component } from 'react';
import './style.css';
import Grid from '@material-ui/core/Grid';
//import Navigation from '../../dashboard2navbar/navbar2/index';
import '../../inventoryinfo/form/style.css';
import FindStoreSearchBar from '../findstore';

export default class AddStoreForm extends Component {
    render() {
        return (
                <div className="card-body">
                    <br></br>
                    <div className=" inventory-info">
                    <h2 className="storeinfo-heading">Store info fields*: </h2>
                    <br></br>
                    <div className="storeinfo-main">        
                        <div className="row">               
                            <div className="col-md-4">
                                <div className="form-group bmd-form-group">
                                    <label className="bmd-label-floating">First Name</label>
                                        {/* <InfoIcon className="fa fa-info-circle" color="primary" /> */}
                                        <input type="text" className="form-control"  placeholder="Enter First Name" />
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="form-group bmd-form-group">
                                    <label className="bmd-label-floating">Last Name</label>                            
                                        <input type="text" className="form-control" id="outlined-basic" placeholder="Enter Last Name" />                             
                                </div>
                            </div>
                            {/* barcode */}
                            <div className="col-md-4">
                                <label className="bmd-label-floating">Email *:</label>                  
                                <input className="form-control"  type="email" name="reg_email" size={50} required  placeholder="Enter Email Name" />   
                            </div>
                        </div>
                        <br></br>
                        <div className="row">
                            {/* sku section */}
                            <div className="col-md-4">
                                <div className="form-group bmd-form-group">
                                    <label className="bmd-label-floating">Mobile Number</label>
                                        {/* <InfoIcon className="fa fa-info-circle" color="primary" /> */}                            
                                        <input className="form-control" type="number" size={11} required placeholder="Enter MObile Number" />
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="form-group bmd-form-group">
                                    <label className="bmd-label-floating">State</label>                           
                                        <input type="text" className="form-control" id="outlined-basic" placeholder="Enter State" name="reg_email" size={50} required />                                                 
                                </div>
                            </div>
                            {/* barcode */}
                            <div className="col-md-4">
                                <label className="bmd-label-floating">City*:</label>               
                                <input className="form-control"  type="text" name="reg_email" size={50} required  placeholder="Enter City Name" />   
                            </div>
                        </div>

                        <br></br>
                        <div className="row">              
                            <div className="col-md-4">
                                <div className="form-group bmd-form-group">
                                    <label className="bmd-label-floating">Pincode</label>
                                        {/* <InfoIcon className="fa fa-info-circle" color="primary" /> */}                            
                                        <input className="form-control" type="number" required placeholder="Enter Pincode" />
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="form-group bmd-form-group">
                                    <label className="bmd-label-floating">Landmark</label>                           
                                        <input type="text" className="form-control" id="outlined-basic" placeholder="Enter Landmark" name="reg_email" size={50} required />                                                 
                                </div>
                            </div>
                            {/* barcode */}
                            <div className="col-md-4">
                                <label className="bmd-label-floating">Address*:</label>               
                                <input className="form-control"  type="text" name="reg_email" size={50} required  placeholder="Enter Address Name" />   
                            </div>
                        </div>

                        {/* bussiness profile form */}
                        <br></br>
                        <h2>Business settings*:-</h2>           
                        <br></br>
                        <div className="row">              
                            <div className="col-md-4">                   
                                <div className="form-group bmd-form-group">
                                    <label className="bmd-label-floating">GSTIN Number</label>
                                        {/* <InfoIcon className="fa fa-info-circle" color="primary" /> */}                            
                                        <input className="form-control" type="number" required placeholder="Enter GSTIN Number" />
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="form-group bmd-form-group">
                                    <label className="bmd-label-floating">Business PAN Number</label>                           
                                        <input type="text" className="form-control" id="outlined-basic" placeholder="Enter Business PAN No" name="reg_email" size={50} required />                                                 
                                </div>
                            </div>
                            </div>
                            {/* owner form */}
                            <br></br>
                            <h2>Owner profile *:</h2>           
                            <br></br>
                            <div className="row">             
                            <div className="col-md-4">
                                <div className="form-group bmd-form-group">
                                    <label className="bmd-label-floating">First Name</label>
                                        {/* <InfoIcon className="fa fa-info-circle" color="primary" /> */}
                                        <input type="text" className="form-control"  placeholder="Enter First Name" />
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="form-group bmd-form-group">
                                    <label className="bmd-label-floating">Last Name</label>                            
                                        <input type="text" className="form-control" id="outlined-basic" placeholder="Enter Last Name" />                             
                                </div>
                            </div>
                            {/* barcode */}
                            <div className="col-md-4">
                                <label className="bmd-label-floating">Mobile *:</label>                  
                                <input className="form-control"  type="number" name="reg_email" size={50} required  placeholder="Enter Mobile Name" />   
                            </div>
                        </div>
                        <br></br>
                        <div className="row">
                            {/* sku section */}
                            <div className="col-md-4">
                                <div className="form-group bmd-form-group">
                                    <label className="bmd-label-floating">Email </label>
                                        {/* <InfoIcon className="fa fa-info-circle" color="primary" /> */}
                                        <input type="email" className="form-control"  placeholder="Enter Email " />
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="form-group bmd-form-group">
                                    <label className="bmd-label-floating">Password- </label>                            
                                        <input type="password" className="form-control" id="outlined-basic" placeholder="Enter Password- " />                             
                                </div>
                            </div>
                            {/* barcode */}
                            <div className="col-md-4">
                                <label className="bmd-label-floating">Confirm password*:</label>               
                                <input className="form-control"  type="email" name="reg_email" size={50} required  placeholder="Enter Confirm password Name" />  
                            </div>
                        </div>
                        <br></br>
                    <div className="row">
                        <div className="col-md-12">
                        <center>
                        <button  type="button" className="btn purple-gradient save-button">Register</button>
                        </center>           
                        </div>
                    </div>
                    <br></br> <br></br>
                    {/* find store search bar */}
                    <hr className="new4" />
                    <br></br>
                    <div className="row">
                        <FindStoreSearchBar />
                    </div>
                    </div>
                    </div>
                </div>

        );
    }
}

    //         <div className="container">               
    //             <div className="row">
    //                <form className="login100-form validate-form" >
    //                     <div className="login100-form" style={{backgroundColor:"white"}}>
    //                    <span className="login100-form-title">
    //                         Store info fields 
    //                     </span>
                       
    //                     <div className="col-md-4">
    //                         <div className="form-group bmd-form-group">
    //                             <label className="bmd-label-floating">First Name</label>
    //                                  {/* <InfoIcon className="fa fa-info-circle" color="primary" /> */}
    //                                  <input type="text" className="form-control"  placeholder="Enter First Name" />
    //                         </div>
    //                      </div>
    //                      <div className="col-md-4">
    //                         <div className="form-group bmd-form-group">
    //                             <label className="bmd-label-floating">Last Name</label>
    //                                  {/* <InfoIcon className="fa fa-info-circle" color="primary" /> */}
    //                                  <input type="text" className="form-control"  placeholder="Enter Last Name" />
    //                         </div>
    //                      </div>
    //                         <Grid item xs>
    //                             <div className="wrap-input100 validate-input" data-validate>
    //                                 <input className="input100" type="email" name="reg_email" size={50} required />
    //                                 <span className="focus-input100" data-placeholder="E-mail" />
    //                             </div>
    //                         </Grid>
    //                         <Grid item xs>
    //                             <div className="wrap-input100 validate-input" data-validate>
    //                                
    //                                 <span className="focus-input100" data-placeholder="Mobile Number" />
    //                             </div>
    //                         </Grid>           
                       
    //                     <Grid container spacing={3}>                            
    //                         <Grid item xs>
    //                             <div className="wrap-input100 validate-input" data-validate>
    //                                 
    //                                 <span className="focus-input100" data-placeholder="State " />
    //                             </div>
    //                         </Grid>
    //                         <Grid item xs>
    //                             <div className="wrap-input100 validate-input" data-validate>
    //                                 
    //                                 <span className="focus-input100" data-placeholder="City" />
    //                             </div> 
    //                         </Grid>
    //                         <Grid item xs>
    //                             <div className="wrap-input100 validate-input" data-validate>
    //                                 <input className="input100" type="text" name="reg_email" size={50} required />
    //                                 <span className="focus-input100" data-placeholder="Pincode" />
    //                             </div> 
    //                         </Grid>
    //                     </Grid>
    //                     <Grid container spacing={3}>                           
    //                         <Grid item xs>
    //                             <div className="wrap-input100 validate-input" data-validate>
    //                                 <input className="input100" type="text" name="reg_email" size={50} required />
    //                                 <span className="focus-input100" data-placeholder=" Landmark" />
    //                             </div>
    //                         </Grid>
    //                         <Grid item xs>
    //                             <div className="wrap-input100 validate-input" data-validate>
    //                                 <input className="input100" type="text" name="reg_email" size={50} required />
    //                                 <span className="focus-input100" data-placeholder="Address" />
    //                             </div> 
    //                         </Grid>
    //                         <Grid item xs>                           
    //                         </Grid>
    //                     </Grid>
    //                      <br></br>
    //                     <span className="login100-form-title">
    //                     Business settings:-
    //                     </span>
    //                     <Grid container spacing={3}>
                            
    //                         <Grid item xs>
    //                             <div className="wrap-input100 validate-input" data-validate>
    //                                 <input className="input100" type="text" name="reg_email" size={50} required />
    //                                 <span className="focus-input100" data-placeholder="GSTIN Number" />
    //                             </div>
    //                         </Grid>
    //                         <Grid item xs>
    //                             <div className="wrap-input100 validate-input" data-validate>
    //                                 <input className="input100" type="text" name="reg_email" size={50} required />
    //                                 <span className="focus-input100" data-placeholder="Business PAN Number" />
    //                             </div> 
    //                         </Grid>
    //                         <Grid item xs>                    
    //                         </Grid>
    //                     </Grid>
    //                     <br></br>
    //                     <span className="login100-form-title">
    //                          Owner profile:-
    //                      </span>
    //                     <Grid container spacing={3}>
    //                         <Grid item xs>
    //                             <div className="wrap-input100 validate-input" data-validate>
    //                                 <input className="input100" type="text" name="reg_email" size={50} required />
    //                                 <span className="focus-input100" data-placeholder="First name" />
    //                             </div>
    //                         </Grid>
    //                         <Grid item xs>
    //                             <div className="wrap-input100 validate-input" data-validate>
    //                                 <input className="input100" type="text" name="reg_email" size={50} required />
    //                                 <span className="focus-input100" data-placeholder="Last name" />
    //                             </div> 
    //                         </Grid>
    //                         <Grid item xs>
    //                             <div className="wrap-input100 validate-input" data-validate>
    //                                 <input className="input100" type="text" name="reg_email" size={50} required />
    //                                 <span className="focus-input100" data-placeholder="Mobile Number" />
    //                             </div> 
    //                          </Grid>
    //                     </Grid>
    //                     <Grid container spacing={3}>                            
    //                         <Grid item xs>
    //                         <div className="wrap-input100 validate-input" data-validate>
    //                             <input className="input100" type="text" name="reg_email" size={50} required />
    //                             <span className="focus-input100" data-placeholder="E-mail Id" />
    //                         </div>
    //                         </Grid>
    //                         <Grid item xs>
    //                             <div className="wrap-input100 validate-input" data-validate>
    //                                 <input className="input100" type="text" name="reg_email" size={50} required />
    //                                 <span className="focus-input100" data-placeholder="Password" />
    //                             </div> 
    //                         </Grid>
    //                         <Grid item xs>         
    //                         </Grid>
    //                     </Grid>

    //                     <div className="container-login100-form-btn">
    //                         <div className="wrap-login100-form-btn">
    //                         <div className="login100-form-bgbtn" />
    //                         <button className="login100-form-btn" type="submit" >
    //                             Register
    //                         </button>
    //                         </div>
    //                     </div>
    //                  </div>
    //             </form>
    //          </div>      
    //  </div>