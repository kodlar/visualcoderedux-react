export default function images(state = { data: [], loading :"Please click the 'Random Images' button"} , action){
  
  
switch(action.type){
    
    case 'IMAGES':
    return {...state, data: action.data, loading : 'yüklendi!'};

    case 'IMAGELOADING_TEXT':
     return {...state,  loading : 'yükleniyor...'};
    default:
    
    return state;
    
}

}