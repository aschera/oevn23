import React, {Component} from 'react';
import {connect} from 'react-redux';
//import * as actions from '../actions/actions.js';


class Form extends Component {


	render() {

		return (
			<div>
			<form id="form">
            <h3>ADMIN</h3>
            <h4>Form to add products</h4>
            <input placeholder="name"/><input placeholder="price"/><input placeholder="amount"/>
            <button> click </button>
            </form>
		  </div>
		);
	}

}

function mapStateToProps(state) {
    return { value: state.value };
}
export default connect(mapStateToProps)(Form);
