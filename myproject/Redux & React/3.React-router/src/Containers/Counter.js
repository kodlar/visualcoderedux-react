import { Counter } from '../Components/Counter'
import { connect} from 'react-redux'
import { decrease } from '../Redux/actions/index'

export default  connect(
  (state, ownProps) => ({
    count: state.count,
    prop2 : state.prop
  }),
   {
     onDecrement: decrease,
     func2: () => {}
   })(Counter)

