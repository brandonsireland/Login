import React from 'react';
import classes from './NavigationItem.scss';

const navigationItem = (props) => {
    return (
        <div className={ classes.NavigationItem }>
            <button>
                { props.title }
            </button>
        </div>
    )
};

export default navigationItem;