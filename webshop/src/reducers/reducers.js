import {  ADMIN_REMOVE_ITEM_FROM_CART_ACTION, CUSTOMER_ADD_ITEM_TO_CART_ACTION, ADMIN_REMOVE_ITEM_ACTION, CHANGE_TAB, ADMIN_ADD_ITEM_ACTION,HISTORY } from '../actions/actions.js';


function tabReducer(state = 1, action) {
	switch( action.type ) {
		case CHANGE_TAB:
			return action.tab;
		default:
			return state;
	}
}

function productReducer(state = [], action) {
	switch( action.type ) {
		case ADMIN_ADD_ITEM_ACTION:
			return [...state, action];
		case ADMIN_REMOVE_ITEM_ACTION:
		let Removed = state.filter(function(elemenet) {
			return elemenet.id !== action.id;
		});
		    return Removed;
	default:
		return state;
		}
}
function cartReducer(state = [], action) {
	switch( action.type ) {
		case CUSTOMER_ADD_ITEM_TO_CART_ACTION:
			return [...state, action];
		case ADMIN_REMOVE_ITEM_FROM_CART_ACTION:
			let Removed = state.filter(function(element) {
				return element.id !== action.id;
			});
			    return Removed;
		default:
			return state;
	}
}


function historyReducer(state = [], action) {
	switch( action.type ) {
		case HISTORY:
			return [...state, action.action];
		default:
			return state;
	}
}


export {cartReducer, tabReducer, productReducer, historyReducer};
