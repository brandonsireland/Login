import React from 'react';
import PropTypes from 'prop-types';
import classes from './LogIn.scss';

// Icons
import { faTwitter, faFacebookF, faLinkedinIn, faGoogle } from '@fortawesome/free-brands-svg-icons';

import Layer from '../../../components/UI/Layer/Layer';
import ButtonCircle from '../../../components/UI/Buttons/ButtonCircle/ButtonCircle';
import Icon from '../../../components/UI/Icon/Icon';
import Form from '../../../containers/Form/Form';

const logIn = (props) => (
    <div className={ classes.LogIn }>
            <div className={ classes.LogIn__container } node='container'>
                <Layer {...props } type='signin'/>
                <div className={ classes.LogIn__half} node='half'>
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
                    <Form type='signin'/>
                </div>
            </div>
        </div>
);

logIn.propTypes = {
    history: PropTypes.object.isRequired,
    match: PropTypes.object.isRequired,
    location: PropTypes.object.isRequired
}
export default logIn;