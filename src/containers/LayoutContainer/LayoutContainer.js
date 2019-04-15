import React, { Component, Suspense } from 'react';
import { Switch, Route, withRouter, Redirect } from 'react-router-dom'
import { connect } from "react-redux";

import classes from './LayoutContainer.scss';

import Navigation from '../../components/Navigation/Navigation';
import Transitions from '../../components/Transitions/Transitions';

import { SignUp, LogIn } from '../../components/Pages'
const Home = React.lazy(() => import('../../components/Pages/Home/Home'))
const UserDashboard = React.lazy(() => import('../UserDashboard/UserDashboard'));

import PrivateRoute from '../../components/PrivateRoute/PrivateRoute';

class LayoutContainer extends Component {

    render() {
        console.log(this.props)
        return (
            <div className={ classes.LayoutContainer }>
                <Navigation />
                <Route
                     render={({ location }) => ( 
                        <Transitions pageKey={location.key} {...location}>
                        <Suspense fallback={<div>...loading</div>}>
                            <Switch location={ location }>
                                <Route path='/login' exact component={ LogIn }/> 
                                <Route path='/signup' exact component={ SignUp } />
                                <Route path='/' exact component={ Home }/>
                                <PrivateRoute path="/dashboard" exact component={ UserDashboard } />
                            </Switch>
                        </Suspense>
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
