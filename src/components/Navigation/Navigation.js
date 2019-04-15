import React from 'react';
import classes from './Navigation.scss';

import NavigationItems from './NavigationItems/NavigationItems';

const navigation = () => (
    <div className={ classes.Navigation }>
        <NavigationItems />
    </div>
);

export default navigation;