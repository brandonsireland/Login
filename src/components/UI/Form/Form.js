import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Axios from 'axios';

import { faEnvelope } from '@fortawesome/pro-light-svg-icons';
import { faLockAlt } from '@fortawesome/pro-light-svg-icons';
import { faUserAlt } from '@fortawesome/pro-light-svg-icons';

import classes from './Form.scss';

import Input from '../Input/Input';
import ButtonOval from '../Buttons/ButtonOval/ButtonOval';

class Form extends Component {

    state = {
        name : {
            elementType: 'text',
            elementConfig: {
                type: 'name',
                placeholder: 'Name'
            },
            value: '',
            icon: faUserAlt
        },
        email : {
            elementType: 'text',
            elementConfig: {
                type: 'email',
                placeholder: 'Email'
            },
            value: '',
            icon: faEnvelope
        },
        password : {
            elementType: 'text',
            elementConfig: {
                type: 'text',
                placeholder: 'Password'
            },
            value: '',
            icon: faLockAlt
        }
    };

    submitLogInHandler = () => {
        // Axios.get()
    };

    submitSignUpHandler = () => {
        // Axios.get()
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
            <form onSubmit={ this.submitLogInHandler }>
                { formElementsArray.map((formElement) => {
                    if( formElement.id !== 'name') {
                        return (
                            <Input
                                key={ formElement.id }
                                elementType={ formElement.config.elementType } 
                                elementConfig={ formElement.config.elementConfig } 
                                value={ formElement.config.value }
                                icon={ formElement.config.icon }
                                changed={(event) => this.inputChangedHandler(event, formElement.id ) }
                            />
                        )
                    }
                })}
            </form>
            <Link to='/forgot'>
                <span className={ classes.Form__forgot }>Forgot your password?</span>
            </Link>
            <ButtonOval>Sign In</ButtonOval>
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
                        changed={(event) => this.inputChangedHandler(event, formElement.id) }
                    />
                ))}
            </form>
            <ButtonOval>Sign Up</ButtonOval>
        </div>
        );
    }
    return (
        { ...formDiv }
        )
    }
};
    
export default Form;