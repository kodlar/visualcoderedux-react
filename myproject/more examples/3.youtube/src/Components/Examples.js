import React, { Component } from 'react'
import Counter from '../Containers/Examples01/Counter'
import Sum from '../Containers/Examples01/Sum'
import RandomImages from '../Containers/Examples01/RandomImages'

export default class Examples extends Component{

  render() {    
   
    return (
    <div>
     <h1>React</h1>
      <Counter><b style={{color:"red"}}> COUNTER CHILDREN </b></Counter>
      <Sum />
      <RandomImages />      
    </div>    
    )
  }
}