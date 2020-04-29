import React, { Component } from 'react';
import Barchart from '../../dashboard/barchart/barchart'

export default class index extends Component {
    render() {
        return (
            <div> 
                <h2>Analytics</h2>
                <hr />
                <Barchart />   
            </div>
        )
    }
}
