import React from 'react';



function Shop(props) {
  let i=0;
    const list = props.products.map( x => <li key={i++}>
      <span>Name: {x.name} </span>,
      <span> Price: {x.price} </span>,
      <span> Amount: {x.amount} </span>
      <button onClick={click} id={x.name+x.price} >Add to cart</button>
      </li> )
      return (
  			<div id="ul">
        <h4>The Shop:</h4>
  			<ul>{list}</ul>
  		  </div>
  		);

      function click(x){
        props.handleAddCart(x.target.id);
      }
}



export default Shop;
