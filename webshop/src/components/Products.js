import React, {Component} from 'react';
import {connect} from 'react-redux';
import * as actions from '../actions/actions.js';


class Products extends Component {
	constructor(props) {
		super(props);
	}
    
	render() {
		
		return (
			<div id="ul">
            <h3>ADMIN</h3>
            <h4>products in the store</h4>
			<ul>
            <li>product 1</li>
            <li>product 2</li>
            </ul>
		  </div>
		);
	}

}

function mapStateToProps(state) {
    return { value: state.value };
}
export default connect(mapStateToProps)(Products);
