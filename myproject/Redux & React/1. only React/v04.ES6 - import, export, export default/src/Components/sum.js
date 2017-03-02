import React, { Component } from 'react'

export default class Sum extends Component {
  constructor(props){
    super(props)
    this.state = {sum:3, a:2, b:1} 
  }
  
  topla = (a,b) => {
    this.setState({sum: Number(a) + Number(b) })
  }

  render(){
    console.log('Sum.render()');
    return(
      <div>
        <input value={this.state.a} onChange={(event) => { this.setState({ a : event.target.value });}} />  + 
        <input value={this.state.b} onChange={(event) => { this.setState({ b : event.target.value });}} /> 
         = <span> {this.state.sum} </span>
        <button onClick={ () => this.topla(Number(this.state.a),Number(this.state.b)) }> Sum </button>
      </div>)
  }

}
