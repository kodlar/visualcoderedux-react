import React, { Component } from 'react'
import ReactDOM from 'react-dom'

class Examples extends Component {

constructor(props){
  super(props)
  this.state = {count :0, sum:3, a:2, b:1}
  this.decrease = this.decrease.bind(this);
}

decrease = () => {
   this.setState({count: this.state.count - 1})
}

  render() {          
    return (
    <div>
        <h1>React</h1>
        Clicked: <span>{ this.state.count }</span> times
        <button onClick={this.decrease}> Decrease </button>
         <p />
         <input value={this.state.a} onChange={(event) => { this.setState({ a : event.target.value });}} />  + 
         <input value={this.state.b} onChange={(event) => { this.setState({ b : event.target.value });}} /> 
          = <span> {this.state.sum} </span>
          <button onClick={ () => this.setState({sum: parseInt(this.state.a) + parseInt(this.state.b) }) }> Sum </button>
      <p />
    </div>    
    )
  }
}

ReactDOM.render(<Examples/>, document.getElementById('root'))

