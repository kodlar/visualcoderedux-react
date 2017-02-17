   // logger middleware
const logger = store => next => action => {        
         next(action);       
         console.log(store.getState());
}
// error middleware
const crashReporter = store => next => action => {
        try{
            next(action);
        }
        catch(err){
            console.error("error happen with action == ", action)
            console.error(err)
        }
}
// thunk middleware (async function handling in redux)
const thunk = store => next =>  action => {
         if(typeof action === 'function'){
            action(store.dispatch, store.getState());
        }else{
          next(action);
        }
}    