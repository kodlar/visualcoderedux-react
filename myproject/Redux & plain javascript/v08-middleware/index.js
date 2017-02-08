   // logger middleware
   const logger = function(store){
     return function(next){
       return function(action){
         console.log(store.getState());
         next(action);       
         console.log(store.getState());
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
            console.error("error happen with action == ", action);
            console.error(err);
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



   
   //step 1.2 (burada combineReducer isminde  reducer olarak parametre alınıyor. İşlem yapılacak fonksiyon)
   // Redux.applyMiddleware middlewareleri bu şekilde dependency şeklinde alıyor...
      var store = Redux.createStore(combineReducer, Redux.applyMiddleware(logger, crashReporter, thunk));
   // end step 1.2
      
      // step 1.3 burası ui kısmı ve ekranda güncellenmesi gerektiğini düşündüğümüz yer.      
      function render() {
       var state = store.getState()
        document.getElementById('value').innerHTML = state.count;
        document.getElementById('sumresult').innerHTML = state.sum;
      }

      render();

      store.subscribe(render);
      // end step 1.3

