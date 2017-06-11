import React, {Component} from 'react';
import History from './History';
import Products from './Products';
// ny komponent
import {actionChangeTab, actionRemoveProduct, actionAddProduct, actionHistory} from '../actions/actions.js';
// nya actions
import {connect} from 'react-redux';

var name, price, amount;
class TabComponent extends Component {

	constructor(props) {
		super(props);
		this.handleClickProducts = this.handleClickProducts.bind(this);
		this.handleClickHistory = this.handleClickHistory.bind(this);

		this.handleClickAddProduct = this.handleClickAddProduct.bind(this);
		this.enterName = this.enterName.bind(this);
		this.enterPrice = this.enterPrice.bind(this);
		this.enterAmount = this.enterAmount.bind(this);

		this.handleClickRemoveProduct = this.handleClickRemoveProduct.bind(this);
	}
	render() {
		let view;
		if( this.props.tab === 2 ) {
			view = <History history={this.props.history} />;
		} else if( this.props.tab === 1 ) {
			view = <Products products={this.props.products} handleClickRemoveProduct={this.handleClickRemoveProduct}/>;
		}
		return (
			<div className="App">
			<div className="tabheader">

			  <button onClick={this.handleClickProducts}>products</button>
				<button onClick={this.handleClickHistory}>historik</button>

			</div>
			<div className="tabbody">
				{view}
			</div>
			<div>
				<h4>Add a new product:</h4>
        <input ref="name" type="text" onChange={this.enterName} className="name" placeholder="name" name="name" value={name}/>
        <input ref="price" type="number" onChange={this.enterPrice} className="price" placeholder="price" name="price" value={price}/>
        <input ref="amount" type="number" onChange={this.enterAmount} className="amount" placeholder="amount" name="amount" value={amount}/>
        <button type="reset" onClick={this.handleClickAddProduct}>Add product</button>
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

	handleClickAddProduct(e) {
		let n = name;
		let p = price;
		let a = amount;

		try {
			if(n!==undefined && p!==undefined && a!==undefined){
				let action = actionAddProduct(n,p,a);
				this.props.dispatch( action );
				this.props.dispatch( actionHistory(action) );
				name = undefined;
				price = undefined;
				amount= undefined;
			}
			else{
				alert("Please Fill All Required Field");
				return false;
			}
		}
		catch(err) {
    		console.log(err);
		}

}
enterName(e){
	name = e.target.value;
}
enterPrice(e){
	price = e.target.value;
}
enterAmount(e){
	amount = e.target.value;
}


	handleClickHistory(e) {
		this.changeTab(2);
	}
	handleClickProducts(e) {
		this.changeTab(1);
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
	}
}

export default connect(mapStateToProps)(TabComponent);
