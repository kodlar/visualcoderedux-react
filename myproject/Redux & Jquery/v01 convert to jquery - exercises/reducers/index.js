
      // step 2.2 //bu fonksiyon reducer bu işlemde bu isimde root reducer olur 
      function combineReducer(currentState, action){
              
          var nextState = Object.assign({}, currentState);

          nextState = {
                count : counter(nextState.count, action),
                sum : sum(nextState.sum, action),
                images: images(nextState.images, action)
          }

          return nextState;
        
      }
      // end step 2.2