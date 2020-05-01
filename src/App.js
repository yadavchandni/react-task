import React from 'react';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
// import Navbar from './components/navbar/index';
// import UsersInfo from './dashboard2/UsersInfo/users/index';
import Inventory from './dashboard2/inventoryinfo/inventory/index';


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

        {/* <UsersInfo /> */}

        <Inventory />
        
      </>

    );
  }

}

export default  App;
