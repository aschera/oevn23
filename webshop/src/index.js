import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';
import './index.css';
import {createStore, combineReducers} from 'redux';
import {Provider} from 'react-redux';
import {tabReducer, cartReducer,productReducer, historyReducer} from './reducers/reducers.js';



let initialState = {
	tab: 1,  // 1=väder, 2=tal
	products:[{id:'Teddy100', name: 'Teddy', price:100, amount:5}, {id:'Doll200', name: 'Doll', price:200, amount:4}],
	history: [],
	cart: [],
}

let rootReducer = combineReducers({
	tab: tabReducer,
	products: productReducer,
	history: historyReducer,
	cart: cartReducer
});
const store = createStore(rootReducer, initialState);

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
