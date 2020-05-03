import React, { Component } from 'react';
// import './style.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import AddStoreForm from './addStoreForm';
import NavigationTab from '../tab-panel/store-tab-panel';

export default class StoreInfo extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        return (
            <>
            {/* store navigation bar */}
            <NavigationTab></NavigationTab>
        
            </>
        )
    }
}
