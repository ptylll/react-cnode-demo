import React from 'react';
import ReactDOM from 'react-dom';
import App from './page/App';
import AppState from './store/home';

import './index.css';

const appState = new AppState();

ReactDOM.render(
    <App store={appState}/>
, document.getElementById('root'));

