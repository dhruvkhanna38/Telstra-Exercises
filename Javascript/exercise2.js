//exercise 2 : 14, 15, 16, 17, 18, 19 (almost done in class), 20, 21, 22, 38, 38b, 39 (optional), 40 (optional)

//Q14
//14. Write a function that accepts another function and calls the accepted function.


function g(x){
    console.log("in g");
    console.log(x);
    x();
}

g(function(){
    console.log("no name function");
});


//Q15
//5. Write a function _sum_ that accepts 2 numbers (say _x_ and _y_) and another function (say, _transform_) as arguments. The transform function should be a function that accepts a number and returns another number - for example, a function _square_ that accepts a number and returns the square of a number. The sum() function applies the transform function on each of each and y and returns the sum of the results of calling transform - for example, sum() would return x^2 + y^2 if called as sum( x, y, square );  
//_Example_:
//```
//function square( x ) { return x * x };
//
//function cube( x ) { return x * x * x };
//
//console.log( sum( 2, 3, square ) ); // prints 13
//console.log( sum( 2, 3, cube ) ); // prints 35
//```

let sum = (x,y,callback)=>{
    return callback(x) + callback(y);
}

function square(x){
    return x*x;
}

function cube(x){
    return x*x*x;
}

console.log(sum(2,3,square));
console.log(sum(2,3,cube));


//Q16
//16. Write a function _sumArray_ that works like so.
//```
//console.log( sumArray( [ 1, 2, 3 ], square ) ); // prints 14
//console.log( sumArray( [ 1, 2, 3 ], cube ) ); // prints 36
//```

sumArray = (arr, callback)=>{
    return callback(arr);
}


function squareSum(arr){
    let s = 0;
    for(let i =0;i<arr.length;i++){
        s = s + arr[i] * arr[i];
    }
    return s;
}

function cubeSum(arr){
    let s =0;
    for(let i =0;i<arr.length;i++){
        s = s + arr[i] * arr[i] * arr[i];
    }
    return s;
}

console.log(sumArray([1,2,3],squareSum));
console.log(sumArray([1,2,3],cubeSum));

//Q17
//17. Write a function _exponentFactory_ that accepts a number, say x. Define 2 functions _square_ and _cube_ within it (which accept a number each, and return the square and cube respectively). If x is 2, exponentFactory returns the square function, if 3 it returns the cube function. For any other input it returns a function that returns the number it accepts as such. Call the exponentFactory() function and then the returned function, and log the result.  
//_Example_:
//```
//var fn;
//
//fn = exponentFactory( 2 );
//console.log( fn( 5 ) ); // prints 25;
//
//fn = exponentFactory( 3 );
//console.log( fn( 5 ) ); // prints 125;
//
//fn = exponentFactory( 4 );
//console.log( fn( 5 ) ); // prints 5;
//```


let exponentFactory = (x)=>{
    let power = (y)=>{
        let a=1;
        for(let i=1;i<=x;i++){
            a = a*y;
        }
        return a;
    }
    return power;
}

let fn = exponentFactory(4);
console.log(fn(5));


//Q18
//18. Write a function _addTo_ that accepts a number x. addTo() returns a function that accepts a number y and returns the sum of x and y. Call the addTo() function few times, and then the returned function, and log the result.  
//_Example_:
//```
//var addTo10 = addTo( 10 );
//console.log( addTo10( 5 ) ); // prints 15
//console.log( addTo10( 7 ) ); // prints 17
//
//var addTo20 = addTo( 20 );
//console.log( addTo20( 5 ) ); // prints 25
//console.log( addTo20( 7 ) ); // prints 27
//```

let addTo = (x)=>{
    let addAgain = (y)=>{
        return x + y;
    }
    return addAgain;
}

let fn2 = addTo(10);
console.log(fn2(7));


//Q20
//20. Create a movie object that represents details of your favorite movie. Suggested information to have in the object - name, cast (an array of strings with cast member's names), yearOfRelease, boxOfficeCollection, addToCast( newMember ) that accepts a new cast member's name and adds to the cast array, addToCollection( amount ) that accepts box office collections for a week and adds it to the current boxOfficeCollection.

let movie = {
    name: "Figth Club",
    cast:["Edward Norton", "Brad Pitt" , "Helena Bonham Carter"],
    yearOfRelease: 1999 , 
    boxOfficeCollection: 1000000 , 
    addToCast: function(newMember){
        this.cast.push(newMember);
    },
    addToCollection: function(amount){
        this.boxOfficeCollection += amount;
    }
}

console.log(movie);
movie.addToCast("Jared Leto");
movie.addToCollection(50000);
console.log(movie);

