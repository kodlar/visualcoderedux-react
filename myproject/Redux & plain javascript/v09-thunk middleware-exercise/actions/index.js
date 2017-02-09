function decrease(){
     return { type: 'DECREMENT'};
}

function increase(){
     return { type: 'INCREMENT'};
}

function hrysum(vala, valb){
    return {type: 'SUM', a: vala, b: valb}
}

//ASYNC
var asyncIncrease = function(dispatch, state){
    //loading text true yapmak için yeni bir dispatch eklenir
    dispatch({type: "INCREMENT_LOADING"})
    _fakeServerApi.increaseCount(state.count.result, function(data){           
            dispatch({ type: 'INCREMENT'})
    });
}

var getRandomImages = function(dispatch,state){
    dispatch({type: "IMAGELOADING_TEXT"})
    var imgurAPI = "https://api.imgur.com/3/gallery/random/random/0"
    $.getJSON(imgurAPI).done(function(data){
        for(i=0; i < data.data.length; i++)
        {
            console.info('Api Data', data.data[i].link);
        }
        
    })
}