var sum = (currentState, action) => {
    var DEFAULT_STATE = 3;
        if(currentState === undefined)
           {
             nextState = DEFAULT_STATE;
             return nextState;
          }
           switch(action.type){            
            case 'SUM':
              nextState = parseInt(action.a) + parseInt(action.b);
              //this.funcWithError();
              return nextState;
            break;

           default:
              nextState = currentState;
              return nextState; 
          }
    
}

var funcWithError = () => {
  throw Error('an error from sum reducer')
}