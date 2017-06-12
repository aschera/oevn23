import React from 'react';



function Cart(props) {
  let i=0;
    const list = props.cart.map( x => <li key={i++}>
      <span>Name: {x.name} </span>,
      <span> Price: {x.price} </span>,
      <span> Amount: {x.amount} </span>
      </li> );
      let l = list.length;
      return (
  			<div id="ul">
        <h4 className="customer">The Cart:</h4>
        <h5>You have {l} items</h5>
  			<ul>{list}</ul>
        <button>Checkout</button>
  		  </div>
  		);

}



export default Cart;
