const links = (currentState = { links: [] , loading: false }, action) => {
    
           switch(action.type){

             case 'USERLOADING':
               currentState.links = action.data;
               currentState.loading = false;
               return currentState;
             break;

              case 'USERLOADING_TEXT':               
               currentState.loading = true;
               return currentState;
              break;
           
           default:              
              return currentState; 
          }
   
}