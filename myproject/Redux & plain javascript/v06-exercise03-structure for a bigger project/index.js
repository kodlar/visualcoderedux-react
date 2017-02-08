   //step 1.2 (burada counter reducer olarak parametre alınıyor. işlem yapılacak fonksiyon)
      var store = Redux.createStore(combineReducer);
   // end step 1.2
      
      // step 1.3 burası ui kısmı ve ekranda güncellenmesi gerektiğini düşündüğümüz yer.
      var valueEl = document.getElementById('value');
      var sumlabel = document.getElementById('sumresult');
      
      function render() {
       var state = store.getState()
        valueEl.innerHTML = state.count;
        sumlabel.innerHTML = state.sum;
      }

      render();

      store.subscribe(render);
      // end step 1.3

