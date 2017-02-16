var getShowcaseNews = function(dispatch,state){   
    dispatch({type: "NEWSLOADING_TEXT"});
    var newsShowcaseAPI = "http://localhost:3000/showcase"    
    $.getJSON(newsShowcaseAPI).done(function(data){    
        dispatch({type:'NEWSLOADING', data: data})          
    })
}

var getUserChoices = function(dispatch, state){   
    dispatch({type: "USERLOADING_TEXT"});
    var userChoicesAPI = "http://localhost:3000/todos" 
   $.getJSON(userChoicesAPI).done(function(data){
       dispatch({type:'USERLOADING', data: data});          
    })     
    
}