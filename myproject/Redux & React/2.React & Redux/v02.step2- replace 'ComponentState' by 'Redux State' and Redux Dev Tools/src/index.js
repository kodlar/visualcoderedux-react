
import React from 'react'
import ReactDOM from 'react-dom'
import Examples from './Components/Examples'
import store from './Redux/store/config'
import {decrease, getSum, getRandomImages} from './Redux/actions/index'


let render = () => {
  ReactDOM.render(
  <Examples value={store.getState()}
  onDecrement={() => store.dispatch(decrease())}
  onSum={(a,b) => store.dispatch(getSum(a,b))}
  onRandomImages={() => store.dispatch(getRandomImages)}
  />, 
   document.getElementById('root'))
}

render();

store.subscribe(render);