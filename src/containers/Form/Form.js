import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import AxiosInstance from '../../../axios';

import { faEnvelope } from '@fortawesome/pro-light-svg-icons';
import { faLockAlt } from '@fortawesome/pro-light-svg-icons';
import { faUserAlt } from '@fortawesome/pro-light-svg-icons';

import classes from './Form.scss';

import Input from '../../components/UI/Input/Input';
import ButtonOval from '../../components/UI/Buttons/ButtonOval/ButtonOval';

class Form extends Component {

    state = {
        username : {
            elementType: 'text',
            elementConfig: {
                type: 'username',
                placeholder: 'Username'
            },
            value: '',
            icon: faUserAlt,
            errors: {}
        },
        email : {
            elementType: 'text',
            elementConfig: {
                type: 'email',
                placeholder: 'Email'
            },
            value: '',
            icon: faEnvelope,
            errors: {}
        },
        password : {
            elementType: 'text',
            elementConfig: {
                type: 'text',
                placeholder: 'Password'
            },
            value: '',
            icon: faLockAlt,
            errors: {}
        },
        password_two : {
            elementType: 'text',
            elementConfig: {
                type: 'text',
                placeholder: 'Re-enter your Password'
            },
            value: '',
            icon: faLockAlt,
            errors: {}
        }
    };

    submitLogInHandler = (event) => {
        event.preventDefault();
        const loginUser = {};
        
        for(let formElementIdentifier in this.state) {
            loginUser[formElementIdentifier] = this.state[formElementIdentifier].value;
        }
        console.log(loginUser)
        AxiosInstance.post('/api/v1/user/login', loginUser)
            .then(res => {
                this.props.push('/')
            })
            .catch(err => console.log(err));
    };

    submitSignUpHandler = (event) => {
        event.preventDefault();
        const newUser = {};
        
        for(let formElementIdentifier in this.state) {
            newUser[formElementIdentifier] = this.state[formElementIdentifier].value;
        }
        console.log(newUser)
        AxiosInstance.post('/api/v1/user/signup', newUser)
            .then(res => {
                console.log(res)
            })
            .catch(err => console.log(err))
    };

    inputChangedHandler = (event, inputIdentifier) => {
        
        const updatedForm = {
            ...this.state
        };
        
        const updatedFormElement = {
            ...updatedForm[inputIdentifier]
        };

        updatedFormElement.value = event.target.value;
        updatedForm[inputIdentifier] = updatedFormElement;

        this.setState(updatedForm)
    }

    render() {
        let formDiv;
        let formElementsArray = [];

        for(let key in this.state) {
            formElementsArray.push({
                id: key,
                config: this.state[key]
            })
        }

        if(this.props.type == 'signin') {
            formDiv = (
                <div className={ classes.Form } >
                    <span> or use your email account: </span>
                    <form >
                        { formElementsArray.map((formElement) => {
                            if( formElement.id !== 'email' && formElement.id !== 'password_two' ) {
                                {/* console.log(formElement) */}
                                return (
                                    <Input
                                        key={ formElement.id }
                                        elementType={ formElement.config.elementType } 
                                        elementConfig={ formElement.config.elementConfig } 
                                        value={ formElement.config.value }
                                        icon={ formElement.config.icon }
                                        error={ formElement.config.errors[`${formElement.id}`] }
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
                            error={ formElement.config.errors[`${formElement.id}`] }
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
    
export default Form;