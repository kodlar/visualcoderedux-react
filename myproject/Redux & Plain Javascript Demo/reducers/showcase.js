function showcase(currentState, action){
    var DEFAULT_STATE = { showcase: [] , loading: false };
    var nextState = Object.assign({}, currentState);
    
         if(currentState === undefined)
           {
             nextState = DEFAULT_STATE;
             return nextState;
          }

           switch(action.type){

             case 'NEWSLOADING':
               nextState.showcase = action.data;
               nextState.loading = false;
               return nextState;
             break;
              case 'NEWSLOADING_TEXT':               
               nextState.loading = true;
               return nextState;
            break;
           
           default:
              nextState = currentState;
              return nextState; 
          }
   
}