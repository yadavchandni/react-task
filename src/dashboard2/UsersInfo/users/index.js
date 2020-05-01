import React, { Component } from 'react'
import '../../Storeinfo/addstore/style.css';
import Grid from '@material-ui/core/Grid';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import DateofBirth  from '../users/dataofbirth/index';
import './style.css';

  export default  class index extends Component {  

    render() {
        return (    
                //   user info feilds: 
                
                <div className="container">          
                    <div className="row">
                        <div className="col-md-12" style={{paddingTop:"8%"}}>
                            <form className="login100-form11 validate-form" >
                                <div className="login100-form" style={{backgroundColor:"white"}}>                                                         
                                        <span className="login100-form-title">
                                        User profile:-
                                        </span>
                                        <div className="row">                                                                        
                                          <div className="col-md-4">                                                                               
                                                <div className="wrap-input100 validate-input" data-validate>
                                                    <input className="input100" type="text" name="reg_email" size={50} required />
                                                    <span className="focus-input100" data-placeholder="First name" />
                                                </div>
                                            </div>
                                            <div className="col-md-4">
                                                <div className="wrap-input100 validate-input" data-validate>
                                                    <input className="input100" type="text" name="reg_email" size={50} required />
                                                    <span className="focus-input100" data-placeholder="Last name" />
                                                </div> 
                                            </div>
                                            <div className="col-md-4">
                                                <div className="wrap-input100 validate-input" data-validate>
                                                    <input className="input100" type="text" name="reg_email" size={50} required />
                                                    <span className="focus-input100" data-placeholder="Mobile Number" />
                                                </div> 
                                            </div>                                       
                                        </div> 
                                        <div className="row">                                             
                                            <div className="col-md-4">
                                                <div className="wrap-input100 validate-input" data-validate>
                                                    <input className="input100" type="text" name="reg_email" size={50} required />
                                                    <span className="focus-input100" data-placeholder="E-mail Id" />
                                                </div>
                                            </div>
                                            <div className="col-md-4">
                                                <div className="wrap-input100 validate-input" data-validate>
                                                    <input className="input100" type="text" name="reg_email" size={50} required />
                                                    <span className="focus-input100" data-placeholder="Password" />
                                                </div> 
                                            </div>
                                             <div className="col-md-4">                                                                                                 
                                                       <FormControl className="inputselectlabel">
                                                            <InputLabel htmlFor="grouped-select" >select any interests in</InputLabel>
                                                            <Select defaultValue="" id="grouped-select" >
                                                            <MenuItem value=""> 
                                                               <em>None</em>
                                                            </MenuItem>                                                            
                                                            <MenuItem value={1}>Restaurants</MenuItem>
                                                            <MenuItem value={2}>bars</MenuItem>                                                            
                                                            <MenuItem value={3}>supermarkets</MenuItem>
                                                            <MenuItem value={4}>liquor shop</MenuItem>
                                                            <MenuItem value={1}>clothing</MenuItem>
                                                            <MenuItem value={2}>salon</MenuItem>                                                            
                                                           <MenuItem value={3}>fashion accessories</MenuItem>
                                                            <MenuItem value={4}>sports</MenuItem>
                                                            <MenuItem value={4}>movies </MenuItem>
                                                            </Select>
                                                        </FormControl>   
                                             </div>     
                                                 
                                         </div>
                                            {/*  file upload section   and date of birth  */}
                                            <div className="row">                                            
                                               
                                                    <div className="uploadfile" >
                                                       <Grid item xs>
                                                             <a className="btn-floating purple-gradient mt-4 float-left">
                                                                <i className="fas fa-cloud-upload-alt" aria-hidden="true" />                                                           
                                                             </a>
                                                            <input 
                                                             accept="image/*"
                                                             className="uploadinputfeild"
                                                              id="contained-button-file"
                                                              multiple
                                                               type="file"
                                                                />                                                     
                                                        </Grid>                                   
                                                     </div>     
                                                     <div className="col-md-4">                                                                                                                                                                   
                                                        <DateofBirth />  
                                                     </div>                                                                                     
                                                 <Grid item xs>                                              
                                                 </Grid>                                           
                                          </div>
                                        <br></br><br></br>
                                       {/* register section */}

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
                </div>          
        );
    }
}


