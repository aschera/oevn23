import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';
import './index.css';
import './bootstrap/css/bootstrap.min.css';
import {createStore, combineReducers} from 'redux';
import {Provider} from 'react-redux';
import {tabReducer, cartReducer,productReducer, historyReducer} from './reducers/reducers.js';



let initialState = {
	tab: 3,  // 1=väder, 2=tal
	products:[
						{id:'Teddy100', name: 'Teddy', price:100, imgurl:'http://www.supercutekawaii.com/wp-content/uploads/pbdoll2.jpg', amount:5},
						{id:'Doll200', name: 'Doll', price:200, imgurl:'https://lh4.googleusercontent.com/proxy/nnsd05DApmfM1XcNkDNTJH_1K-US_5WGFCQoIYt7Hnt5G83L-0IEUVOJh0xvkeserE5HF6uLtLPBv1sI6NSJJJNNlceY6MLNfReH4MwIB2lEVQ=s0-d', amount:4},
						{id:'Steampunk-Car5000', name: 'Steampunk-Car', price:5000, imgurl:'http://www.designbuzz.com/wp-content/uploads/2012/07/rad_steampunk_pirate_ship_car_naru8.jpg', amount:3},
						{id:'Book150', name: 'Book', price:150, imgurl:'http://www.cindyvallar.com/Everything-Pirates.jpg', amount:4},
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
