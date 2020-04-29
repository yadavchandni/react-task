import React from 'react';
import './App.css';
import AdminDashboard  from './dashboard/admin-dashboard/dashboard';
import "bootstrap/dist/css/bootstrap.min.css";

// import { Container} from 'react-bootstrap';


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
        <AdminDashboard />            
      </>

    );
  }

}

export default  App;
