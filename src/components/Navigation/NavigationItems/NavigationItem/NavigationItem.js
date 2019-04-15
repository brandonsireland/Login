import React from 'react';
import classes from './NavigationItem.scss';
import PropTypes from 'prop-types';

const navigationItem = (props) => (
    <div className={ classes.NavigationItem }>
        <button>
            { props.title }
        </button>
    </div>
);

navigationItem.propTypes = {
    title: PropTypes.string.isRequired
}

export default navigationItem;