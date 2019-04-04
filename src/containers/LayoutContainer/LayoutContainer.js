import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom'

import classes from './LayoutContainer.scss';

import Navigation from '../../components/Navigation/Navigation';
import SignUp from '../../components/SignUp/SignUp';
import LogIn from '../../components/LogIn/LogIn';
import Transitions from '../../components/Transitions/Transitions';

class LayoutContainer extends Component {
    state = {
        
    }
    
    render() {
        return (
            <div className={ classes.LayoutContainer }>
                <Navigation />
                <Route
                    render={({ location }) => (
                    // <Transitions pageKey={location.key} {...location.state}>
                        <Switch location={location}>
                            <Route path='/login' component={ LogIn } />
                            <Route path='/signup' component={ SignUp } />
                            <Redirect exact from='/' to='/signup' />
                        </Switch>
                    // </Transitions>
                )}/>
            </div>
        )
    }
};

export default LayoutContainer;