import React, {Component} from 'react';
import {connect} from 'react-redux';
import {deleteitem} from '../actions/actions.js';


class Products extends Component {

	constructor(props) {
		super(props);
		this.handleDelete = this.handleDelete.bind(this);
	}

	handleDelete(id) {
		this.props.dispatch(actions.deleteitem(id))
  }

	render() {
		   let i=0;
	       const list = this.props.items.map( x => <li id={x.name+x.price} key={i++}>
					 <span>Name: {x.name}</span>,
					 <span> Price: {x.price}</span>,
					 <span> Amount: {x.amount}</span>
					 <button onClick={this.handleDelete}>delete</button>
					 </li> )
		return (
			<div id="ul">
            <h3>ADMIN</h3>
            <h4>products in the store</h4>
			<ul>{list}</ul>
		  </div>
		);
	}

}

function mapStateToProps(state) {
    return { products:state.products };
}
export default connect(mapStateToProps)(Products);
