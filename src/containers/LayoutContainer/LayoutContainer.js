import React, { Component } from 'react';
import { Switch, Route, withRouter, Redirect } from 'react-router-dom'
import { connect } from "react-redux";

import classes from './LayoutContainer.scss';

import Transitions from '../../utils/Transitions/Transitions';
import Navigation from '../../components/Navigation/Navigation';
import SignUp from '../../components/Pages/SignUp/SignUp';
import LogIn from '../../components/Pages/LogIn/LogIn';
import Home from '../../components/Pages/Home/Home';
import PrivateRoute from '../../components/PrivateRoute/PrivateRoute';
import UserDashboard from '../UserDashboard/UserDashboard';

class LayoutContainer extends Component {

    render() {

        console.log(this.props)
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
