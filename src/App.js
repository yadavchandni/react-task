import React from 'react';
import './App.css';
import Cart from  './cart';
import NavBar from  './components/navbar';

// import { BrowserRouter, Route, Link } from "react-router-dom";

import {Switch,Route} from 'react-router-dom';
import AddProduct from './components/addproduct/AddProduct';
class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {

    }
  }

  render() {
    console.log('App Render')
    return (
      <>
      <React.Fragment>
          
          <Switch>
     

                <Route path='/addproduct' components={AddProduct} />

               
          </Switch>
       
      </React.Fragment>
      
       

       
        
      </>
      
    );
  }

}

export default  App;
