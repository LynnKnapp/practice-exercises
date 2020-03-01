let calculate = document.getElementById('math')



calculate.addEventListener('submit', function(e){
    e.preventDefault()
    console.log('hello')
    let num1 = document.getElementById('add1').value
    let num2 = document.getElementById('add2').value
    let result = Number(num1) + Number(num2)
    document.getElementById('addResult').innerHTML = result
    
})

calculate.addEventListener("submit", function(e){
    e.preventDefault()
    let num1 =document.getElementById("sub1").value;
    let num2 =document.getElementById("sub2").value;
    let result = Number(num1) - Number(num2)
    document.getElementById("subResult").innerHTML = result;
})

calculate.addEventListener("submit", function(event){
    event.preventDefault()
    let num1 =document.getElementById("mult1").value;
    let num2 =document.getElementById("mult2").value;
    let result = Number(num1) * Number(num2)
    document.getElementById("multResult").innerHTML = result  
})

