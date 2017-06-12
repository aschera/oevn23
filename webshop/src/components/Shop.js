import React from 'react';



function Shop(props) {
  let i=0;
    const list = props.products.map( x => <li key={i++}>
      <span>Name: {x.name} </span>,
      <span> Price: {x.price} </span>,
      <span> Amount: {x.amount} </span>
      <span><img src={x.imgurl} width='50' height='50' alt={x.name}/></span>
      <button onClick={click} id={x.name+x.price} >Add to cart</button>
      </li> )
      return (
  			<div id="ul">
        <h4 className="customer">The Shop:</h4>
  			<ul>{list}</ul>
  		  </div>
  		);

      function click(x){
        props.handleAddCart(x.target.id);
      }
}



export default Shop;
