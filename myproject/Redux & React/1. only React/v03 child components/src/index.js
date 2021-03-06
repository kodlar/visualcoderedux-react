import React, { Component } from 'react'
import ReactDOM from 'react-dom'

class Counter extends Component {

constructor(props){
  super(props)
  this.state = {count :0}  
}

decrease = () => {
   this.setState({count: this.state.count - 1})
}

render(){
  console.log('Counter.render()');
    return(
    <div>
        Clicked: <span>{ this.state.count }</span> times
        <button onClick={() => this.decrease()}> Decrease </button>
         <p />
    </div>
    )
  }
}

class Sum extends Component {
  constructor(props){
    super(props)
    this.state = {sum:3, a:2, b:1} 
  }
  sum = (a,b) => {
    this.setState({sum: Number(a) + Number(b) })
  }
  render(){
    console.log('Sum.render()');
    return(
      <div>
        <input value={this.state.a} onChange={(event) => { this.setState({ a : event.target.value });}} />  + 
        <input value={this.state.b} onChange={(event) => { this.setState({ b : event.target.value });}} /> 
         = <span> {this.state.sum} </span>
        <button onClick={ () => this.sum(Number(this.state.a),Number(this.state.b)) }> Sum </button>
      </div
    >)
  }

}


class Examples extends Component {


  render() {    
    console.log('Examples.render()');      
    return (
    <div>
        <h1>React</h1>
         <Counter />
         <Sum />
      <p />
    </div>    
    )
  }
}

ReactDOM.render(<Examples/>, document.getElementById('root'))

