let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let dois = 2

for(let x = 1; x < numbers.length; x++)
    if(numbers[x]%2!==0){
        console.log(numbers[x])
}

/*
numbers.forEach((element) => {
    if(element%2!==0){
        console.log(element)
    } else if(element%2==0){
        let dois =+ element
    } else{

    }
})
*/