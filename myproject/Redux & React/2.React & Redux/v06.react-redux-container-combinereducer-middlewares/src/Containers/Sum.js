import {Sum} from '../Components/Sum'
import { connect} from 'react-redux'
import { getSum } from '../Redux/actions/index'


export default connect(
  (state, ownProps) => ({sum: state.sum }), 
  {onSum : (a,b) => getSum(a,b)} 
  )(Sum)

