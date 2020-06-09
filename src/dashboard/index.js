
import React, { Component } from 'react';
import Cardsection from './cardsection/index';
import Sidebarsection from './sidebar/sidebar';
// import  './style.css';
export default class index extends Component {
  render() {
    return (
      <div className="row">       
        <div className="col-md-12">
            {/* sidebar section  */}
            <Sidebarsection />
            
            {/* card section  */}
             <Cardsection />   
         </div>      
      
      </div>
    )
  }
}


