import React, { Component } from 'react'
import './style.css';
import TextField from '@material-ui/core/TextField';
import VisibilityIcon from '@material-ui/icons/Visibility';
import LockIcon from '@material-ui/icons/Lock';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';

export default class Login extends Component {
    render() {
        return (
             <div>
                    <div className="limiter">
                    <div className="container-login100">
                    <div className="wrap-login100-signup">
                        <form className="login100-form validate-form" >
                        <span className="login100-form-title">
                            Welcome Back
                        </span>
                        <span className="login100-form-title" >
                            <LockIcon style={{fontSize:"50px",paddingBottom:"0px"}} />
                        </span>
                        <div className="wrap-input100 validate-input" data-validate="username@example.com">
                            {/* <input className="input100" type="email" name="login_email" defaultValue  required />
                            <span className="focus-input100" data-placeholder="Email" /> */}
                            <TextField id="standard-secondary" label="Email" type='email'  name="login_email"   required  color="secondary" style={{minWidth:"250px"}} />
                        </div>
                        <div className="wrap-input100 validate-input" data-validate="Enter password">
                            <span className="btn-show-pass">
                            <VisibilityIcon />
                            </span>              
                            <TextField id="standard-secondary" label="Password" type="password" name="password"   required color="secondary"  style={{minWidth:"250px"}} />
                        </div>
                        {/* =========================== LOGIN BUTTON================================ */}
                        <div className="container-login100-form-btn">
                            <div className="wrap-login100-form-btn">
                            <div className="login100-form-bgbtn" />
                            <Link to="/home" style={{textDecoration:"none"}}><button className="login100-form-btn" type="submit" >
                                Login 
                            </button></Link>
                            </div>
                        </div>
                        {/* =============================== FOOTER FORM DETIALS============================================ */}
                        {/* <div style={{textAlign: 'center', paddingTop: '55px'}}>
                            <span className="txt1">
                            Don’t have an account?
                            </span>
                        
                            <Link to='/'>Sign Up </Link>
                        
                        </div> */}
                        </form>
                    </div>
                    </div>
                </div>
            </div>
        )
    }
}
