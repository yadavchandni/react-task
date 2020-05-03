import React, { Component } from 'react'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Form from './form';
import InventoryTabPanel  from '../tab-panel/inventorytab'

export default class Inventory extends Component {
    render() {
        return (       
            <div>
                <div>
                    <InventoryTabPanel />
                </div>
                {/* <Router>               
            <Switch>
                <Route exact path="/inventory" component={Form}></Route>               
            </Switch>
        </Router> */}
            </div>
        )
    }
}
