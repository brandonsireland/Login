import React from 'react';
import PropTypes from 'prop-types';

import classes from './SignUp.scss';

// Icons
import { faTwitter, faFacebookF, faLinkedinIn, faGoogle } from '@fortawesome/free-brands-svg-icons';

import Layer from '../../../components/UI/Layer/Layer';
import ButtonCircle from '../../../components/UI/Buttons/ButtonCircle/ButtonCircle';
import Icon from '../../../components/UI/Icon/Icon';
import Form from '../../../containers/Form/Form';


const signUp = (props) => (
    <div className={ classes.SignUp }>
        <div className={ classes.SignUp__container } node='container'>
                <Layer {...props } type='signup' />
                <div className={ classes.SignUp__half} node='half'>
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
                    <Form type='signup'/>
                </div>
        </div>
    </div>
);

signUp.propTypes = {
    history: PropTypes.object.isRequired,
    match: PropTypes.object.isRequired,
    location: PropTypes.object.isRequired
}

export default signUp;