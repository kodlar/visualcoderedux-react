import React, { Component } from 'react'
import ReactDOM from 'react-dom'
//import Counter, {a,b} from './Components/counter'
import Counter from './Components/counter'
import Sum from './Components/sum'

class Examples extends Component {

  render() {    
    // console.log(a);
    // console.log(b);
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

