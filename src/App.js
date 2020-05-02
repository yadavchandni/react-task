import React from 'react';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
 //import Navbar from './components/navbar/index';
// import UsersInfo from './dashboard2/UsersInfo/users/index';
//import Inventory from './dashboard2/inventoryinfo/inventory/index';
//import StoreInfo from './dashboard2/Storeinfo/addstore/index';
import AdminDasboardPanel from './dashboard/index';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isAddProduct: false,
      error: null,
      response: {}
    }
   
  }

  onCreate() {
    this.setState({ isAddProduct: true });
  }
  

  render() {
    console.log('App Render')
    return (
      <>
        {/* <Navbar /> */}

        {/* <StoreInfo /> */}

        {/* <Inventory /> */}

        <AdminDasboardPanel />
        
      </>

    );
  }

}

export default  App;
