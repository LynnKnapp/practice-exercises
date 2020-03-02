
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

 let celebs =[
    {
        name: "Angelina Jolie",
        age: 80
    },
    {
        name: "Eric Jones",
        age: 2
    },
    {
        name: "Paris Hilton",
        age: 5
    },
    {
        name: "Kayne West",
        age: 16
    },
    {
        name: "Bob Ziroll",
        age: 100
    }]
    let name = document.createElement(h1)
    name.innerText = celebs.name 

    let age = document.createElement(h2)
    age.innerText = celebs.age

    // let mappedCelebs =celebs.map(name => {
    //     if(name.age >=18){
    //         return name.name + " " +('can go to the movie')
    //     }else if(name.age < 18){
    //         return name.name + " " +("you can't go in")
    //     }
    // })

    console.log(mappedCelebs)
   


        
