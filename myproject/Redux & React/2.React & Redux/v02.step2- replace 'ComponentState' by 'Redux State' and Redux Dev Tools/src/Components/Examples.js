import React, { Component } from 'react'
import Counter from './Counter'
import Sum from './Sum'
import RandomImages from './RandomImages'

export default class Examples extends Component{

  render() {    
    console.log('Examples.render()');      
    return (
    <div>
     <h1>React</h1>
      <Counter count={this.props.value.count} onDecrement={this.props.onDecrement}/>
      <Sum sum={this.props.value.sum} onSum={this.props.onSum} />
      <RandomImages images={this.props.value.images} onRandomImages={this.props.onRandomImages}/>      
    </div>    
    )
  }
}