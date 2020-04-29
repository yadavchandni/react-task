import React, { Component } from 'react';
import './style.css';
import Grid from '@material-ui/core/Grid';
//import Navigation from '../../dashboard2navbar/navbar2/index';
export default class index extends Component {
    render() {
        return (
            <div>  
                {/* <Navigation /> */}
                <div>
                    <form className="login100-form validate-form" >
                        <div className="login100-form" style={{backgroundColor:"white"}}>
                       <span className="login100-form-title">
                            Store info fields 
                        </span>
                        <Grid container spacing={3}>
                            <Grid item xs>
                                <div className="wrap-input100 validate-input" data-validate>
                                    <input className="input100" type="text" required />
                                    <span className="focus-input100" data-placeholder="Business name" />
                                </div>                        
                            </Grid>
                            <Grid item xs>
                                <div className="wrap-input100 validate-input" data-validate>
                                    <input className="input100" type="email" name="reg_email" size={50} required />
                                    <span className="focus-input100" data-placeholder="E-mail" />
                                </div>
                            </Grid>
                            <Grid item xs>
                                <div className="wrap-input100 validate-input" data-validate>
                                    <input className="input100" type="number" required />
                                    <span className="focus-input100" data-placeholder="Mobile Number" />
                                </div>
                            </Grid>           
                        </Grid>
                        <Grid container spacing={3}>                            
                            <Grid item xs>
                                <div className="wrap-input100 validate-input" data-validate>
                                    <input className="input100" type="text" name="reg_email" size={50} required />
                                    <span className="focus-input100" data-placeholder="State " />
                                </div>
                            </Grid>
                            <Grid item xs>
                                <div className="wrap-input100 validate-input" data-validate>
                                    <input className="input100" type="text" name="reg_email" size={50} required />
                                    <span className="focus-input100" data-placeholder="City" />
                                </div> 
                            </Grid>
                            <Grid item xs>
                                <div className="wrap-input100 validate-input" data-validate>
                                    <input className="input100" type="text" name="reg_email" size={50} required />
                                    <span className="focus-input100" data-placeholder="Pincode" />
                                </div> 
                            </Grid>
                        </Grid>
                        <Grid container spacing={3}>                           
                            <Grid item xs>
                                <div className="wrap-input100 validate-input" data-validate>
                                    <input className="input100" type="text" name="reg_email" size={50} required />
                                    <span className="focus-input100" data-placeholder=" Landmark" />
                                </div>
                            </Grid>
                            <Grid item xs>
                                <div className="wrap-input100 validate-input" data-validate>
                                    <input className="input100" type="text" name="reg_email" size={50} required />
                                    <span className="focus-input100" data-placeholder="Address" />
                                </div> 
                            </Grid>
                            <Grid item xs>                           
                            </Grid>
                        </Grid>
                        <br></br>
             <span className="login100-form-title">
               Business settings:-
            </span>
            <Grid container spacing={3}>
            
            <Grid item xs>
            <div className="wrap-input100 validate-input" data-validate>
                <input className="input100" type="text" name="reg_email" size={50} required />
                <span className="focus-input100" data-placeholder="GSTIN Number" />
              </div>
            </Grid>
            <Grid item xs>
            <div className="wrap-input100 validate-input" data-validate>
                <input className="input100" type="text" name="reg_email" size={50} required />
                <span className="focus-input100" data-placeholder="Business PAN Number" />
              </div> 
            </Grid>
            <Grid item xs>
           
            </Grid>
          </Grid>
          <br></br>
          <span className="login100-form-title">
                 Owner profile:-
            </span>
            <Grid container spacing={3}>
            
            <Grid item xs>
            <div className="wrap-input100 validate-input" data-validate>
                <input className="input100" type="text" name="reg_email" size={50} required />
                <span className="focus-input100" data-placeholder="First name" />
              </div>
            </Grid>
            <Grid item xs>
            <div className="wrap-input100 validate-input" data-validate>
                <input className="input100" type="text" name="reg_email" size={50} required />
                <span className="focus-input100" data-placeholder="Last name" />
              </div> 
            </Grid>
            <Grid item xs>
            <div className="wrap-input100 validate-input" data-validate>
                <input className="input100" type="text" name="reg_email" size={50} required />
                <span className="focus-input100" data-placeholder="Mobile Number" />
              </div> 
            </Grid>
          </Grid>

          <Grid container spacing={3}>
            
            <Grid item xs>
            <div className="wrap-input100 validate-input" data-validate>
                <input className="input100" type="text" name="reg_email" size={50} required />
                <span className="focus-input100" data-placeholder="E-mail Id" />
              </div>
            </Grid>
            <Grid item xs>
            <div className="wrap-input100 validate-input" data-validate>
                <input className="input100" type="text" name="reg_email" size={50} required />
                <span className="focus-input100" data-placeholder="Password" />
              </div> 
            </Grid>
            <Grid item xs>         
            </Grid>
          </Grid>

            <div className="container-login100-form-btn">
                <div className="wrap-login100-form-btn">
                  <div className="login100-form-bgbtn" />
                  <button className="login100-form-btn" type="submit" >
                    Register
                  </button>
                </div>
              </div>
              </div>
          </form>
      </div>
     
      
     </div>
        )
    }
}
