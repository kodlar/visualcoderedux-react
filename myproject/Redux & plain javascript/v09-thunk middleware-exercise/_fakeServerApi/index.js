var _fakeServerApi = {
    //imitate the server api
    increaseCount : function(currentCount, cb){
        setTimeout(function(){
            cb(currentCount + 1);
        }, 5000)
    }
}