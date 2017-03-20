import React, { Component } from 'react'

class Sum extends Component {
  constructor(props){
    super(props)
    this.state = {a:1, b:2} 
  }
 
  render(){  
    const { state : {a,b}, props : {sum, onSum}} = this;
    return(
      <div>
        <input value={a} onChange={(event) => { this.setState({ a : event.target.value });}} />  + 
        <input value={b} onChange={(event) => { this.setState({ b : event.target.value });}} /> 
         = <span> {sum} </span>
        <button onClick={ () => 
          onSum(a,b) }>
           Sum </button>
      </div>)
  }

}
import { connect} from 'react-redux'
import { getSum } from '../Redux/actions/index'

const mapStateToProps = (state, ownProps) => {
  return {
    sum: state.sum
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onSum : (a,b) => {
      dispatch(getSum(a,b))      
    }
  }
}


const SumContainer = connect(mapStateToProps, mapDispatchToProps)(Sum)

export default SumContainer