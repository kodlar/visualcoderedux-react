import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import Counter from './Components/counter'
import Sum from './Components/sum'
import RandomImages from './Components/randomimages'

class Examples extends Component {
constructor(props){
      super(props)
}

  render() {    
    console.log('Examples.render()');      
    return (
    <div>
      <h1>React</h1>
       <Counter/>
        <Sum />
     <RandomImages />
      <p />
    </div>    
    )
  }
}

ReactDOM.render(<Examples/>, 
                document.getElementById('root'))

