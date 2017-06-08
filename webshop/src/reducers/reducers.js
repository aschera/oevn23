import { ADMIN_ADD_ITEM_ACTION } from '../actions/actions.js';

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


// REDUCERS

function AdminReducer(state = [], action) {
	switch( action.type ) {
		case ADMIN_ADD_ITEM_ACTION:

			return [...state,
				{name: action.name, 
				price: action.price, 
				amount: action.amount}
				];
		default:
			return state;
	}
}


export {AdminReducer};