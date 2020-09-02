//Q6
// 6. Write a function _exponentFactory_ that accepts a number, say x. Define 2 functions 
// _square_ and _cube_ within it (which accept a number each, and return the square and cube 
// respectively). If x is 2, exponentFactory returns the square function, if 3 it returns 
// the cube function. For any other input it returns a function that returns the number it 
// accepts as such. Call the exponentFactory() function and then the returned function, and log the result.  
// _Example_:
// ```
// var fn;

// fn = exponentFactory( 2 );
// console.log( fn( 5 ) ); // prints 25;

// fn = exponentFactory( 3 );
// console.log( fn( 5 ) ); // prints 125;

// fn = exponentFactory( 4 );
// console.log( fn( 5 ) ); // prints 5;
// ```


type returnFunction = (x:number) => number;

const exponentFactory:(n:number)=>returnFunction = (n)=>{

    const square:returnFunction = (x)=>x*x;
    const cube:returnFunction = (x)=>x*x*x;
    const num:returnFunction = (x) =>x;
    if(n===2){
        return square;
    }
    else if(n===3){
        return cube;
    }
    else{
        return num;
    }
} 
var fn;

fn = exponentFactory( 2 );
console.log( fn( 5 ) ); // prints 25;

fn = exponentFactory( 3 );
console.log( fn( 5 ) ); // prints 125;

fn = exponentFactory( 4 );
console.log( fn( 5 ) ); // prints 5;


//Q7
// 7. Define a function _push()_ that accepts 2 arguments
// * first argument is an array of numbers 
// * second is either a number or an array of numbers
// If second argument is a number, the function adds the number to the end of the array. If second argument is an array of numbers, the items of the array are pushed to the end of the array.
// Your function push() should return the array (first argument it accepts).
// _Tip_: You may use the spread operator to simplify your logic

// 7b. Define a function log() that accepts either
// a. One argument - message (string)
// b. Two arguments - format ( 'standard' | 'verbose' ) and message (string)
// If its called with one argument, it simply prints the message. If it is called with 2 arguments it prints the message if format is 'standard', and prints the message with current date if format is 'verbose'
// Define appropriate function overloads.

// 7c. Define a function hireCar() that accepts either
// a. Two arguments - endDate (Date), carType ( 'hatchback' | 'sedan' | 'suv' - defaults to 'sedan')
// b. Three arguments - startDate (Date), endDate, car (all types same like 2 arguments case)  
// If its called with 2 arguments, return a Booking object with all details passed, the current date as startDate, price (number), and driverName (string).  
// If it is called with 3 arguments, a similar object with details passed is created and returned.
// Define appropriate function overloads.

const push:(arr:number[] , arg2:number[] | number)=>number[]= (arr, arg2)=>{
    if(typeof(arg2)==='number'){
        arr.push(arg2);
    }
    else{
        arg2.forEach((n)=>{
            arr.push(n);
        });
    }
    return arr;
}

console.log(push([1,2,3],[3,4]));

//Q7b

type format1 = "standard" | "verbose";
function log(message:string):void;
function log( message:string, format:format1):void;


function log(message:string , format?:format1):void {
        if(format ==='standard' || format===undefined){
            console.log(message);
        }
        else{
            let date:Date = new Date();
            console.log(message + " " + date);
        }
}

log("hello");
log("hello" , "verbose");

//Q7c

type carType1 = ("hatchback" | "sedan" | "suv")  ;
type BookingObj = {
    startDate : Date,
    price : Number,
    driverName :string
}

function hireCar(endDate:Date , carType:carType1 ):BookingObj;
function hireCar(endDate:Date, carType:carType1 ,startDate:Date):BookingObj;

function hireCar(endDate:Date, carType:carType1, startDate?:Date):BookingObj{
    
    if(startDate === undefined){
        let bookedCar:BookingObj = {
            startDate :new Date(),
            price : 100000,
            driverName: "Ryan Gosling"
        }  
        console.log(bookedCar);
        return bookedCar;
    }
    else{
        let bookedCar:BookingObj = {
            startDate:startDate, 
            price:100000,
            driverName:"Robert De Niro"
        }
        console.log(bookedCar);
        return bookedCar;
    }
}

hireCar(new Date(), 'hatchback',new Date());

//Q8
//8. Define an interface IClock with type ('digital' | 'analog'), and a time property 
//(an object) with properties - hours, minutes, seconds (all numbers). Your interface 
//also defines a method setTime( hours, minutes, seconds ) that sets the time, and 
//getTime() that returns a string representation of the time. Create 2 objects of IClock 
//type - one of type 'digital' and other of type 'analog', set the time through setTime() 
//and log the time using getTime().

type timeObject = {
    hours :number,
    minutes:number,
    seconds:number
}

interface Iclock {
    type: String,
    time:timeObject,
    setTime:(hours:number , minutes:number, seconds:number) =>void,
    getTime:()=>string
}

