
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

const mapStateToProps = (state, ownProps) => {
  console.log(state)
  return {
    count: state.count
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onDecrement : () => {
      dispatch(decrease())      
    }
  }
}


const CounterContainer = connect(mapStateToProps, mapDispatchToProps)(Counter)

export default CounterContainer