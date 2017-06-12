import React from 'react';

var inputs = {name: undefined, price: undefined, amount: undefined, imgurl: undefined}

function Products(props) {
  let i=0;
    const list = props.products.map( x => <li key={i++}>
      <span>Name: {x.name}</span>,
      <span> Price: {x.price}</span>,
      <span> Amount: {x.amount}</span>
      <span><img src={x.imgurl} width='50' height='50' alt={x.name}/></span>
      <button onClick={props.handleClickRemoveProduct} id={x.name+x.price}  >delete</button>
      </li> )
      return (
  			<div id="ul">
        <h4 className="admin">Products in the store:</h4>
  			<ul>{list}</ul>
        <br />
        <hr />
        <br  />
        <h4>Add a new product:</h4>
        <input type="text" onChange={enterName} className="name" placeholder="name" name="name" />
        <input type="number" onChange={enterPrice} className="price" placeholder="price" name="price" />
        <input type="number" onChange={enterAmount} className="amount" placeholder="amount" name="amount" />
        <input type="text" onChange={enterURL} className="url" placeholder="url" name="url" />
        <button type="reset" onClick={AddProduct}>Add product</button>
  		  </div>
  		);



      function AddProduct(e) {
        props.handleClickAddProduct(e, inputs);
        console.log(inputs);
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
      function enterURL(e){
      	inputs.imgurl = e.target.value;
      }
}



export default Products;
