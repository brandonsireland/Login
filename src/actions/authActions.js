import axios from '../../axios';
import setAuthToken from '../utils/setAuthToken';
import jwt_decode from 'jwt-decode';

import {
    GET_ERRORS,
    SET_CURRENT_USER,
    USER_LOADING
}   from './types';

// Register User
export const registerUser = (userData, history) => dispatch => {
    axios
        .post('/api/v1/user/signup', userData)
        .then(res => history.push('/login')) // redirects to login if successful
        .catch( err => {
            dispatch({
                type: GET_ERRORS,
                payload: err.response.data
            })
        })
};

// Login User
export const loginUser = userData => dispatch => {
    axios
        .post('/api/v1/user/login', userData)
        .then( res => {
            // Save to local storage

            // Set token to localStorage
            const { token } = res.data;
            localStorage.setItem('jwtToken', token);

            //  Set token to Authheader
            setAuthToken(token);
            
            // decode token to get user data
            const decoded = jwt_decode(token);
            dispatch(setCurrentUser(decoded));
        })
        .catch(err => 
            dispatch({
                type: GET_ERRORS,
                payload: err.response.data
            }))
};

// Set login in user
export const setCurrentUser = decoded => {
    return {
        type: SET_CURRENT_USER,
        payload: decoded
    };
};

// User Loading
export const setUserLoading = () => {
    return {
        type: USER_LOADING
    }
};

// Log out user
export const logoutUser = () => dispatch => {

    // Removes token from the local Storage
    localStorage.removeItem('jwtToken');

    // remove auth header for future requests
    setAuthToken(false);

    // set current user to empty object which will set isauthenticated to false
    dispatch(setCurrentUser({}));
};

