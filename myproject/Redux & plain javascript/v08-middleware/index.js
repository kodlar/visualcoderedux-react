


   
   //step 1.2 (burada combineReducer isminde  reducer olarak parametre alınıyor. İşlem yapılacak fonksiyon)
   // Redux.applyMiddleware middlewareleri bu şekilde dependency şeklinde alıyor...
      var store = Redux.createStore(combineReducer, Redux.applyMiddleware(logger, crashReporter, thunk));
   // end step 1.2
      
      // step 1.3 burası ui kısmı ve ekranda güncellenmesi gerektiğini düşündüğümüz yer.      
      function render() {
       var state = store.getState()
        document.getElementById('value').innerHTML = state.count.result;
        document.getElementById('sumresult').innerHTML = state.sum;

        if(state.count.loading){
          document.getElementById('status').innerHTML = "is loading...";
        }else{
          document.getElementById('status').innerHTML = "loaded";
        }


      }

      render();

      store.subscribe(render);
      // end step 1.3

