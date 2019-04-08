import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom'

import classes from './LayoutContainer.scss';

import Transitions from '../../components/Transitions/Transitions';

import Navigation from '../../components/Navigation/Navigation';
import SignUp from '../../components/Pages/SignUp/SignUp';
import LogIn from '../../components/Pages/LogIn/LogIn';
import Home from '../../components/Pages/Home/Home';

class LayoutContainer extends Component {
    
    state = {
        
    }
    render() {
        return (
            <div className={ classes.LayoutContainer }>
                <Navigation />
                <Route
                    render={({ location }) => (
                    <Transitions pageKey={location.key} {...location}>
                        <Switch location={ location }>
                            <Route path='/login' component={ LogIn } />
                            <Route path='/signup' component={ SignUp } />
                            <Route path='/' exact component={ Home }/>
                        </Switch>
                    </Transitions>
                )}/>
            </div>
        )
    }
};

export default LayoutContainer;