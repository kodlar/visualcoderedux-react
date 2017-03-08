import React, {Component} from 'react'
import $ from 'jquery'


export default class RandomImages extends Component{

constructor(props){
    super(props)
    this.state = {
        data:[],
        loading : "please click the 'Random Images' button"        
    }
    this.randomImages = this.randomImages.bind(this);
} 


randomImages(){
    this.setState({loading:'loading...'});
    var imgurAPI = "https://api.imgur.com/3/gallery/random/random/0"
    $.getJSON(imgurAPI).done(data => this.setState({'data': data.data, 'loading':'images loaded !'}))
}
componentWillMount(){
//this.randomImages();
  }

 render(){
        console.log('RandomImages.render()')
        //const images = this.state.data;
        return(
        <div>
        <button onClick={this.randomImages}>Random Images</button>
        <br/>Images Status: <span style={{color:'blue'}}>{this.state.loading}</span>
        <p />
        <ImageList  images={this.state.data}/>
        </div>
        )
    }
}

 function ImageList(props){
            console.log(props.images)
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
