import React from 'react';
import { Link } from 'react-router-dom';
import classes from './Home.scss';
import ButtonOval from '../../UI/Buttons/ButtonOval/ButtonOval';

const home = () => (
    <div className={ classes.Home }>
        <div className={ classes.Home__title}>
            <span>Find concerts in your area.</span>
        </div>
        <div className={ classes.Home__subtitle}>
            <span>Thousands of musicians. No credit card needed.</span>
        </div>
        <ButtonOval>
        <Link to='signup'>
            Join for free
        </Link>
        </ButtonOval>
    </div>
);
export default home;