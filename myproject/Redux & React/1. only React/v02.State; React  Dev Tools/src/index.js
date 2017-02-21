import React, { Component } from 'react'
import ReactDOM from 'react-dom'

class Examples extends Component {

  func01(){
    console.log('selamlar');
    return 'function-01';
  }
 
  render() {

    const func02 = () => {
      console.log('hello from func02');
      return "this func02 is in render";
    }
    
    return (
    <div>
    <div>Hello from Simple React</div>    
    <div style={{color:"red"}}>Yeah baby Simple React2</div>
    <div>{ 1 + 1}</div>
     <div>{ this.func01()}</div>
     <div>{ func02()}</div>
    </div>    
    )
  }
}

ReactDOM.render(<Examples/>, document.getElementById('root'))

