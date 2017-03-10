
import React from 'react'
import ReactDOM from 'react-dom'
import Examples from './Components/Examples'
import store from './Redux/store/config'



let render = () => {
  ReactDOM.render(<Examples/>,  document.getElementById('root'))
}

render();

store.subscribe(render);