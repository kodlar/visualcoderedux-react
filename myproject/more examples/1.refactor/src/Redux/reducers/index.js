import counter from './Examples01/counter'
import sum from './Examples01/sum'
import images from './Examples01/images'
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

      examples: combineReducers({
            count:counter,
            sum,
            images,
      }),
      // todos : combineReducers({

      // }),
      // youtube : combineReducers({

      // }),
      
      routing: routerReducer
})