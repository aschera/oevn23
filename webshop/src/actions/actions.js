const CHANGE_TAB = 'CHANGE_TAB';
const HISTORY = 'HISTORY';

const ADMIN_ADD_ITEM_ACTION = 'ADMIN_ADD_ITEM_ACTION';
const ADMIN_REMOVE_ITEM_ACTION = 'ADMIN_REMOVE_ITEM_ACTION';
const ADMIN_EDIT_ITEM_ACTION = 'ADMIN_EDIT_ITEM_ACTION';

const CUSTOMER_ADD_ITEM_TO_CART_ACTION = 'CUSTOMER_ADD_ITEM_TO_CART_ACTION';

// change view through tabs.
function actionChangeTab(selectedTab) {
	return {
		type: CHANGE_TAB,
		tab: selectedTab
	}
}

//customer: add item to cart
function actionAddToCart(id,name,price,amount, imgurl) {
	return {
		type: CUSTOMER_ADD_ITEM_TO_CART_ACTION,
		id: id,
		name: name,
		price: price,
		amount: 1,
		imgurl: imgurl

	}
}

//ADMIN: add item
function actionAddProduct(name, price, amount, imgurl) {
	return {
		type: ADMIN_ADD_ITEM_ACTION,
		id: name+price,
		name: name,
		price: price,
		amount: amount,
		imgurl: imgurl
	}
}
//ADMIN: delete item
function actionRemoveProduct(id,name,price, amount) {
	return {
		type: ADMIN_REMOVE_ITEM_ACTION,
		id: id,
		name: name,
		price: price,
		amount: amount

	}
}

//ADMIN: edit item
function actionEditProduct(id,name,price, amount) {
	return {
		type: ADMIN_EDIT_ITEM_ACTION,
		id: id,
		name: name,
		price: price,
		amount: amount

	}
}
// See history of action events.
function actionHistory(action) {
	return {
		type: HISTORY,
		action
	}
}


export { ADMIN_EDIT_ITEM_ACTION, actionEditProduct, actionAddToCart, CUSTOMER_ADD_ITEM_TO_CART_ACTION, actionRemoveProduct, ADMIN_REMOVE_ITEM_ACTION, CHANGE_TAB, actionAddProduct, ADMIN_ADD_ITEM_ACTION, actionChangeTab,  HISTORY, actionHistory };
