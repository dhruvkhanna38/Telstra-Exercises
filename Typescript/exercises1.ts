//Q1,2,3,4,5,6,7,8,9,10

//Q1
// 1. Write a function _sumArray()_ that calculates sum of items in an array of numbers and returns it. Type the function arguments and return value inline.
// ```
// let result = sumArray( [ 1, 2, 3, 4 ] );
// console.log( result ); // 10
// ```

const sumArray : (arr:number[])=>number = (arr)=>{
    let sum = 0;
    arr.forEach((n)=>{
        sum+=n;
    });
    return sum;
}

console.log(sumArray([1,2,4,5]));

//Q2
// 2. Write a function _squareEach()_ that creates a new array with squares of numbers in a supplied array, and returns it. Type the function separately and assign the type to the function.
// ```
// let result = squareEach( [ 1, 2, 3, 4 ] );
// console.log( result ); // [ 1, 4, 9, 16 ]
// ```

const squareEach : (arr:number[])=>number[] = (arr)=>{
    let squareArr:number[] = [];
    arr.forEach((n)=>{
        squareArr.push(n*n);
    });
    return squareArr;
}

console.log(squareEach([1,2,3,4]));

//Q3
// 3. Write a function _contains()_ that accepts an array that can have any primitive value, and another primitive value as the second argument, and returns true if the second argument appears in the array, and false otherwise.
// ```
// console.log( contains( [ 1, 'hello', 3, true ], 3 ) ); // prints true
// console.log( contains( [ 1, 'hello', 3, true ], 5 ) ); // prints false
// ```

type containsArray = (boolean | string | number)[];
type containsKey = boolean | string | number;

const contains : (arr:containsArray, key:containsKey)=>boolean = (arr,key)=>{
    if(arr.indexOf(key)!==-1){
        return true;
    }
    else{
        return false;
    }
}
console.log( contains( [ 1, 'hello', 3, true ], 3 ) ); // prints true
console.log( contains( [ 1, 'hello', 3, true ], 5 ) ); // prints false


//Q4
// 4. Write a function _map()_ that accepts an array as the first argument, and another function as the second argument. The second argument is a function that accepts an item of the array and returns some value. The _map()_ functions applies the passed function (second argument) on each item of the passed array (first argument) in the order they appear in the array, and groups the results into an array and returns it.
// ```
// function square( x ) { return x * x };
// function cube( x ) { return x * x * x };

// console.log( map( [ 1, 2, 3, 4 ], square ) ); // prints [ 1, 4, 9, 16 ]
// console.log( map( [ 1, 2, 3, 4 ], cube ) ); // prints [ 1, 8, 27, 64 ]
// ```
type power  = (x:number) => number;

const square:power = (x)=> x*x;
const cube:power = (x)=>x*x*x;

const map:(arr:number[] , powerFunction:power)=>number[] = (arr, powerFunction)=>{
    let newArray:number[] = [];
    arr.forEach((n)=>{
        newArray.push(powerFunction(n));
    })
    return newArray;
}
console.log( map( [ 1, 2, 3, 4 ], square ) ); // prints [ 1, 4, 9, 16 ]
console.log( map( [ 1, 2, 3, 4 ], cube ) ); // prints [ 1, 8, 27, 64 ]

//Q5
// 5. Write a function filter() that accepts an array and another function f (which returns a boolean value). The filter function should work like so...
// ```
// function isOdd( x ) {
//     return x % 2 === 1;
// }
// let filteredList = filter( [ 1, 2, 3, 4, 5, 6, 7, 8 ], isOdd ); // [ 1, 3, 5, 7 ]
// ```

const filter:(arr:number[], filterFunction:(x:number)=>boolean)=>number[] = (arr, filterFunction)=>{
    let list:number[] = [];
    arr.forEach((n)=>{
        if(filterFunction(n)){
            list.push(n);
        }
    });
    return list;
}
function isOdd( x:number ) {
    return x % 2 === 1;
}
let filteredList = filter( [ 1, 2, 3, 4, 5, 6, 7, 8 ], isOdd ); // [ 1, 3, 5, 7 ]
console.log(filteredList);


