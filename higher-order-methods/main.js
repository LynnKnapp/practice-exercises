// ***** .map ********

// let array=[2,5,100]
// let doubleNumbers = array.map(arr => {
//     return arr * 2

// })
// console.log(doubleNumbers)


// => [2,3,4,5]

// 
// let arrayNames = ["john", "JACOB", "jinGleHeimer", "schmidt"]
//  let capitalizeNames = arrayNames.map(name =>{
//         return name.slice(0,1).toUpperCase() + name.slice(1).toLowerCase()
        
//     })
  
  
//   console.log(capitalizeNames)

//  let celebs =[
//     {
//         name: "Angelina Jolie",
//         age: 80
//     },
//     {
//         name: "Eric Jones",
//         age: 2
//     },
//     {
//         name: "Paris Hilton",
//         age: 5
//     },
//     {
//         name: "Kayne West",
//         age: 16
//     },
//     {
//         name: "Bob Ziroll",
//         age: 100
//     }]
//     let name = document.createElement(h1)
//     name.innerText = celebs.name 

//     let age = document.createElement(h2)
//     age.innerText = celebs.age

    // let mappedCelebs =celebs.map(name => {
    //     if(name.age >=18){
    //         return name.name + " " +('can go to the movie')
    //     }else if(name.age < 18){
    //         return name.name + " " +("you can't go in")
    //     }
    // })

    // console.log(mappedCelebs)

 // *****  .filter ******

//   const arr =[3,6,8,2]
//   const greaterThanFive =arr.filter(num => num > 5)
//   const onlyEvens = arr.filter(num => num % 2 === 0)  
  
  
//   console.log(onlyEvens)

//   const arr = ["dog", "wolf", "by", "family", "eaten", "camping"]
//   const fiveCharactersOrFewerOnly = arr.filter(item =>{
//         if(item.length <= 5){
//             return true
//         }
//   })
  
//   console.log(fiveCharactersOrFewerOnly)
//  const peopleArr = [
//     { name: "Angelina Jolie", member: true },
//     { name: "Eric Jones", member: false },
//     { name: "Paris Hilton", member: true },
//     { name: "Kayne West", member: false },
//     { name: "Bob Ziroll", member: true }]

//   const peopleWhoBelongToTheIlluminati = peopleArr.filter(person =>{
//       if(person.member !== true){
//           return person.name + " can't go to the club" 
//       }
//   })

//   console.log(peopleWhoBelongToTheIlluminati)

//  const peopleArr=[
//     { name: "Angelina Jolie", age: 80 },
//     { name: "Eric Jones", age: 2 },
//     { name: "Paris Hilton", age: 5 },
//     { name: "Kayne West", age: 16 },
//     { name: "Bob Ziroll", age: 100 }]

// const ofAge = peopleArr.filter(person =>{
//     if(person.age >= 18){
//         return person.name + 'can go '
//     }
// })
  
//   console.log(ofAge)
  
 //.some   
 
// const arr =[1,3,5,2,90,20]

//     arr.sort((a, b) => a-b)
//     arr.sort((a,b) => b-a)
  
//   console.log(arr)

// const arr =[ "dog", "wolf", "by", "family", "eaten"]
//   arr.sort((a, b) =>{
//       return a.length - b.length
//   })
//   console.log(arr)

//   function lengthSort(arr) {
//     return arr.sort(function (a, b){
//            return a.length - b.length
//        })
//    }
   
//    console.log(lengthSort(["dog", "wolf", "by", "family", "eaten"])) 
//    arr.sort((a, b)=>{
//         if( a < b ){
//             return -1
            
//         }else if(a > b){
//             return +1
//         }
//    })
// console.log(arr)
// const arr = [
// { name: "Quiet Samurai", age: 22 },
// { name: "Arrogant Ambassador", age: 100 },
// { name: "Misunderstood Observer", age: 2 },
// { name: "Unlucky Swami", age: 77 }]

//  const byAge = arr.sort((a, b) =>{
//         if(a.age < b.age){
//             return -1
//         }else if( a.age > b.age){
//             return +1
//         }

        
//     })
  
  
//   console.log(byAge)

//.reduce


 
// function stringConcat(arr) {
//     return arr.reduce((total,num) => total.toString() + num.toString())
// }
 
//  console.log(stringConcat([1,2,3]))
// var voters = [
//     {name:'Bob' , age: 30, voted: true},
//     {name:'Jake' , age: 32, voted: true},
//     {name:'Kate' , age: 25, voted: false},
//     {name:'Sam' , age: 20, voted: false},
//     {name:'Phil' , age: 21, voted: true},
//     {name:'Ed' , age:55, voted:true},
//     {name:'Tami' , age: 54, voted:true},
//     {name: 'Mary', age: 31, voted: false},
//     {name: 'Becky', age: 43, voted: false},
//     {name: 'Joey', age: 41, voted: true},
//     {name: 'Jeff', age: 30, voted: true},
//     {name: 'Zack', age: 19, voted: false}
// ];

// const totalVotes = voters.reduce((final, voter) =>{
//         if(voter.voted){
//             final ++
//         }
//         return final
//  }, 0)

//  console.log(totalVotes)

//  var wishlist = [
//     { title: "Tesla Model S", price: 90000 },
//     { title: "4 carat diamond ring", price: 45000 },
//     { title: "Fancy hacky Sack", price: 5 },
//     { title: "Gold fidgit spinner", price: 2000 },
//     { title: "A second Tesla Model S", price: 90000 }
// ];


//  const shoppingSpree = (arr) =>{
//       return arr.reduce((final, item) =>{
//         final += item.price
//         return final
//     }, 0)  
//  }

 
//  console.log(shoppingSpree(wishlist))


const url = 'https://seinfeld-quotes.herokuapp.com/quotes'
function getData() {
    fetch(url)
        .then(res => res.json())
        .then(res => console.log(res))
        .catch(err => console.log(err))

}
getData()
//

// const xhr = new XMLHttpRequest()
//         // method  // url                     // async?
// xhr.open("GET", "https://swapi.co/api/people", true)
// xhr.send()

// xhr.onreadystatechange = function(){
//     if(xhr.readyState === 4 && xhr.status === 200){
//         const JSONdata = xhr.responseText
//         const data = JSON.parse(JSONdata)
//         console.log(data.results)
//         // showData(data.results)
//     } 
// }

 
