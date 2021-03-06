console.log('burası app başlangıç noktası');

var store = Redux.createStore(combineReducer, Redux.applyMiddleware(logger, crashReporter, thunk));

function render(){

        var state = store.getState(); 
        
        if(state.showcase.loading)
        {
                document.getElementById('showcase_status').innerText = "Haberler yükleniyor...";
        }
        else
        {
                document.getElementById('showcase_status').innerText = "";

                for(i = 0; i < state.showcase.showcase.length; i++)
                {
                        let showcase = state.showcase.showcase[i];
                        if($(".carousel-indicators li").length < state.showcase.showcase.length)
                        {
                                if(i == 0)
                                {
                                        $(".carousel-indicators").append("<li data-target=\"#myCarousel\" data-slide-to=\"0\" class=\"active\"></li>")
                                        $(".carousel-inner").append("<div class=\"item active\"><img src=\"" + showcase.image + "\" alt=\""+showcase.alt+"\"></div>");
                                }
                                else
                                {
                                        $(".carousel-indicators").append("<li data-target=\"#myCarousel\" data-slide-to=\""+i+"\" class=\"active\"></li>") 
                                        $(".carousel-inner").append("<div class=\"item\"><img src=\"" + showcase.image + "\" alt=\""+ showcase.alt +"\"></div>");
                                }          
                        }
                }

        }


        if(state.links.loading){
                document.getElementById('userchoicespan').innerText = "Kullanıcı tercihleri yükleniyor...";
                
        }
        else{
                document.getElementById('userchoicespan').innerText = "";
                if($('#user_choices li').length < state.links.links.length)
                {
                        $('#user_choices').empty();
                        for(i = 0; i < state.links.links.length; i++)
                        {
                              let listItem = state.links.links[i];
                              $('#user_choices').append("<li><a href=\""+listItem.url+"\" target=\"_blank\">"+ listItem.todo+"</a></li>");
                        }
                }
                
        }
        
}

store.subscribe(render);
// on load eventi tadında haberleri getir



render();


store.dispatch(getShowcaseNews);
store.dispatch(getUserChoices);
// setInterval(() => { 
//         console.log('burdayım tekrar');
//         store.dispatch(getUserChoices);
// },5000);

//Events
 document.getElementById('hbrBtn').addEventListener('click', function(){           
         location.reload();
        
 });