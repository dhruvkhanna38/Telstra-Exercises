//Q1
//1. Write a function _sum_ that calculates and returns the sum of arguments (assume all arguments are numbers) passed to it, and call it like so. Use a rest parameter to implement this. 
//```
//var result = sum( 1, 2, 3, 4 );
//console.log( result ); // prints 10
//
//var result = sum( 1, 2, 3, 4, 5  );
//console.log( result ); // prints 15
//```

function _sum(...a){
    let res = 0;
    for(let i=0;i<a.length;i++){
        res += a[i];
    }
    return res;
}

console.log(_sum(1,2,3,4,5));

//Q44
//44. Use array and object destructuring feature to create variable that hold values as shown below.
//```
//const iPhone11 = {
//    name: 'iPhone 11',
//    manufacturer: 'Apple',
//    price: 699,
//    specs: {
//        color: 'White',
//        memory: {
//            value: 128,
//            unit: 'MB'
//        },
//        cameras: {
//            front: '12 MP Wide',
//            rear: '12 MP Ultra Wide'
//        },
//        availableColors: [ 'Black', 'Green', 'Yellow', 'Purple', 'Red', 'White' ]
//    },
//    calculateDiscoutedPrice: function( percentage ) {
//        return this.price * ( 100 - percentage ) / 100;
//    }
//}
//
//// create the variables using destructuring - the variables should have values as shown below.
//// destructure here...
//
//// below line logs - iPhone 11   Apple   128   12 MP Ultra Wide   Green
//console.log( name, brand, ram, rearCamera, secondColor );
//```

const iPhone11 = {
    name: 'iPhone 11',
    manufacturer: 'Apple',
    price: 699,
    specs: {
        color: 'White',
        memory: {
            value: 128,
            unit: 'MB'
        },
        cameras: {
            front: '12 MP Wide',
            rear: '12 MP Ultra Wide'
        },
        availableColors: [ 'Black', 'Green', 'Yellow', 'Purple', 'Red', 'White' ]
    },
    calculateDiscoutedPrice: function( percentage ) {
        return this.price * ( 100 - percentage ) / 100;
    }
}

const { name , manufacturer:brand, specs:{ memory:{value:ram}}} = iPhone11;
const{ specs:{cameras:{rear:rearCamera}}}  = iPhone11;
const{specs:{availableColors:[, secondColor]}} = iPhone11;


//below line logs - iPhone 11   Apple   128   12 MP Ultra Wide   Green
console.log( name, brand, ram, rearCamera, secondColor );


//Q45
//45. Write a standalone function ```printPhoneDetails``` that prints a description of the phone with discounted price as in an earlier exercise. The function is passed the iPhone11 object but it destructures to create only the required variables when accepting the object as argument.
//```
//<!-- iPhone11.calculateDiscoutedPrice = iPhone11.calculateDiscoutedPrice.bind( iPhone11 ) -->
//printPhoneDetails.call( iPhone11 ); // Logs "Apple iPhone11 is available at a 10% discounted rate of $629.1"
//```
//__NOTE__: You must use destructuring when accepting the argument.


function printPhoneDetails(){
    const {manufacturer, name, calculateDiscoutedPrice, price} = this;
    newCalculatedDiscountedPrice = calculateDiscoutedPrice.bind({price:price});
    let discountedPrice = newCalculatedDiscountedPrice(10);
    console.log(`${manufacturer} ${name} is availabe at a 10% discounted rate of $ ${discountedPrice}`);
}

printPhoneDetails.call(iPhone11);


//Q48
//48. Use object spread to make a shallow copy of the following object.
//* Again, use array and object spread (as required) to create a deep copy of the object.  
//* Test out if making a change to name and front camera deftails on the iPhone11 object affects the shallow copy.   
//* What about the deep copy? Is it affected?
//```
//const iPhone11 = {
//    name: 'iPhone 11',
//    manufacturer: 'Apple',
//    price: 699,
//    specs: {
//        color: 'White',
//        memory: {
//            value: 128,
//            unit: 'MB'
//        },
//        cameras: {
//            front: '12 MP Wide',
//            rear: '12 MP Ultra Wide'
//        },
//        availableColors: [ 'Black', 'Green', 'Yellow', 'Purple', 'Red', 'White' ]
//    }
//}
//```

const shallowIphoneCopy = {...iPhone11};
console.log(shallowIphoneCopy);

const deepIphoneCopy = {
    ...iPhone11,
    specs:{
        ...iPhone11.specs,
        memory:{...iPhone11.specs.memory},
        cameras:{...iPhone11.specs.cameras},
        availableColors:[...iPhone11.specs.availableColors]
    }
}

console.log(deepIphoneCopy);
deepIphoneCopy.specs.memory.value = 256;
console.log(deepIphoneCopy);

const payroll = {
    employees: [
        { name: 'John', dept: 'IT', salary: 1000 },
        { name: 'Maria', dept: 'Finance', salary: 2000 },
        { name: 'David', dept: 'Finance', salary: 3000 }
    ],
    hikePercentage: {
        IT : 10,
        Finance: 20
    },
    raise: function(){
        this.employees.forEach(( employee )=>{
            const dept = employee.dept;

            const salary = employee.salary;
            const hikePercentage = this.hikePercentage[dept];
            
            employee.salary = ( ( 100 + hikePercentage ) / 100 ) * salary;
        });
    }
}

payroll.raise();
console.log( payroll.employees );


