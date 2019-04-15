import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import classes from './Form.scss';

import { registerUser, loginUser } from '../../actions/authActions';

import Input from '../../components/UI/Input/Input';
import ButtonOval from '../../components/UI/Buttons/ButtonOval/ButtonOval';

class Form extends Component {
    state = {
        user: {
            username : {
                elementType: 'text',
                elementConfig: {
                    type: 'username',
                    placeholder: 'Username'
                },
                value: '',
                icon: 'faUserAlt'
            },
            email : {
                elementType: 'text',
                elementConfig: {
                    type: 'email',
                    placeholder: 'Email'
                },
                value: '',
                icon: 'faEnvelope'
            },
            password : {
                elementType: 'text',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Password'
                },
                value: '',
                icon: 'faLockAlt'
            },
            password_two : {
                elementType: 'text',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Re-enter your Password'
                },
                value: '',
                icon: 'faLockAlt'
            }
        },
        errors: {}
    };

    componentWillReceiveProps(nextProps){
        
        if (nextProps.auth.isAuthenticated) {
            this.props.history.push("/dashboard");
        }

        if(nextProps.errors){
            this.setState({
                errors: nextProps.errors
            })
        }
    }

    submitLogInHandler = (event) => {
        event.preventDefault();
        const loginUser = {};
        
        for(let formElementIdentifier in this.state.user) {
            loginUser[formElementIdentifier] = this.state.user[formElementIdentifier].value;
        }
        this.props.loginUser(loginUser)
    };

    submitSignUpHandler = (event) => {
        event.preventDefault();
        const newUser = {};
        
        for(let formElementIdentifier in this.state.user) {
            newUser[formElementIdentifier] = this.state.user[formElementIdentifier].value;
        }
        this.props.registerUser(newUser, this.props.history);
    };

    inputChangedHandler = (event, inputIdentifier) => {
        const updatedOrderForm = {
            ...this.state.user
        };
        const updatedFormElement = { 
            ...updatedOrderForm[inputIdentifier]
        };
        updatedFormElement.value = event.target.value;
        updatedOrderForm[inputIdentifier] = updatedFormElement;
        
        
        this.setState({user: updatedOrderForm});

    }

    render() {
        console.log(this.props)
        const { errors } = this.state;
        let formDiv;
        let formElementsArray = [];

        for(let key in this.state.user) {
            formElementsArray.push({
                id: key,
                config: this.state.user[key]
            })
        }

    if(this.props.type == 'signin') {
        formDiv = (
            <div className={ classes.Form } >
                <span> or use your email account: </span>
                <form >
                    { formElementsArray.map((formElement) => {
                        if( formElement.id !== 'username' && formElement.id !== 'password_two' ) {
                            return (
                                    <Input
                                        key={ formElement.id }
                                        elementType={ formElement.config.elementType } 
                                        elementConfig={ formElement.config.elementConfig } 
                                        value={ formElement.config.value }
                                        icon={ formElement.config.icon }
                                        // error={ this.state.errors[`${formElement.id}`] }
                                        changedValue={(event) => this.inputChangedHandler(event, formElement.id ) }
                                    />
                                   )
                        }
                    })}
                </form>
                <Link to='/forgot'>
                    <span className={ classes.Form__forgot }>Forgot your password?</span>
                </Link>
                <ButtonOval clicked={ this.submitLogInHandler }>Sign In</ButtonOval>
            </div>
        );
    };
    
    if(this.props.type == 'signup') {
        formDiv = (
            <div className={ classes.Form } >
                <span> or use your email for registration: </span>
                <form onSubmit={ this.submitSignUpHandler }>
                { formElementsArray.map((formElement) => (
                        <Input
                            key={ formElement.id }
                            elementType={ formElement.config.elementType } 
                            elementConfig={ formElement.config.elementConfig } 
                            value={ formElement.config.value }
                            icon={ formElement.config.icon }
                            error={ this.state.errors[`${formElement.id}`] }
                            changedValue={(event) => this.inputChangedHandler(event, formElement.id) }
                        />
                    ))}
                </form>
                <ButtonOval clicked={ this.submitSignUpHandler }>Sign Up</ButtonOval>
            </div>
        );
    }
    return (
        { ...formDiv }
        )
    }
};

Form.propTypes = {
    loginUser: PropTypes.func.isRequired,
    registerUser: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired,
    location: PropTypes.object.isRequired,
    match: PropTypes.object.isRequired
    // errors: PropTypes.object.isRequired
};

const mapPropsToState = state => ({
    auth: state.auth,
    errors: state.errors
});  

export default connect(
    mapPropsToState,
    { registerUser, loginUser }
)(withRouter(Form));