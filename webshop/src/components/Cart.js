import React from 'react';



function Cart(props) {
    let i=0;
    let price = 0;
    const list = props.cart.map( x => <li key={i++}>
      <table>
      <thead>
        <tr>
          <th className="row-1 row-name">Name</th>
          <th className="row-3 row-amount">Amount</th>
          <th className="row-2 row-price  right">Price</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td >{x.name}</td>
          <td >{x.amount}</td>
          <td className="right">{x.price}</td>
        </tr>
        </tbody>
      </table>
      </li>);

      let l = list.length;

      props.cart.forEach(function (value, j) {
          price = price + value.price;
      });

      return (
  			<div id="ul">
        <br />
        <h4>Cart</h4>
        <h5>You have {l} items</h5>
  			<ul>{list}

        <table className="amountsale">
        <thead>
          <tr className="amountsale">
            <th className="left">Total Amount:</th>
            <th className="right price">{price} SEK</th>
          </tr>
        </thead>
        </table>
        </ul>
        <br />
        <button>Buy</button>
  		  </div>
  		);

}



export default Cart;
