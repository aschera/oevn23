import React from 'react';

var inputs = {name: undefined, price: undefined, amount: undefined}

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
        <br  />
        <h4>Add a new product:</h4>
        <input type="text" onChange={enterName} className="name" placeholder="name" name="name" />
        <input type="number" onChange={enterPrice} className="price" placeholder="price" name="price" />
        <input type="number" onChange={enterAmount} className="amount" placeholder="amount" name="amount" />
        <button type="reset" onClick={AddProduct}>Add product</button>
  		  </div>
  		);



      function AddProduct(e) {
        
        props.handleClickAddProduct(e, inputs);
      }
      function enterName(e){
      	inputs.name = e.target.value;
      }
      function enterPrice(e){
      	inputs.price = e.target.value;
      }
      function enterAmount(e){
      	inputs.amount = e.target.value;
      }
}



export default Products;
