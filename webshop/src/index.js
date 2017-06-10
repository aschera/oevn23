import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';  // components map!
import registerServiceWorker from './registerServiceWorker';
import './index.css';

import {createStore , combineReducers} from 'redux';
import {Provider} from 'react-redux';

import {adminReducer} from './reducers/reducers.js';  // my reducers!



//STATE

const initialState={

    products:[
                {name: 'banana', price: 10, amount: 100, id: 'banana10'},
                {name: 'apple', price: 5, amount: 50, id: 'apple5'},
             ],
    customers: [
                {name: 'Admin', loggedin: true},
                {name: 'Lars', loggedin: false},
               ],
    history:[{}]

}



let rootReducer = combineReducers({
	products: adminReducer,
});
const store = createStore(rootReducer, initialState);

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
