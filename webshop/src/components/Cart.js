import React from 'react';



function Cart(props) {
    let i=0;
    let price = 0;
    const list = props.cart.map( x => <li key={i++}>
      <table>
      <tbody>
        <tr>
          <td >{x.name}</td>
          <td >{x.amount}x</td>
          <td className="right">SEK {x.price}.-</td>
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
        <h4 className="title">Cart</h4>
        <h5 className="titlesmall">You have {l} items</h5>
  			<ul>{list}

        <table className="amountsale">
        <thead>
          <tr className="amountsale">
            <th className="left price ">Total:</th>
            <th className="right price1">{price}.-</th>
          </tr>
        </thead>
        </table>
        </ul>
        <br />
        <button className="center">Buy</button>
  		  </div>
  		);

}



export default Cart;
