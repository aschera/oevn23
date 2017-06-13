import React from 'react';

var inputs = {name: undefined, price: undefined, amount: undefined, imgurl: undefined}

function Products(props) {
  let i=0;
    const list = props.products.map( x => <li key={i++}>

      <table class="users">
      <thead>
        <tr>
          <th className="row-1 row-name">Name</th>
          <th className="row-4 row-img"></th>
          <th className="row-2 row-price">Price</th>
          <th className="row-3 row-amount">Amount</th>
          <th className="row-4 row-button"></th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td ><input className="edit" value={x.name}/></td>
          <td ><input className="edit"  value={x.imgurl}/></td>
          <td ><input className="edit"  value={x.price}/></td>
          <td id="center"><input className="edit center"  value={x.amount}/></td>

          <td ><button onClick={props.handleClickRemoveProduct} id={x.name+x.price}  >delete</button></td>
          <td ><button onClick={editProduct} id={x.name+x.price}  >edit</button></td>
        </tr>
        </tbody>
      </table>
      </li> )
      return (
  			<div id="ul">
        <h4 className="admin">Products in the store:</h4>
  			<ul id="alist">{list}</ul>

        <hr className="admin"/>

        <h4 className="admin">Add a new product:</h4>
        <input type="text" onChange={enterName} className="name" placeholder="name" name="name"  value={inputs.name}/>
        <input type="number" onChange={enterPrice} className="price" placeholder="price" name="price" value={inputs.price}/>
        <input type="number" onChange={enterAmount} className="amount " placeholder="amount" name="amount" value={inputs.amount}/>
        <input type="text" onChange={enterURL} className="url" placeholder="url" name="url" value={inputs.imgurl}/>
        <button type="reset" onClick={AddProduct}>Add product</button>
  		  </div>
  		);


      function editProduct(e) {
        console.log('click');

      }

      function AddProduct(e) {
        props.handleClickAddProduct(e, inputs);
        console.log(inputs);
        inputs = {name: undefined, price: undefined, amount: undefined, imgurl: undefined}
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
