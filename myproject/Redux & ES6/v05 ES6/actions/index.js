var decrease  = () => ({ type: 'DECREMENT'});

var increase = () => ({ type: 'INCREMENT'});

var hrysum = (vala, valb) => ({type: 'SUM', a: vala, b: valb});

//ASYNC
var asyncIncrease = (dispatch, state) => {
    //loading text true yapmak için yeni bir dispatch eklenir
    dispatch({type: "INCREMENT_LOADING"})
    _fakeServerApi.increaseCount(state.count.result, (data) => dispatch({ type: 'INCREMENT'}));
}

var getRandomImages = (dispatch,state) => {
     
     dispatch({type: "IMAGELOADING_TEXT"})

    var imgurAPI = "https://api.imgur.com/3/gallery/random/random/0"
    
    $.getJSON(imgurAPI).done((data) => dispatch({type:'IMAGES', data: data.data}))

}