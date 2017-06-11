import React from 'react';



function Products(props) {
  let i=0;
    const list = props.products.map( x => <li key={i++}>
      <span>Name: {x.name}</span>,
      <span> Price: {x.price}</span>,
      <span> Amount: {x.amount}</span>
      <button onClick={props.handleClickRemoveProduct} id={x.name+x.price}  >delete</button>
      </li> )
      return (
  			<div id="ul">
        <h4>Products in the store:</h4>
  			<ul>{list}</ul>
        <br />
        <hr />
        <br />

  		  </div>
  		);
}



export default Products;
