import React from 'react';
import ReactDOM from 'react-dom';
import { Router } from 'react-router-dom';
import { createBrowserHistory } from 'history';

import App from './App';
import normalize from 'normalize.css';

const history = createBrowserHistory();

const app = (
    <Router history={history}>
        <App/>
    </Router>
);

ReactDOM.render(app, document.getElementById('index'));