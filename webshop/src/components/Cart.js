import React from 'react';



function Cart(props) {
    let i=0;
    let price = 0;
    const list = props.cart.map( x => <li key={i++}>
      <span>Name: {x.name} </span>,
      <span> Price: {x.price} </span>,
      <span> Amount: {x.amount} </span>
      </li>);

      let l = list.length;

      props.cart.forEach(function (value, j) {
          price = price + value.price;
      });

      return (
  			<div id="ul">
        <h4 className="customer">The Cart:</h4>
        <h5>You have {l} items</h5>
  			<ul>{list}</ul>
        <div>Total amount to pay: <strong> {price} </strong> </div>
        <button>Checkout</button>
  		  </div>
  		);

}



export default Cart;
