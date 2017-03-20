
import React, { Component } from 'react'

class Counter extends Component {

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

import { connect} from 'react-redux'
import { decrease } from '../Redux/actions/index'



const CounterContainer = connect(
  (state, ownProps) => ({
    count: state.count,
    prop2 : state.prop
  }),
   {
     onDecrement: decrease,
     func2: () => {}
   })(Counter)

export default CounterContainer