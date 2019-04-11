import React, { Component } from 'react';
import LayoutContainer from './containers/LayoutContainer/LayoutContainer';

import { Provider } from 'react-redux';
import store from './store';

class App extends Component {
    render() {
        return (
            <Provider store={ store }>
                <LayoutContainer />
            </Provider> 
        )
    }
}
export default App;