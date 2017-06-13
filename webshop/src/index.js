import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';
import './index.css';
import {createStore, combineReducers} from 'redux';
import {Provider} from 'react-redux';
import {tabReducer, cartReducer,productReducer, historyReducer} from './reducers/reducers.js';



let initialState = {
	tab: 3,  // 1=väder, 2=tal
	products:[
						{id:'Teddy100', name: 'Teddy', price:100, imgurl:'https://images-na.ssl-images-amazon.com/images/I/81ZPqnOryZL._SL1500_.jpg', amount:5},
						{id:'Doll200', name: 'Doll', price:200, imgurl:'http://s7d2.scene7.com/is/image/Mattel/DNJ69_Kendall_Doll_1?$null$', amount:4},
						{id:'Car50', name: 'Car', price:50, imgurl:'https://cdn.shopify.com/s/files/1/0374/3593/products/5.jpeg?v=1392395253', amount:3},
						{id:'Book15', name: 'Book', price:15, imgurl:'https://sc01.alicdn.com/kf/HT1zGxmFOheXXagOFbXf/2423702/HT1zGxmFOheXXagOFbXf.jpg', amount:4},
					],
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
