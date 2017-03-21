import React, { Component } from 'react'
import Counter from '../Containers/Counter'
import Sum from '../Containers/Sum'
import RandomImages from '../Containers/RandomImages'

export default class Examples extends Component{

  render() {    
   
    return (
    <div>
     <h1>React</h1>
      <Counter />
      <Sum />
      <RandomImages />      
    </div>    
    )
  }
}