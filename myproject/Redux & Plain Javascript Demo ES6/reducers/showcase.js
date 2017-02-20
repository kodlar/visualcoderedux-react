const showcase = (currentState = { showcase: [] , loading: false }, action) => {
   
    switch(action.type){
             case 'NEWSLOADING':
               currentState.showcase = action.data;
               currentState.loading = false;
               return currentState;
             break;
              case 'NEWSLOADING_TEXT':               
               currentState.loading = true;
               return currentState;
            break;
           
           default:
              return currentState;              
          }
   
}