



//step 1.2 (burada combineReducer isminde  reducer olarak parametre alınıyor. İşlem yapılacak fonksiyon)
// Redux.applyMiddleware middlewareleri bu şekilde dependency şeklinde alıyor...
var store = Redux.createStore(combineReducer, Redux.applyMiddleware(logger, crashReporter, thunk));
// end step 1.2

// step 1.3 burası ui kısmı ve ekranda güncellenmesi gerektiğini düşündüğümüz yer.      
 render = () => {
  var state = store.getState()
  $('#value').text(state.count.result);
  $('#sumresult').text(state.sum);

  if (state.count.loading) {
    $('#status').text("is loading...");
  } else {
    $('#status').text("loaded");
  }

// image
    $('#imagesStatus').text(state.images.loading);
    if(state.images.loading =="loading…"){
         $('#imagesList').text("LOADING...");
    }
     else if(state.images.loading =="loaded"){
         for(var i=0; i< state.images.data.length; i++){
             $('#imagesList').append("<img src='"  + state.images.data[i].link + "' style='height:200px'>");
         }
     }

}
store.subscribe(render);

render();


      // end step 1.3

