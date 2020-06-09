import React, { Component } from 'react';
import './style.css';

export default class FindStore extends Component {
    render() {
        return (
            <div className="container">
                <h4>Find Store Product :</h4>
                <br></br> 
                    <form className="example" action="" method=''>
                        <input type="text" placeholder="Search..." name="search2" />
                        <button type="submit">
                            <i className="fa fa-search"></i>                       
                        </button>
                    </form>
                    <br></br><br></br> <br></br><br></br> 
            </div>
            
        )
    }
}
