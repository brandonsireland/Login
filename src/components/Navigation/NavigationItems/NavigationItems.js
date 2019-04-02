import React from 'react';
import { NavLink } from 'react-router-dom';

import classes from './NavigationItems.scss';
import NavigationItem from './NavigationItem/NavigationItem';

const navigationItems = (props) => {
    return (
        <div className={ classes.NavigationItems }>
            <NavLink to='/about'>
                <NavigationItem title='About Us'/>
            </NavLink>
            <NavLink to='/contact'>
                <NavigationItem  title='Contact' />
            </NavLink>
        </div>
    )
};

export default navigationItems;