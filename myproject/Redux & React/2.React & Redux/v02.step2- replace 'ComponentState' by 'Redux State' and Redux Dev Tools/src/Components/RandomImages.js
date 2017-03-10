import React, {Component} from 'react'

export default class RandomImages extends Component{

/*componentWillMount(){
this.randomImages();
  }*/

 render(){     
        return(
        <div>
        <button onClick={this.props.onRandomImages}>Random Images</button>
        <br/>Images Status: <span style={{color:'blue'}}>{this.props.images.loading}</span>
        <p />
        <ImageList  images={this.props.images.data}/>
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
