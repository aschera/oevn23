import React, { Component } from 'react';
import '../App.css';
import Form from './Form';
import Products from './Products';


class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Uppgift 23</h1>
        
        <Form /> 
        
        <Products />

      </div>
    );
  }
}

export default App;
