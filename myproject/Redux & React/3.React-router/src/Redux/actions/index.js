import $ from 'jquery'

export const decrease  = () => ({ type: 'DECREMENT'});

export const getSum = (a,b) => ({type: 'SUM', a, b});

export const getRandomImages = (dispatch, state) => {
   
    dispatch({type: "IMAGELOADING_TEXT"})

    var imgurAPI = "https://api.imgur.com/3/gallery/random/random/0"

    console.log(imgurAPI)

    $.getJSON(imgurAPI).done((data) => dispatch({type:'IMAGES', data: data.data}))

}