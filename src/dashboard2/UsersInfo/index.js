import React, { Component } from 'react';
// import './style.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Users from '../UsersInfo/users/index';
import UserTabPanel from '../tab-panel/user-tab-panel';

export default class Usersinfo extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        return (
            <>
            <UserTabPanel />
            {/* <Users /> */}
            </>
        )
    }
}
