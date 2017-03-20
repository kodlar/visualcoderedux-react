import React, { Component } from 'react'
import Counter from './Counter'
import Sum from './Sum'
import RandomImages from './RandomImages'

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