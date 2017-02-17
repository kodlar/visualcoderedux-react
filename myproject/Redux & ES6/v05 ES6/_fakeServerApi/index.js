const _fakeServerApi = {
    //imitate the server api
    increaseCount : (currentCount, cb) =>  setTimeout(() => { cb(currentCount + 1)}, 5000)
    
}