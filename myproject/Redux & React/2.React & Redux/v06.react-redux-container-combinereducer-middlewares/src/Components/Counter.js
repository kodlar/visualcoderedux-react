
import React, { Component } from 'react'

export class Counter extends Component {

render(){ 

const {count:{result}, onDecrement} = this.props;

    return(
    <div>
        Clicked: <span>{ result }</span> times
        <button onClick={ onDecrement }> Decrease </button>
         <p />
    </div>
    )
  }

}

