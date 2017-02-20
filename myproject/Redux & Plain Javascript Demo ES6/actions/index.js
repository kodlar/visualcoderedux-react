const getShowcaseNews = (dispatch,state) => {   
    dispatch({type: "NEWSLOADING_TEXT"});
    var newsShowcaseAPI = "http://localhost:3000/showcase";    
    $.getJSON(newsShowcaseAPI).done((data) => dispatch({type:'NEWSLOADING', data: data}))
}

const getUserChoices = (dispatch, state) => {   
    dispatch({type: "USERLOADING_TEXT"});
    var userChoicesAPI = "http://localhost:3000/todos"; 
    $.getJSON(userChoicesAPI).done((data) => dispatch({type:'USERLOADING', data: data}))         
}