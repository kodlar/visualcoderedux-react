//subreducer bu counter ve sum nesneleri

var counter = (state = { result:0 , loading: false }, action) => {
       
           switch(action.type){
             case 'DECREMENT':               
               return Object.assign({}, state, { result : state.result - 1 });
             break;
             case 'INCREMENT':
               return Object.assign({}, state, { result : state.result + 1, loading : false });               
            break;
              case 'INCREMENT_LOADING':               
               return Object.assign({}, state, {  loading : true });                              
            break;           
           default:
              
              return state; 
          }
   
}