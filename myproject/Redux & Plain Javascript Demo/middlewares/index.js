   // logger middleware
   const logger = function(store){
     return function(next){
       return function(action){
        
         next(action);       
        // console.log(store.getState());
       }
     }
   }

  // error middleware
  const crashReporter = function(store){
    return function(next){
      return function(action){
        try{
            next(action);
        }
        catch(err){
            console.error("error happen with action == ", action)
            console.error(err)
        }
        
      }
    }
  }


  // thunk middleware (async function handling in redux)
  const thunk = function(store){
    return function(next){
      return function(action){
        
        if(typeof action === 'function'){
            action(store.dispatch, store.getState());
        }else{
          next(action);
        }
        
      }
    }
  }
