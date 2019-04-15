import React, { Component } from 'react';
import { Switch, Route, withRouter, Redirect } from 'react-router-dom'
import { connect } from "react-redux";

import classes from './LayoutContainer.scss';

import { Home, SignUp, LogIn } from '../../components/Pages'
import Transitions from '../../components/Transitions/Transitions';
import Navigation from '../../components/Navigation/Navigation';
import UserDashboard from '../UserDashboard/UserDashboard';

import PrivateRoute from '../../components/PrivateRoute/PrivateRoute';

class LayoutContainer extends Component {

    render() {

        return (
            <div className={ classes.LayoutContainer }>
                <Navigation />
                <Route
                     render={({ location }) => ( 
                        <Transitions pageKey={location.key} {...location}>
                            <Switch location={ location }>
                                <Route path='/login' exact component={ LogIn }/> 
                                <Route path='/signup' exact component={ SignUp } />
                                <Route path='/' exact component={ Home }/>
                                <PrivateRoute path="/dashboard" exact component={ UserDashboard } />
                            </Switch>
                        </Transitions>
                )}/>
            </div>
        )
    }
};

const mapStateToProps = state => ({
    auth: state.auth
  });

export default withRouter(connect(mapStateToProps)(LayoutContainer));
