import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import classes from './LayoutContainer.scss';

import Navigation from '../../components/Navigation/Navigation';
import Home from '../../components/Home/Home';
import SignUp from '../../components/SignUp/SignUp';
import LogIn from '../../components/LogIn/LogIn';

class LayoutContainer extends Component {
    state = {
    }

    render() {
        return (
            <div className={ classes.LayoutContainer }>
                    <Navigation />
                    <Switch>
                        <Route 
                            path="/login" 
                            exact 
                            component={ LogIn } />
                        <Route 
                        path="/signup" 
                        exact 
                        component={ SignUp } />
                        <Route 
                        path="/" 
                        exact 
                        component={ SignUp } />
                    </Switch>
            </div>
        )
    }
};

export default LayoutContainer;