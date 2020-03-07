


// function unique(input) {
//     let output = []
//     for (let i = 0; i < input.length; i++) {
//         if (input[i] != output[output.length - 1] || i == 0) {
//             output.push(input[i])
//         }   
//     }
//     return output
// }   
// console.log(unique('AAAsBBcCC ')) 
    
// var uniqueInOrder=function(iterable){
//   let test = Array.from(iterable)
//     test.reduce(final, x , index =>{
//         if( final[final.length -1] !== test[index]){
//               final.push(x)
//         } 
//     }, [])    

//    return final 

// function findUniq(arr) {
//     let str = arr.toString()
//      for(let i = 0; i < str.length; i ++){
//          if( str[i] !== str.length - 1){
//              return 
//       } 
//   }         
// console.log(findUniq([1,1,1,1,1,0,1,1,]))

// function frames(minutes, fps) {
// 	return minutes * (fps * 60)
// }
// function pHName(pH) {
	
// 	if(pH < 0 || pH > 14 ){
// 		return 'invalid'
// 	}else if(pH < 7){
// 		return "acidic"
// 	}else if(pH > 7 ){
// 		return "alkaline"
// 	}else {
// 		return 'neutral'
// 	}	

// }
// let drinksArr = ['orange juice', 'cola', 'apple juice', 'coke']

// function skipTooMuchSugarDrinks(drinks) {
//     let newArr =[]
//     drinks.filter(drink => {
//         if(drink !== 'cola' && drink !== 'fanta'){
//             newArr.push(drink)
//         }      
//     })
    
//     return newArr
// }
// console.log(skipTooMuchSugarDrinks(drinksArr))

function getCase(str) {
      str.map(word =>{
                 if(word === word.toLowerCase() && word === word.toUpperCase()){
                     return 'mixed'
             }else if(word === word.toLowerCase()){
                 return 'lower'
             }else if(word === word.toUpperCase()){
                 return 'upper'
             }
          
     })
}
console.log(getCase('whochi mama'))
