import React, { Component } from 'react'
import Counter from './Counter'
import Sum from './Sum'
import RandomImages from './RandomImages'

export default class Examples extends Component{

  render() {    
    console.log('Examples.render()');   
    const {value: {count,sum, images}, onDecrement, onSum, onRandomImages } = this.props;  
    return (
    <div>
     <h1>React</h1>
      <Counter count={count} onDecrement={ onDecrement }/>
      <Sum sum={sum} onSum={ onSum} />
      <RandomImages images={ images} onRandomImages={ onRandomImages }/>      
    </div>    
    )
  }
}