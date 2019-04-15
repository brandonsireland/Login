import React, { Component, Suspense } from 'react';
import { Switch, Route, withRouter} from 'react-router-dom'
import PropTypes from 'prop-types';

import { connect } from "react-redux";

import classes from './LayoutContainer.scss';

import Navigation from '../../components/Navigation/Navigation';
import Transitions from '../../components/Transitions/Transitions';

import { SignUp, LogIn } from '../../components/Pages'

// Look how routing is done with lazy loading components due to propTypes
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
                                <Route path='/' exact component={props => <Home /> }/>
                                <PrivateRoute path="/dashboard" exact component={props => <UserDashboard /> } />
                            </Switch>
                        </Suspense>
                        </Transitions>
                )}/>
            </div>
        )
    }
};
LayoutContainer.propTypes ={
    component: PropTypes.func
}
const mapStateToProps = state => ({
    auth: state.auth
  });

export default withRouter(connect(mapStateToProps)(LayoutContainer));
