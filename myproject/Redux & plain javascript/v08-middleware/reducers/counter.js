//subreducer bu counter ve sum nesneleri
function counter(currentState, action){
    var DEFAULT_STATE = 0;
       
         if(currentState === undefined)
           {
             nextState = DEFAULT_STATE;
             return nextState;
          }

           switch(action.type){

             case 'DECREMENT':
               nextState = currentState - 1;
               return nextState;
             break;

             case 'INCREMENT':
               nextState = currentState + 1;
               return nextState;
            break;
           
           default:
              nextState = currentState;
              return nextState; 
          }
   
}