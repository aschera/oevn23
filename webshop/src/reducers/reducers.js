import { ADMIN_ADD_ITEM_ACTION } from '../actions/actions.js';




// REDUCERS

function mainReducer(state = [], action) {
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


export {mainReducer};