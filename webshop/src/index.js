import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';  // components map!
import registerServiceWorker from './registerServiceWorker';
import './index.css';

import {createStore, combineReducers} from 'redux';
import {Provider} from 'react-redux'; 

import {mainReducer} from './reducers/reducers.js';  // my reducers!



//STATE

const initialState={

    products:[
                {name: 'banana', price: 10, amount: 100},
                {name: 'apple', price: 5, amount: 50},
             ],
    customers: [
                {name: 'Admin', loggedin: true},
                {name: 'Lars', loggedin: false},
               ],
    history:[{}]

}



const store = createStore(mainReducer, initialState);

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();

