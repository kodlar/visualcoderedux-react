console.log('burası app başlangıç noktası');

document.getElementById('hbrBtn').addEventListener('click', function(){
        store.dispatch(haberleriGetir);
});