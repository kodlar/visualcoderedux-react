import { Provider } from 'react-redux'
import store from './Redux/store/config'
import {render} from 'react-dom'
import Examples from './Components/Examples'
import React from 'react'
render(
  <Provider store={store}>
    <Examples />
    </Provider>,
    document.getElementById('root')
)