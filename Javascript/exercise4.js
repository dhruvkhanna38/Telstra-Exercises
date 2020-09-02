//Q23
//23. Given the following snippet of code, solve the questions that follow.
//```
//var numbers = [ 5, 11, 13, 7, 2, 31, 3, 19, 23, 17, 29 ];
//```
//* Sort the numbers in the array in increasing order and print the array
//* Sort the array in decreasing order and print the array
//* Add the number 37 to the end of the array using push()
//* Remove the last 2 numbers in the array
//* Remove the numbers at indices 3, 4 (i.e. the 4th and 5th numbers) and insert the strings 'Seven' and 'Eleven' in their place.
//* Use indexOf() to check if 23 belongs to the array or not. Also, check if 41 belongs to the array or not.
var numbers = [ 5, 11, 13, 7, 2, 31, 3, 19, 23, 17, 29 ];

function compareNumericDesc(a,b){
    if(a<b){
        return 1;
    }
    if(a==b){
        return 0;
    }
    if(a>b){
        return -1;
    }
}
function compareNumericAsc(a,b){
    if(a>b){
        return 1;
    }
    if(a==b){
        return 0;
    }
    if(a<b){
        return -1;
    }
}

numbers.sort(compareNumericAsc);
console.log(numbers);
numbers.sort(compareNumericDesc);
console.log(numbers);

numbers.push(37);

numbers.pop();
numbers.pop();

numbers[3] = "Seven";
numbers[4] = "Eight";
console.log(numbers);
console.log(numbers.indexOf(23));
console.log(numbers.indexOf(41));
console.log(numbers.indexOf("Seven"));


//Q24
//24. Given the following array, solve the questions that follow using appropriate array iterator methods (forEach, find, filter, map)
//```
//var days = [ 'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday' ];
//```
//* Print the name of each item in the array
//* Create a new array with the number of letters in each day (example, Sunday has 6 letters). Thus the new array that should be generated would be [ 6, 6, 7, 9, 8, 6, 8 ]
//* Create a new array with the days that begin with letters S - Z. Thus the new array that should be generated would be [ 'Sunday', 'Tuesday', 'Wednesday', 'Thursday', 'Saturday' ]
//* Create a new array with days that have exactly 6 letters. Thus the new array that should be generated would be [ 'Sunday', 'Monday', 'Friday' ]


var days = [ 'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday' ];

days.forEach(function(day){
    console.log(day);
});

let dayLength = days.map(function(day){
    return day.length;
});
 

console.log(dayLength);

let daysStoZ = days.filter(function(day){
    if(day[0] >= 'S' && day[0] <='Z'){
        return day
    }
});

console.log(daysStoZ);

let sixLetterDays = days.filter(function(day){
    if(day.length === 6){
        return day;
    }
});

console.log(sixLetterDays);