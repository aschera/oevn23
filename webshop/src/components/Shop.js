import React from 'react';



function Shop(props) {
  let i=0;
    const list = props.products.map( x => <li className="flex-item" key={i++}>

      					<div className="product">
      							<img src={x.imgurl} className="productimage"  height='50' width='50' alt={x.name}/>
                    <div className="product-title">{x.name}</div>
                    <div className="product-desc">
                      Praesent sed quam auctor, lacinia enim auctor, pharetra turpis.
                      Integer vulputate nisl non faucibus condimentum.
                      <br />
                      Pellentesque quis elit sit amet massa tempor vehicula.
                      Duis vel sagittis tellus. Duis in pellentesque tortor.
                      In placerat urna vitae viverra feugiat.
                    </div>
      					</div>

                <div className="product1">
        					<div className="product-price">SEK {x.price}</div>
                  <br /><br />
        					<div className="product-stock">{x.amount} items left in stock</div>
                </div>
      					<div className="btn">
      						<button onClick={click} className="buybutton" id={x.name+x.price} >Buy</button>
      					</div>

      </li> )
      return (
  			<div id="ul">
          <br />
          <h4>Shop</h4>
          <div className="flex-container">
    			   <ul>{list}</ul>
          </div>
  		  </div>
  		);

      function click(x){
        props.handleAddCart(x.target.id);
      }
}



export default Shop;
