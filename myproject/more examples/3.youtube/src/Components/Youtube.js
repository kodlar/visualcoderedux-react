import React, { Component } from 'react'
import Search from '../Containers/Youtube/Search'
import Video from '../Containers/Youtube/Video'
import List from '../Containers/Youtube/List'

export default class Youtube extends Component{

  render() {    
    return (
    <div>
     <h1>YouTube</h1>
        <Search/>
        <Video/>
        <List/>
    </div>    
    )
  }
}