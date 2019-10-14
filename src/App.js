import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react'
import {connect} from 'react-redux'

function App(props){

    return (
      <div>
        <h1>Counter App</h1>
        <h2>{props.counter}</h2>
        <button onClick={() => props.add() } id="add">+</button>
        <button onClick={() => this.setState({ counter: this.state.counter - 1 })} id="subtract">-</button>
      </div>
    )
}

const mapStateToProps = (state) => {
  return {
    counter: state
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    add: () => dispatch({type: 'ADD'})
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App); 

