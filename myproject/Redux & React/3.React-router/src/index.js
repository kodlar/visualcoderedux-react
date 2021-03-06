import { Provider } from 'react-redux'
import store from './Redux/store/config'
import {render} from 'react-dom'
import App from './Components/App'
import Examples from './Components/Examples'
import Examples02 from './Components/Examples02'
import React from 'react'
import { Router, Route, IndexRoute ,browserHistory } from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'

/*render(
  <Provider store={store}>
    <Examples />
    </Provider>,
    document.getElementById('root')
)*/

// Create an enhanced history that syncs navigation events with the store
const history = syncHistoryWithStore(browserHistory, store)

render(
  <Provider store={store}>
    { /* Tell the Router to use our enhanced history */ }
    <Router history={history}>
      <Route path="/" component={App}>
      <IndexRoute component={Examples}/>
        <Route path="ex02/:name" component={Examples02}/>
      </Route>
    </Router>
  </Provider>,
  document.getElementById('root')
)