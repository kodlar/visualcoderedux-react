import counter from './counter'
import sum from './sum'
import images from './images'
import {combineReducers} from 'redux'
import { routerReducer } from 'react-router-redux'
/*
      // step 2.2 //bu fonksiyon reducer bu işlemde bu isimde root reducer olur 
  export default function combineReducer(currentState, action){
              
          var nextState = {...currentState};

          return {
                count : counter(nextState.count, action),
                sum : sum(nextState.sum, action),
                images: images(nextState.images, action)
          }

        
        
      }
*/

export default  combineReducers({
      count:counter,
      sum,
      images,
      routing: routerReducer
})