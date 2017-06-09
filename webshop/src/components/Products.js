import React, {Component} from 'react';
import {connect} from 'react-redux';
import * as actions from '../actions/actions.js';


class Products extends Component {
	constructor(props) {
		super(props);
	}
    
	render() {
		   let i=0;
	       const list = props.items.map( x => <li key={i++}>{x}</li> )
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
    return { value: state.value };
}
export default connect(mapStateToProps)(Products);


let i=0;
	const list = props.items.map( x => <li key={i++}>{x}</li> )
	return (
		<ul>{list}</ul>
);