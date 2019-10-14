import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react'
import {connect} from 'react-redux'

function App(props){

    return (
      <div>
        <h1>Counter App</h1>
        <h2>{this.state.counter}</h2>
        <button onClick={() => props.dispatch({type: 'ADD'})} id="add">+</button>
        <button onClick={() => this.setState({ counter: this.state.counter - 1 })} id="subtract">-</button>
      </div>
    )
}

const mapStateToProps = (state) => {
  return {
    counter: state
  }
}

export default connect(mapStateToProps, null)(App); //null exists where map dispatch to props exists

