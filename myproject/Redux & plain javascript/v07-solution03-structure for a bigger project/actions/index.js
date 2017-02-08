function decrease(){
     return { type: 'DECREMENT'};
}

function increase(){
     return { type: 'INCREMENT'};
}

function hrysum(vala, valb){
    return {type: 'SUM', a: vala, b: valb}
}