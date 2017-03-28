import { connect} from 'react-redux'
import { decrease } from '../../Redux/actions/index'
import React, {Component} from 'react'

class Counter extends Component {

render(){ 

const {count:{result}, onDecrement} = this.props;

    return(
    <div>
        Clicked: <span>{ result }</span> times
       { this.props.children }
        <button onClick={ onDecrement }> Decrease </button>
         <p />
    </div>
    )
  }

}

export default  connect(
  (state, ownProps) => ({
    count: state.examples.count,
    prop2 : state.prop
  }),
   {
     onDecrement: decrease,
     func2: () => {}
   })(Counter)

