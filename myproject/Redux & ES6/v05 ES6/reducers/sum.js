var sum = (state = 3, action) => {
    
    
           switch(action.type){            
            case 'SUM':
              return parseInt(action.a) + parseInt(action.b);
              //this.funcWithError();              
            break;

           default:
              return state;
              
          }
    
}

var funcWithError = () => {
  throw Error('an error from sum reducer')
}