import React, { Component } from 'react';
import '../App.css';
import Form from './Form';
import Products from './Products';
import {connect} from 'react-redux';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Uppgift 23</h1>

        <Form />

        <Products items={this.props.products} />
        {this.props.products[1].name}
      </div>
    );
  }
}

function mapStateToProps(state) {
	console.log('state:', state);
	return {
		...state
	}
}

export default connect(mapStateToProps)(App);
