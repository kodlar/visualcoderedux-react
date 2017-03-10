import React, { Component } from 'react'

export default class Counter extends Component {

constructor(props){
  super(props)
  console.log('counter içine gönderilen fonksiyon: ', props)
  this.state = {count :0}    
}


decrease = () => {
   this.setState({ count: this.state.count - 1 })   
}

render(){
  console.log('Counter.render()');
    return(
    <div>
        Clicked: <span>{ this.state.count }</span> times
        <button onClick={ this.decrease }> Decrease </button>
         <p />
    </div>
    )
  }

}
