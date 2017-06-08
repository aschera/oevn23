//WEBSHOP
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
    history:[{customer, state, action, timestamp}]

}

/* ********************************************************************** */
/* ********************************************************************** */ 
//ACTIONS



// ADMIN
const ADMIN_ADD_ITEM_ACTION = "ADMIN_ADD_ITEM_ACTION";
const ADMIN_CHANGE_ITEM_ACTION = "ADMIN_CHANGE_ITEM_ACTION";
const ADMIN_DELETE_ITEM_ACTION = "ADMIN_DELETE_ITEM_ACTION";

//CUSTOMER
const CUSTOMER_ADD_ITEM_TO_CART_ACTION = "CUSTOMER_ADD_ITEM_TO_CART_ACTION";
const CUSTOMER_PURCHASE_ITEMS_ACTION = "CUSTOMER_PURCHASE_ITEMS_ACTION";
const CUSTOMER_SEE_CART_ACTION = "CUSTOMER_PURCHASE_ITEMS_ACTION";
const CUSTOMER_REMOVE_FROM_CART_ACTION = "CUSTOMER_PURCHASE_ITEMS_ACTION";


//ADMIN: add item
function additem(name, price, amount) {
  const action = {
    type: ADMIN_ADD_ITEM_ACTION,
    name: name, 
    price: price, 
    amount: amount
  }
  return { action.type, action.name, action.price, action.amount}
}
/* ********************************************************************** */ 
