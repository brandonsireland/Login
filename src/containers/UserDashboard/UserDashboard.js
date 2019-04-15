import React, { Component } from 'react';
import classes from './UserDashboard.scss';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { logoutUser } from '../../actions/authActions';

class UserDashboard extends Component {
    logoutUserHandler = (e) => {
        e.preventDefault();
        this.props.logoutUser();
    }
    render() {
        const { user } = this.props.auth;

        return (
            <div className={ classes.UserDashboard }>
            <button onClick={(e) =>  this.logoutUserHandler(e) }>Log out!</button>
        </div>
    )
}
};

UserDashboard.propTypes = {
logoutUser: PropTypes.func.isRequired,
auth: PropTypes.object.isRequired,
};

const mapPropsToState = state => ({
    auth: state.auth
});

export default connect(
    mapPropsToState,
    { logoutUser }
)(UserDashboard);