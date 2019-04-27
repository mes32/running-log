import React, { Component } from 'react';
import { HashRouter as Router, Route, Redirect, Switch } from 'react-router-dom';
import { connect } from 'react-redux';

import HomePage from '../HomePage/HomePage';
import SettingsPage from '../SettingsPage/SettingsPage';

import './App.css';

class App extends Component {
    render() {
        return (
            <Router>
                <div>
                    <Switch>
                        <Redirect exact from="/" to="/home" />
                        <Route
                            exact path="/home"
                            component={HomePage}
                        />
                        <Route
                            exact path="/settings"
                            component={SettingsPage}
                        />
                    </Switch>
                </div>
            </Router>
        );
    }
}

export default connect()(App);
