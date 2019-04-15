import React from 'react';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PropTypes from 'prop-types';

const icon = (props) => {
    library.add(props.icon);
    return <FontAwesomeIcon icon={ props.icon } />;
};

icon.propTypes = {
    icon: PropTypes.object.isRequired
}
export default icon;