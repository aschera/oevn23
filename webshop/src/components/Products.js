import React from 'react';

var inputs = {name: undefined, price: undefined, amount: undefined, imgurl: undefined}

function Products(props) {
  let i=0;
    const list = props.products.map( x => <li key={i++}>

      <table>
      <thead>
        <tr>
          <th className="row-1 row-name">Name</th>
          <th className="row-4 row-img"></th>
          <th className="row-2 row-price center">Price</th>
          <th className="row-3 row-amount center">Amount</th>
          <th className="row-4 row-button"></th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td >{x.name}</td>
          <td ><img src={x.imgurl} height='50' width='50' alt={x.name}/></td>
          <td className="center" >{x.price}</td>
          <td className="center">{x.amount}</td>

          <td >
            <button onClick={props.handleClickRemoveProduct} id={x.name+x.price}  >delete</button>

          </td>

        </tr>
        </tbody>
      </table>
      </li> )
      return (
  			<div id="ul">
        <br />
        <h4>Products</h4>

  			<ul id="alist">{list}</ul>
        <br />
        <h4>Add a new product:</h4>
        <br />
        <div className="inputs">
          <input type="text" onChange={enterName} className="name " placeholder="name" name="name"  value={inputs.name}/>
          <input type="number" onChange={enterPrice} className="price " placeholder="price" name="price" value={inputs.price}/>
          <input type="number" onChange={enterAmount} className="amount " placeholder="amount" name="amount" value={inputs.amount}/>
          <input type="text" onChange={enterURL} className="url " placeholder="url" name="url" value={inputs.imgurl}/>
          <button type="reset" onClick={AddProduct}>Add</button>
        </div>

  		  </div>
  		);

  /*<button onClick={clickchange} id={x.name+x.price}>edit</button>*/


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
