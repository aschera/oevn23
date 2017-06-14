import React, {Component} from 'react';
import History from './History';
import Products from './Products';
import Shop from './Shop';
import Cart from './Cart';
// ny komponent
import {actionAddToCart, actionChangeTab, actionRemoveProduct, actionAddProduct, actionHistory} from '../actions/actions.js';
// nya actions
import {connect} from 'react-redux';

var inputs = {name: undefined, price: undefined, amount: undefined};

class TabComponent extends Component {

	constructor(props) {
		super(props);
		this.state = {
			options:'#DCD0C0',
			shop:'#C0B283',
			history:'#DCD0C0',
			cart: '#DCD0C0',
		};

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

		let cartlength = this.props.cart.length;
		let number;
		if (cartlength === 0){
			number = ' empty';
		}
		else if (cartlength === 1){
			number = cartlength + ' item'
		}
		else {
			number = cartlength + ' items'
		}
		return (
			<div className="App middle">
      <div className="logo" ><div className="img"></div></div>
			<div className="tabheader">
			  <button className="menu" style={{backgroundColor: this.state.shop}} onClick={this.handleClickBuyProducts}>WEBSHOP</button>
			  <button className="menu" style={{backgroundColor: this.state.options}} onClick={this.handleClickProducts}>OPTIONS</button>
				<button className="menu" style={{backgroundColor: this.state.history}} onClick={this.handleClickHistory}>HISTORY</button>
        <button className="menu" style={{backgroundColor: this.state.cart}}  onClick={this.handleClickSeeCart}>
					CART &nbsp;
					<span id="cartnumber">( {number} )</span>
				</button>

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

		this.setState({
			options:'#DCD0C0',
			shop:'#DCD0C0',
			history:'#C0B283',
			cart: '#DCD0C0',
		})

	}
	handleClickProducts(e) {
		this.changeTab(1);
		this.setState({
			options:'#C0B283',
			shop:'#DCD0C0',
			history:'#DCD0C0',
			cart: '#DCD0C0',
		})
	}
	handleClickBuyProducts(e) {
		this.changeTab(3);
		this.setState({
			options:'#DCD0C0',
			shop:'#C0B283',
			history:'#DCD0C0',
			cart: '#DCD0C0',
		})
	}
	handleClickSeeCart(e) {
		this.changeTab(4);
		this.setState({
			options:'#DCD0C0',
			shop:'#DCD0C0',
			history:'#DCD0C0',
			cart: '#C0B283',
		})
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
