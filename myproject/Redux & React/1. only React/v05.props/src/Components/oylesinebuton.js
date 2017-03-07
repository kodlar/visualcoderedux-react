import React, { Component } from 'react'

export default class Bu extends Component{

 sozuGuncelle = () => {   
   this.props.updateGununSozu('bilgi dediğin zarar verir eğer kullanmazsan! ')
   this.props.updateAnotherBrickInTheWall('bağlantıda sorun oluştu');
}

    render(){
        return(<div>
        <button onClick={() => this.sozuGuncelle()} >Lafı çevir</button>
        </div>)
    }
}