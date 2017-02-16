  function combineReducer(currentState, action){
              
          var nextState = Object.assign({}, currentState);
         // console.info('currentState:',currentState);
          nextState = {
                showcase : showcase(nextState.showcase, action),
                links : links(nextState.links, action)                                
          }
          return nextState;          
        
      }