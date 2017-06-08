import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';  // components map!
import registerServiceWorker from './registerServiceWorker';
import './index.css';

import {createStore, combineReducers} from 'redux';
import {Provider} from 'react-redux'; 

import {AdminReducer} from './reducers/reducers.js';  // my reducers!

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
