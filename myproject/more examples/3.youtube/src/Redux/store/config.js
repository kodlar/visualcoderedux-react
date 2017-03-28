import { createStore, applyMiddleware,compose} from 'redux'
import combineReducer from '../reducers/index'
import { crashReporter} from '../middlewares/index'
import thunk from 'redux-thunk'
import createLogger from 'redux-logger'
//const store = createStore(combineReducer, applyMiddleware(logger, crashReporter, thunk));

const store = createStore(combineReducer,{},compose(
      applyMiddleware(createLogger(),crashReporter,thunk),
     window.devToolsExtension ? window.devToolsExtension() : f => f
    ));

    

export default store; 


