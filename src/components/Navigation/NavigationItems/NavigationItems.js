import React from 'react';
import { NavLink } from 'react-router-dom';

import classes from './NavigationItems.scss';
import NavigationItem from './NavigationItem/NavigationItem';

import ButtonOval from '../../UI/Buttons/ButtonOval/ButtonOval';

const navigationItems = (props) => {
    return (
        <div className={ classes.NavigationItems }>
            <NavLink to='/about'>
                <NavigationItem title='About Us'/>
            </NavLink>
            <NavLink to='/contact'>
                <NavigationItem  title='Contact' />
            </NavLink>
            <NavLink to='/login'>
                <NavigationItem  title='Log in' />
            </NavLink>
            <NavLink to='/signup'>
                <button className={ classes.NavigationItems__signup }>
                    Sign Up
                </button>
            </NavLink>
        </div>
    )
};

export default navigationItems;