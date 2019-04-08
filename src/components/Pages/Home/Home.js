import React from 'react';
import classes from './Home.scss';
import ButtonOval from '../../UI/Buttons/ButtonOval/ButtonOval';
const home = (props) => {
    return(
        <div className={ classes.Home }>
            <div className={ classes.Home__title}>
                <span>Find concerts in your area.</span>
            </div>
            <div className={ classes.Home__subtitle}>
                <span>Thousands of musicians. No credit card needed.</span>
            </div>
            <ButtonOval>Join for free</ButtonOval>
        </div>
    )
};
export default home;