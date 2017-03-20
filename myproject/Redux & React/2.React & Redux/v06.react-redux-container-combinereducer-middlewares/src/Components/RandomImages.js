import React, {Component} from 'react'

class RandomImages extends Component{

// componentWillMount(){
//   console.log("test")
// this.onRandomImages();
//   }

 render(){     
        const { images : {data, loading}, onRandomImages} = this.props
        return(
        <div>
        <button onClick={onRandomImages}>Random Images</button>
        <br/>Images Status: <span style={{color:'blue'}}>{loading}</span>
        <p />
        <ImageList  images={data}/>
        </div>
        )
    }
}

 function ImageList(props){
           
            //Burası aslında Array.prototype.map() olayının kısaltılmış hali
            //console.log(images.map(image => "<img src='"+image.link+"' />"))
            return(
                <div>
                    <ul className={'list-group'}>
                   {
                       props.images.map(image => (
                      <li key={image.id}>
                          <a href={image.link}  target="_blank">
                          <img  alt={image.title} src={image.link} style={{height:"200px"}} />
                      </a>
                       </li>))
                    }</ul>
                </div>
            )
        }

import { connect} from 'react-redux'
import { getRandomImages } from '../Redux/actions/index'


const RandomImagesContainer = connect(
   (state, ownProps) => ({images: state.images}), 
   {onRandomImages : () => getRandomImages}
   )(RandomImages)

 
export default RandomImagesContainer