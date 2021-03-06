function links(currentState, action){
    var DEFAULT_STATE = { links: [] , loading: false };
    
    var nextState = Object.assign({}, currentState);
    
         if(currentState === undefined)
           {
             nextState = DEFAULT_STATE;
             return nextState;
          }

           switch(action.type){

             case 'USERLOADING':
               nextState.links = action.data;
               nextState.loading = false;
               return nextState;
             break;

              case 'USERLOADING_TEXT':               
               nextState.loading = true;
               return nextState;
              break;
           
           default:
              nextState = currentState;
              return nextState; 
          }
   
}