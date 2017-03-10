export default function sum(state = 3, action){
        
           switch(action.type){            
            case 'SUM':
              return parseInt(action.a, 10) + parseInt(action.b, 10);
              //this.funcWithError();                         
           default:
              return state;              
          }
  }
/*
var funcWithError = () => {
  throw Error('an error from sum reducer')
}
*/
//radix bilgisi yukarıdaki parseInt() ikinci parametre, radix yerine number'da kullanılabilir.
//http://stackoverflow.com/questions/7818903/jslint-says-missing-radix-parameter-what-should-i-do