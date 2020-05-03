import React, { Component } from 'react'
import '../../Storeinfo/addStoreForm/style.css';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import DateofBirth  from '../users/dataofbirth/index';
// inventory form style css file
import '../../inventoryinfo/form/style.css';
  export default  class index extends Component {  

    render() {
        return (    
                //   user info feilds: 
                
                <div className="card-body">  
                     <div>
                        <h2 className="addproduct-heading">
                            User Form*:
                        </h2>
                     </div>
                    <br></br>        
                    <div className=" inventory-info"  >
                        <div className="col-md-12" >
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
                                     <div className="form-group bmd-form-group">
                                        <label className="bmd-label-floating">Mobile *:</label>                  
                                        <input className="form-control"  type="number" name="reg_email" size={50} required  placeholder="Enter Mobile Name" />   
                                    </div>
                                </div>
                            </div>
                            <br></br>
                            <div className="row">
                                <div className="col-md-4">
                                     <div className="form-group bmd-form-group">
                                        <label className="bmd-label-floating">Email *:</label>                  
                                        <input className="form-control"  type="email" name="reg_email" size={50} required  placeholder="Enter Email Name" />   
                                    </div>
                                 </div>
                                <div className="col-md-4">
                                    <div className="form-group bmd-form-group">
                                        <label className="bmd-label-floating">Password</label>
                                            {/* <InfoIcon className="fa fa-info-circle" color="primary" /> */}                            
                                            <input className="form-control" type="password" required placeholder="Enter Password" />
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className="form-group bmd-form-group">
                                        <label className="bmd-label-floating">Pincode</label>
                                            {/* <InfoIcon className="fa fa-info-circle" color="primary" /> */}                            
                                            <input className="form-control" type="number" required placeholder="Enter Pincode" />
                                    </div>
                                </div>

                            </div>
                            <br></br>
                                <div className="row">
                                        <div className="col-md-4">    
                                             <div className="form-group bmd-form-group">                                                                                             
                                                <FormControl className="inputselectlabel form-control " >
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
                                          
                                             
                                </div>  
                                <br></br><br></br>
                                <div className="row">
                                     {/*  file upload section   and date of birth  */}
                                     <div className="col-md-4 "><br></br>
                                            <div className="form-group bmd-form-group">  
                                                <input 
                                                accept="image/*"                                               
                                                id="contained-button-file"
                                                multiple
                                                type="file"
                                                />       
                                             </div> 
                                        </div>
                                        <div className="col-md-4">   
                                             <div className="form-group bmd-form-group">                                                                                                                                                                
                                             <DateofBirth className="form-control"/>
                                             </div>  
                                         </div>                               
                                </div>                     
                                {/* register section */}
                                <br></br>
                                <div className="row">
                                    <div className="col-md-12">
                                    <center>
                                    <button  type="button" className="btn purple-gradient save-button">Register</button>
                                    </center>           
                                    </div>
                                </div>
                            </div>                                                                
                      </div>      
                </div>          
        );
    }
}


