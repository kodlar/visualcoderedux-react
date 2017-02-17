var images = (currentState, action) => {
    var DEFAULT_STATE = { data: [], loading :"Please click the 'Random Images' button"};
    var nextState = Object.assign({},currentState);
    if(currentState === undefined){
        nextState = DEFAULT_STATE;
        return nextState;
    }

switch(action.type){
    
    case 'IMAGES':
    nextState.data = action.data
    nextState.loading = "loaded";
    return nextState;

    case 'IMAGELOADING_TEXT':
    nextState.loading = "loading...";
    return nextState;
    
    default:
    nextState = currentState;
    return nextState;
    
}

}