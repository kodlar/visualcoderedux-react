import React, { Component } from 'react'
import ReactDOM from 'react-dom'

class Examples extends Component {

  func01(){
    console.log('selamlar');
    return 'function01';
  }

  render() {
    return (
    <div>
    <div>Hello from Simple React</div>    
    <div style={{color:"red"}}>Yeah baby Simple React2</div>
    <div>{ 1 + 1}</div>
     <div>{ this.func01()}</div>
    </div>    
    )
  }
}

ReactDOM.render(<Examples/>, document.getElementById('root'))

