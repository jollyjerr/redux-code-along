import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react'

export default class App extends Component {

  state = {
    counter: 0
  }

  render() {
    return (
      <div>
        <h1>Counter App</h1>
        <h2>{this.state.counter}</h2>
        <button id="add">+</button>
        <button id="subtract">-</button>
      </div>
    )
  }
}

