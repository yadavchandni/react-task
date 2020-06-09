import React from 'react';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
 //import Navbar from './components/navbar/index';
 import UsersInfo from './dashboard2/UsersInfo';
//import Inventory from './dashboard2/inventoryinfo/inventory/index';
import StoreInfo from './dashboard2/Storeinfo';
import AdminDasboardPanel from './dashboard/index';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Inventory from './dashboard2/inventoryinfo';
import Login from './components/loginpage/index';
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

        {/* <AdminDasboardPanel />         */}

        <Router>
          <Switch>
          <Route exact path="/" component={Login}></Route>
          <Route exact path="/home" component={AdminDasboardPanel}></Route>
          <Route path="/store" component={StoreInfo}></Route>
          <Route path="/inventory" component={Inventory}></Route>
          <Route path="/users" component={UsersInfo}></Route>
          </Switch>
        </Router>
      </>
    );
  }

}

export default  App;
