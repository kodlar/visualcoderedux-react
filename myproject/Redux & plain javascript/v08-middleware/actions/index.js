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