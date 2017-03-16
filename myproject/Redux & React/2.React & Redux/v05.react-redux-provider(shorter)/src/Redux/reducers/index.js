import counter from './counter'
import sum from './sum'
import images from './images'
      // step 2.2 //bu fonksiyon reducer bu işlemde bu isimde root reducer olur 
  export default function combineReducer(currentState, action){
              
          var nextState = {...currentState};

          return {
                count : counter(nextState.count, action),
                sum : sum(nextState.sum, action),
                images: images(nextState.images, action)
          }

        
        
      }