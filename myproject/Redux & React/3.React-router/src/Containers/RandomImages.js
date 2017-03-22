import { RandomImages } from '../Components/RandomImages'
import { connect} from 'react-redux'
import { getRandomImages } from '../Redux/actions/index'


export default connect(
   (state, ownProps) => ({images: state.images}), 
   {onRandomImages : () => getRandomImages}
   )(RandomImages)

