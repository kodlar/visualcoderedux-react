import React, { Component } from 'react'

export default class Sum extends Component {
  constructor(props){
    super(props)
    this.state = {a:1, b:2} 
  }
 
  render(){  
    return(
      <div>
        <input value={this.state.a} onChange={(event) => { this.setState({ a : event.target.value });}} />  + 
        <input value={this.state.b} onChange={(event) => { this.setState({ b : event.target.value });}} /> 
         = <span> {this.props.sum} </span>
        <button onClick={ () => 
          this.props.onSum(this.state.a, this.state.b) }>
           Sum </button>
      </div>)
  }

}
