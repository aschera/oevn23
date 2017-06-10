import { ADMIN_ADD_ITEM_ACTION, ADMIN_DELETE_ITEM_ACTION } from '../actions/actions.js';




// REDUCERS

function adminReducer(state = [], action) {
	switch( action.type ) {
		case ADMIN_ADD_ITEM_ACTION:
			return [...state, action];
		case ADMIN_DELETE_ITEM_ACTION:
		    return Object.assign({}, state, {data:[]});
		default:
			return state;
	}
}


export {adminReducer};
