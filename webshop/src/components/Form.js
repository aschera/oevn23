import React, {Component} from 'react';
import {connect} from 'react-redux';
import {additem} from '../actions/actions.js';


class Form extends Component {

	constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {

		e.preventDefault();
    const formData = {};
    for (const field in this.refs) {
      formData[field] = this.refs[field].value;
    }
    console.log('-->', formData);

		let action = additem(formData.name, formData.price, formData.amount);
	  this.props.dispatch( action );

  }

	render() {

		return (
			<div>
			<form id="form">
            <h3>ADMIN</h3>
            <h4>Form to add products</h4>
            <input ref="name" className="name" name="name"/>
            <input ref="price" className="price" name="price"/>
						<input ref="amount" className="amount" name="amount"/>
            <button onClick={this.handleSubmit}>Add new item to store</button>
          </form>
		  </div>
		);
	}

}

function mapStateToProps(state) {

	return {
		state
	}
}

export default connect(mapStateToProps)(Form);
