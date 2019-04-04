import React from 'react';
import classes from './LogIn.scss';
// Icons
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faFacebookF } from '@fortawesome/free-brands-svg-icons';
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { faGoogle } from '@fortawesome/free-brands-svg-icons';

import Layer from '../../components/Transitions/Layer/Layer';
import ButtonCircle from '../../components/UI/Buttons/ButtonCircle/ButtonCircle';
import Icon from '../../components/UI/Icon/Icon';
import SignForm from '../../components/UI/Form/Form';

const logIn = (props) => {
    return (
        <div className={ classes.LogIn }>
                <div className={ classes.LogIn__container }>
                        <div className={ classes.LogIn__half}>
                            <div className={ classes.LogIn__title}>
                                <span>Sign in to Concert Me</span>
                            </div>
                            <div className={ classes.LogIn__social } >
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
                            <SignForm type='signin'/>
                        </div>
                        <Layer {...props } type='signin'/>
                </div>
            </div>
    )
};

export default logIn;