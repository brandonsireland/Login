import React from 'react';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const icon = (props) => {
    library.add(props.icon);
    return <FontAwesomeIcon icon={ props.icon } color={ props.color } />;
};

export default icon;