import React from 'react';



function Shop(props) {
  let i=0;
    const list = props.products.map( x => <li key={i++}>

      <table>
      <thead>
        <tr>
          <th className="row-1 row-name">Name</th>
          <th className="row-4 row-img"></th>
          <th className="row-2 row-price">Price</th>
          <th className="row-3 row-amount center">Amount</th>
          <th className="row-4 row-button"></th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td >{x.name}</td>
          <td ><img src={x.imgurl} width='50' height='50' alt={x.name}/></td>
          <td >{x.price}</td>
          <td className="center">{x.amount}</td>

          <td className="right"><button onClick={click} id={x.name+x.price} >Buy</button></td>
        </tr>
        </tbody>
      </table>
      </li> )
      return (
  			<div id="ul">
        <h4 className="customer">Shop</h4>
  			<ul>{list}</ul>
  		  </div>
  		);

      function click(x){
        props.handleAddCart(x.target.id);
      }
}



export default Shop;
