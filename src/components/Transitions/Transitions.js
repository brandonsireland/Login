import React from "react";
import { TransitionGroup, CSSTransition } from "react-transition-group";

const childFactoryCreator = (props) => child => React.cloneElement(child, props);

const transitions = ({ transition = '', duration = 0, pageKey, children }) => (
    
        <TransitionGroup
            childFactory={childFactoryCreator({ classNames: transition, timeout: duration }) }>
            <CSSTransition
                key={ pageKey }
                timeout={{ enter: 3000, exit: 300 }}
                classNames='slide'
                >
                <div>{ children }</div>
            </CSSTransition>
        </TransitionGroup> 
)

export default transitions;
