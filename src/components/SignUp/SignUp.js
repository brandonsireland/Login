import React from 'react';
import classes from './SignUp.scss';

// Icons
import Icon from '../UI/Icon/Icon';

import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faFaceBook } from '@fortawesome/free-brands-svg-icons';
import { faLinkedIn } from '@fortawesome/free-brands-svg-icons';
import { faGooglePlus } from '@fortawesome/free-brands-svg-icons';



const signUp = (props) => {
    return (
        <div className={ classes.SignUp }>
            <div className={ classes.SignUp__container }>
                <div className={ classes.SignUp__half}>
                    {/* Title */}
                    <div className={ classes.SignUp__Title}>
                        <span>Sign Up to Concert Me</span>
                    </div>
                    {/* Socials */}
                    <div className={ classes.SignUp__social } >
                        <Icon icon={ faTwitter} />
                        <Icon icon={ faFaceBook } />
                        <Icon icon={ faLinkedIn } />
                        <Icon icon={ faGooglePlus } />
                    </div>
                    {/* Form */}
                    <div>
                        <form></form>
                    </div>
                </div>
                <div className={ classes.SignUp__half}>

                </div>
            </div>
        </div>
    )
};

export default signUp;