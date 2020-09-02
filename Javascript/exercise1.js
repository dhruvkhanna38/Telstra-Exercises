//5,6,8,10,12,13

//Q5
//5. Create an array with a few numbers (at least 4). Now,
//* Print the length of the array (number of items in the array).
//* Increment the value of the first item
//* Re-assign the value of the last item to the sum of the last 2 items. 
//* Add another number after the end of the array
//_Example_: If the array is [ 1, 3, 5, 7 ] and you need to add 9, it is added to the end of the array, and the array becomes [ 1, 3, 5, 7, 9 ]
//* Declare a new array that is empty (has no items). Use a for loop to copy the array items into the new array.
let arr = [1,2,3,4];
console.log(arr.length);

arr[0] = arr[0] + 1;
arr[arr.length-1] = arr[arr.length-1] + arr[arr.length-1];
arr.push(5);
let newArr = [];

for(let i=0;i<arr.length;i++){
    newArr.push(arr[i]);
}
console.log(newArr);

//Q6
//6. Write a for loop that calculates sum of items in an array of numbers.
//_Example_: For array [ 1, 2, 3, 4 ] it calculates the sum as 10
let sum =0;
for(let i=0;i<arr.length;i++){
    sum = sum + arr[i];
}
console.log(sum);

//Q8
//8. Write a for loop that creates a new array with squares of numbers in a supplied array.
//_Example_: Supplied array is [ 1, 2, 3, 4 ]. You should generate a new array [ 1, 4, 9, 16 ] from it.
let squareArray = [];

for(let i=0;i<arr.length;i++){
    squareArray.push(arr[i] * arr[i]);
}

console.log(squareArray);

//Q10
//10. Write a function that logs "Good morning", "Good afternoon", "Good evening", or "Good night" based on the hour of the day, and call it.
//* 5 <= hour < 12: "Good morning"
//* 12 <= hour < 16: "Good afternoon"
//* 16 <= hour < 20: "Good evening"
//* Otherwise, "Good night"  
//__Note__: The hour can be obtained by using this statement
//var hour = (new Date()).getHours()


function greeting(hour){
    if(hour>=5 && hour<12){
        console.log("Good Morning");
    }
    else if(hour>=12 && hour<20){
        console.log("Good Afternoon");
    }
    else if(hour>=16 && hour < 20){
        console.log("Good Evening");
    }
    else{
        console.log("Good Night");
    }
}
greeting(new Date().getHours());

//Q12
//12. Write a function _sumSquares_ that creates a new array with squares of numbers in the array passed to it, and call it like so.
//```
//var result = sumSquares( [ 1, 2, 3, 4 ] );
//console.log( result ); // prints 30

let sumArray  = (arr)=>{
    let sum =0;
    for(let i=0;i<arr.length;i++){
        sum = sum + arr[i];
    }
    return sum;
}

console.log(sumArray(arr));


//Q13
//13. Write a function _contains_ that accepts an array, and a number and returns true if the number appears in the array, and false otherwise. Use function expression syntax to delcare the function.
//```
//console.log( contains( [ 1, 2, 3, 4 ], 3 ) ); // prints true
//console.log( contains( [ 1, 2, 3, 4 ], 5 ) ); // prints false
//```

let checkIfPresent = (arr, x)=>{
    
    for(var i=0;i<arr.length;i++){
        if(arr[i] === x){
            return true;
        }
    }
    return false;
}

console.log(checkIfPresent(arr, 100));