let time1:timeObject = {hours : 0,
                        minutes:0,
                        seconds:0};

let clock1:Iclock = {
    type :'digital', 
    time:time1,
    setTime(hours,minutes,seconds){
        this.time.hours = hours;
        this.time.minutes = minutes;
        this.time.seconds = seconds;
    },
    getTime(){
        let time:string = "";
        if(this.type === 'digital'){
            time = this.time.hours.toString() + ":" +this.time.minutes.toString() + ":" + this.time.seconds.toString();
        }
        else{
            time = this.time.hours.toString() + ":" +this.time.minutes.toString();
        }
        return time;
    }
}
let clock2:Iclock = {
    type :'analog', 
    time:time1,
    setTime(hours,minutes,seconds){
        this.time.hours = hours;
        this.time.minutes = minutes;
        this.time.seconds = seconds;
    },
    getTime(){
        let time:string = "";
        if(this.type === 'digital'){
            time = this.time.hours.toString() + ":" +this.time.minutes.toString() + ":" + this.time.seconds.toString();
        }
        else{
            time = this.time.hours.toString() + ":" +this.time.minutes.toString();
        }
        return time;
    }
}
clock1.setTime(10,34,56);
clock2.setTime(3,56,59);
console.log(clock1.getTime());
console.log(clock2.getTime());

//Q9
//9. Define a Project class with id (number - public), name (string - public), client (string - //private). Define some Project objects (suggest using sample data below).  
//```
//const dbsPayroll = new Project( 1001, 'DBS payroll', 'DBS' );
//const intranetDeployment = new Project( 2001, 'Intranet v2 deployment', 'Internal' );
//```  

class Project{
    public id: number;
    public name:string;
    private client:string;
    constructor(id:number, name:string, client:string){
        this.id= id;
        this.name = name;
        this.client = client;
    }
}
const dbsPayroll = new Project( 1001, 'DBS payroll', 'DBS' );
const intranetDeployment = new Project( 2001, 'Intranet v2 deployment', 'Internal' );
console.log(dbsPayroll);
console.log(intranetDeployment);

//Q10
// 10. Define an Employee class with id (number - public), name (string - public), department (string - public), 
//projects (array of Projects - private). __Use the access specifiers in constructor arguments__ to setup the initial 
//values for data members automatically. Define some Employee objects (suggest using sample data below).  
// ```
// const john = new Employee( 1, 'John', 'Web Developer', 'IT', [ dbsPayroll ] );
// const jane = new Employee( 2, 'Jane', 'Project Manager', 'IT', [ dbsPayroll, intranetDeployment ] );
// const mark = new Employee( 3, 'Mark', 'System Administrator', 'Operations', [ intranetDeployment ] );
// ```  

class Employee{
    public id:number;
    public name:string;
    public department:string;
    private projects?:Project[];
    constructor(id:number, name:string, department:string , projects:Project[]){
        this.id = id;
        this.name = name;
        this.department = department;
        this.projects = projects;
    }

    public addProject:(project:Project)=>void = (project)=>{
        this.projects?.push(project);
    }

}

const john = new Employee( 1, 'John', 'Web Developer', [ dbsPayroll ] );
const jane = new Employee( 2, 'Jane', 'Project Manager',  [ dbsPayroll, intranetDeployment ] );
const mark = new Employee( 3, 'Mark', 'System Administrator', [ intranetDeployment ] );

console.log(john);
console.log(jane);
console.log(mark);
mark.addProject(dbsPayroll);
console.log(mark);

//Q11
// 11. Create a generic interface for an Item, say IItem - an item would have an id (number), 
// name (parameter type), and getName() that returns a string representation of the name. 
// Define 2 classes ItemShortName (with name - a string) and ItemLongName (with name - an object 
// with manufacturer and product names, both strings) that each implement IItem.  

// Now define 2 different generic functions - say, printItems1() and printItems2() which both accept
// an array of IItem<T> objects and print the details of each object in the array. printItems1() should 
// take a generic parameter representing the type of name, and printItems2() takes a generic parameter 
// which is restricted a subtype of IItem<any>.

interface IItem<T1>{
    id:number,
    name:T1,
    getName:()=>string
}

type longName = {manufacturer:string , productName:string};

class ItemShortName implements IItem<string>{
    public id:number;
    public name:string;
    constructor(id:number, name:string){
        this.id = id;
        this.name = name;
    }
    getName():string{
        return this.name;
    }
}

class ItemLongName implements IItem<longName>{
    public id:number;
    public name:longName;
    constructor(id:number, name:longName){
        this.id = id;
        this.name = name;
    }
    getName():string{
        return `${this.name.manufacturer} + ${this.name.productName}`;
    }
}

type T = string | longName;

function printitems1<T>(arr:IItem<T>[]){
    arr.forEach((x)=>{
        console.log(x.getName());
    });
}

function printitems2<T>(arr:IItem<any>[]){
    arr.forEach((x)=>{
        console.log(x.getName());
    });
}
