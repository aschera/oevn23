import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';
import './index.css';
import {createStore, combineReducers} from 'redux';
import {Provider} from 'react-redux';
import {tabReducer, productReducer, numbersReducer, pictureReducer, historyReducer, fetchReducer} from './reducers/reducers.js';


let initialState = {
	tab: 1,  // 1=väder, 2=tal
	products:[],
	history: [{type: 'TEST'}],
}

let rootReducer = combineReducers({
	tab: tabReducer,
	numbers: numbersReducer,
	products: productReducer,
	imageUrl: pictureReducer,
	history: historyReducer,
	fetch: fetchReducer
});
const store = createStore(rootReducer, initialState);

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
