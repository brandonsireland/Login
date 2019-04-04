import React from 'react';
import classes from './SignUp.scss';

// Icons
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faFacebookF } from '@fortawesome/free-brands-svg-icons';
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { faGoogle } from '@fortawesome/free-brands-svg-icons';

import Layer from '../../components/Transitions/Layer/Layer';
import ButtonCircle from '../../components/UI/Buttons/ButtonCircle/ButtonCircle';
import Icon from '../../components/UI/Icon/Icon';
import SignForm from '../../components/UI/Form/Form';


const signUp = (props) => {
    
    return (
            <div className={ classes.SignUp }>
                <div className={ classes.SignUp__container }>
                <Layer {...props } type='signup'/>
                        <div className={ classes.SignUp__half}>
                            <div className={ classes.SignUp__title}>
                                <span>Create an Account</span>
                            </div>
                            <div className={ classes.SignUp__social } >
                                <ButtonCircle>
                                    <Icon icon={ faTwitter} />
                                </ButtonCircle>
                                <ButtonCircle>
                                    <Icon icon={ faFacebookF } />
                                </ButtonCircle>
                                <ButtonCircle>
                                    <Icon icon={ faLinkedinIn } />
                                </ButtonCircle>
                                <ButtonCircle>
                                    <Icon icon={ faGoogle } />
                                </ButtonCircle>
                            </div>
                            <SignForm type='signup'/>
                        </div>
                </div>
            </div>
    )
};

export default signUp;