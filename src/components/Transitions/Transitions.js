import React from "react";
import { TransitionGroup, Transition } from "react-transition-group";
import { play, exit } from '../../utils/timelines';
import PropTypes from 'prop-types';

const transitions = (props) => {
    return (
        <TransitionGroup component={null}>
            <Transition
                key={ props.pageKey }
                appear={ true }
                onEnter={(node, appears) => play(props.pathname, node, appears)}
                onExit={(node, appears) => exit(node, appears)}
                timeout={{enter: 750, exit: 150}}>
                { props.children }
            </Transition>
        </TransitionGroup>
    )
};

transitions.propTypes = {
    pageKey : PropTypes.string.isRequired,
    pathname: PropTypes.string.isRequired
}

export default transitions;
