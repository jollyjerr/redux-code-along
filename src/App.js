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
        <button onClick={() => this.setState({counter: this.state.counter + 1})} id="add">+</button>
        <button onClick={() => this.setState({ counter: this.state.counter - 1 })} id="subtract">-</button>
      </div>
    )
  }
}

