
import React, { Component } from 'react';
import Cardsection from '../cardsection/index';
import Sidebarsection from '../sidebar/sidebar';
import  './style.css';
import Navbar from '../../components/navbar/index';
export default class index extends Component {
  render() {
    return (
      <div>       
        <div>        
             {/*navigation bar  */}
             <Navbar />
            {/* sidebar section  */}
            <Sidebarsection />
            {/* card section  */}
             <Cardsection />   
         </div>      
      
      </div>
    )
  }
}


