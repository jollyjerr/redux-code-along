import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react'
import {connect} from 'react-redux'

function App(){

    return (
      <div>
        <h1>Counter App</h1>
        <h2>{this.state.counter}</h2>
        <button onClick={() => this.setState({counter: this.state.counter + 1})} id="add">+</button>
        <button onClick={() => this.setState({ counter: this.state.counter - 1 })} id="subtract">-</button>
      </div>
    )
}

export default connect(null, null)(App);

