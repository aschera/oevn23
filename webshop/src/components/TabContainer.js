import React, {Component} from 'react';
import History from './History';
import Products from './Products';
import Shop from './Shop';
import Cart from './Cart';
// ny komponent
import {actionAddToCart, actionChangeTab, actionRemoveProduct, actionAddProduct, actionHistory} from '../actions/actions.js';
// nya actions
import {connect} from 'react-redux';

var inputs = {name: undefined, price: undefined, amount: undefined}
class TabComponent extends Component {

	constructor(props) {
		super(props);
		this.handleClickProducts = this.handleClickProducts.bind(this);
		this.handleClickBuyProducts = this.handleClickBuyProducts.bind(this);
		this.handleClickHistory = this.handleClickHistory.bind(this);
		this.handleClickSeeCart = this.handleClickSeeCart.bind(this);

		this.handleClickAddProduct = this.handleClickAddProduct.bind(this);
		this.enterName = this.enterName.bind(this);
		this.enterPrice = this.enterPrice.bind(this);
		this.enterAmount = this.enterAmount.bind(this);

		this.handleClickRemoveProduct = this.handleClickRemoveProduct.bind(this);

		this.handleAddCart = this.handleAddCart.bind(this);
	}
	render() {
		let view;
		if( this.props.tab === 2 ) {
			view = <History history={this.props.history} />;
		} else if( this.props.tab === 1 ) {
			view = <Products products={this.props.products}  handleClickAddProduct={this.handleClickAddProduct} handleClickRemoveProduct={this.handleClickRemoveProduct}/>;
		} else if( this.props.tab === 3 ) {
			view = <Shop products={this.props.products} handleAddCart={this.handleAddCart}/>;
		} else if( this.props.tab === 4 ) {
			view = <Cart cart={this.props.cart} />;
		}
		return (
			<div className="App">
			<div className="tabheader">

			  <button className="tabA" onClick={this.handleClickProducts}>Admin: product options</button>
				<button className="tab" onClick={this.handleClickHistory}>History</button>
        <button className="tabC" onClick={this.handleClickBuyProducts}>Customer: select products</button>
				<button className="tabC" onClick={this.handleClickSeeCart}>Customer: Cart</button>
			</div>
			<div className="tabbody">
				{view}
			</div>
			<div>
			</div>


		  </div>
		);
	};

	handleClickRemoveProduct(e) {
			let x = e.target.id;
			let action = actionRemoveProduct(x);
			this.props.dispatch( action );
			this.props.dispatch( actionHistory(action) );
	}
	handleAddCart(a) {
		 let x = this.props.products;
		 function find(key1, value) {
			    var i = 0;
			    for (var key in x) {
		        var current = x[key];
		        if (current[key1] === value) {
		            return i;
		        }
		        i++;
			    }
			   return -1;
			 }

		 let result = find('id', a);
		 let buy = this.props.products[result];
		 console.log(buy);

			let action = actionAddToCart(buy.id, buy.name, buy.price, buy.amount);
			this.props.dispatch( action );
			this.props.dispatch( actionHistory(action) );
	}

	handleClickAddProduct(e, d) {
		let n = d.name;
		let p = d.price;
		let a = d.amount;
    let w = d.imgurl;
		console.log(d);
		try {
				let action = actionAddProduct(n,p,a,w);
				this.props.dispatch( action );
				this.props.dispatch( actionHistory(action) );
        inputs = {name: undefined, price: undefined, amount: undefined, imgurl: undefined}
		}
		catch(err) {
    		console.log(err);
		}

}
enterName(e){
	inputs.name = e.target.value;
}
enterPrice(e){
	inputs.price = e.target.value;
}
enterAmount(e){
	inputs.amount = e.target.value;
}


	handleClickHistory(e) {
		this.changeTab(2);
	}
	handleClickProducts(e) {
		this.changeTab(1);
	}
	handleClickBuyProducts(e) {
		this.changeTab(3);
	}
	handleClickSeeCart(e) {
		this.changeTab(4);
	}
	changeTab(tab) {
		let action = actionChangeTab(tab);
		this.props.dispatch(action);
		this.props.dispatch( actionHistory(action) );
	}
}

function mapStateToProps(state) {

	return {
		tab: state.tab,
		products: state.products,
		history: state.history,
		shop: state.products,
		cart: state.cart
	}
}

export default connect(mapStateToProps)(TabComponent);
