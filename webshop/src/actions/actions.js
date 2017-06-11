const CHANGE_TAB = 'CHANGE_TAB';
const ADD_NUMBER = 'ADD_NUMBER';
const HISTORY = 'HISTORY';

const ADMIN_ADD_ITEM_ACTION = 'ADMIN_ADD_ITEM_ACTION';
const ADMIN_REMOVE_ITEM_ACTION = 'ADMIN_REMOVE_ITEM_ACTION';

function actionChangeTab(selectedTab) {
	return {
		type: CHANGE_TAB,
		tab: selectedTab
	}
}

function actionAddNumber(x) {
	return {
		type: ADD_NUMBER,
		number: x
	}
}
//ADMIN: add item
function actionAddProduct(name, price, amount) {
	return {
		type: ADMIN_ADD_ITEM_ACTION,
		id: name+price,
		name: name,
		price: price,
		amount: amount
	}
}
//ADMIN: add item
function actionRemoveProduct(id) {
	return {
		type: ADMIN_REMOVE_ITEM_ACTION,
		id: id

	}
}

function actionHistory(action) {
	return {
		type: HISTORY,
		action
	}
}
const FETCH_STARTED = 'FETCH_STARTED', FETCH_SUCCESS = 'FETCH_SUCCESS', FETCH_FAILURE = 'FETCH_FAILURE';
function actionFetchStarted() {
	return {
		type: FETCH_STARTED
	}
}
function actionFetchSuccess(data) {
	return {
		type: FETCH_SUCCESS,
		data: data
	}
}
function actionFetchFailure(error) {
	return {
		type: FETCH_FAILURE,
		error: error
	}
}

export { actionRemoveProduct, ADMIN_REMOVE_ITEM_ACTION, CHANGE_TAB, actionAddProduct, ADMIN_ADD_ITEM_ACTION, actionChangeTab, ADD_NUMBER, actionAddNumber, HISTORY, actionHistory,
actionFetchStarted, actionFetchSuccess, actionFetchFailure, FETCH_STARTED, FETCH_SUCCESS, FETCH_FAILURE };
