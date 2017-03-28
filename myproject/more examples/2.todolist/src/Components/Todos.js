import React, { Component } from 'react'
import AddTodo from '../Containers/Todos/AddTodo'
import TodosList from '../Containers/Todos/TodosList'
import FiltersList from '../Containers/Todos/FiltersList'
export default class Todos extends Component{

  render() {    
   
    return (
    <div>
     <h1>Todo List</h1>
      <AddTodo/>
      <TodosList/>
      <FiltersList/>
    </div>    
    )
  }
}