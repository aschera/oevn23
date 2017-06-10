
/* ***************************************************************************** */
/* ******************************ACTIONS**************************************** */

// ADMIN
const ADMIN_ADD_ITEM_ACTION = "ADMIN_ADD_ITEM_ACTION";
//const ADMIN_CHANGE_ITEM_ACTION = "ADMIN_CHANGE_ITEM_ACTION";
const ADMIN_DELETE_ITEM_ACTION = "ADMIN_DELETE_ITEM_ACTION";

//CUSTOMER
//const CUSTOMER_ADD_ITEM_TO_CART_ACTION = "CUSTOMER_ADD_ITEM_TO_CART_ACTION";
//const CUSTOMER_PURCHASE_ITEMS_ACTION = "CUSTOMER_PURCHASE_ITEMS_ACTION";
//const CUSTOMER_SEE_CART_ACTION = "CUSTOMER_PURCHASE_ITEMS_ACTION";
//const CUSTOMER_REMOVE_FROM_CART_ACTION = "CUSTOMER_PURCHASE_ITEMS_ACTION";


//ADMIN: add item
function additem(name, price, amount) {
  return {
    type: ADMIN_ADD_ITEM_ACTION,
    id: name + price,
    name: name,
    price: price,
    amount: amount
}
}
/* ********************************************************************** */
//ADMIN: delete item
function deleteitem(id) {
  return {
    type: ADMIN_DELETE_ITEM_ACTION,
    id
}
}
/* ********************************************************************** */


export { additem, ADMIN_ADD_ITEM_ACTION, deleteitem, ADMIN_DELETE_ITEM_ACTION };
