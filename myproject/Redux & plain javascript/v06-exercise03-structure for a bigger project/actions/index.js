var decrease =  function (){
     return { type: 'DECREMENT'};
}

var increase = function (){
     return { type: 'INCREMENT'};
}

// var sum = function(vala, valb){
//     return {type: 'SUM', a: vala , b: valb};
// }
var getSum = function(a, b){
    return { type: 'SUM', a:a, b:b };
}