var images = (state = { data: [], loading :"Please click the 'Random Images' button"} , action) => {
  
  
switch(action.type){
    
    case 'IMAGES':
    return Object.assign({}, state, { data: action.data, loading : 'loaded'});

    case 'IMAGELOADING_TEXT':
     return Object.assign({}, state, { loading : 'loading...'});
    default:
    
    return state;
    
}

}