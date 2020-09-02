// 21, 22, 38, 38b, 39 (optional), 40 (optional)

//Q38
//38. Create a Movie class that represents details of a movie. Suggested information to have in an object of the class - name, cast (an array of strings with cast member's names), yearOfRelease, boxOfficeCollection, addToCast( newMember ) that accepts a new cast member's name and adds to the cast array, addToCollection( amount ) that accepts box office collections for a week and adds it to the current boxOfficeCollection. Create 2 objects of this class that represent any 2 movies. Call the methods addToCast() and addToCollection() and verify they work according to expectations.

class Movie{
    constructor({name, boxOfficeCollection, yearOfRelease}){
        this.name = name;
        this.boxOfficeCollection = boxOfficeCollection;
        this.yearOfRelease = yearOfRelease;
        this.cast = [];
    }

    addToCast(newMember){
        this.cast.push(newMember);
    }
    addToCollection(amount){
        this.boxOfficeCollection += amount;
    }
}

let movie1 = new Movie({name:"Fight Club" , boxOfficeCollection:1000000, yearOfRelease:1999});
movie1.addToCast("Brad Pitt");
movie1.addToCast("Edward Norton");
movie1.addToCollection(50000);
console.log(movie1);

let movie2 = new Movie({name:"Schindler's list" , boxOfficeCollection:1000000, yearOfRelease:1997});
movie2.addToCast("Liam Neeson");
movie2.addToCast("Ralph Fiennes");
movie2.addToCollection(700000);
console.log(movie2);


//Q39
//39. Define a Project class with id (number), name (string), client (string). Define some Project objects (suggest using sample data below).  
//```
//const dbsPayroll = new Project( 1001, 'DBS payroll', 'DBS' );
//const intranetDeployment = new Project( 2001, 'Intranet v2 deployment', 'Internal' );
//```  
class Project {
    constructor({id, name, client}){
        this.id = id;
        this.name = name;
        this.client = client;
    }

}

const dbsPayroll = new Project( {id:1001, name:'DBS payroll', client:'DBS' });
const intranetDeployment = new Project( {id:2001, name:'Intranet v2 deployment', client:'Internal'} );

console.log(dbsPayroll);
console.log(intranetDeployment);

//Q40
//40. Define an Employee class with id (number), name (string), role (string), department (string), projects (array of Projects). Define some Employee objects (suggest using sample data below).  
//```
//const john = new Employee( 1, 'John', 'Web Developer', 'IT', [ dbsPayroll ] );
//const jane = new Employee( 2, 'Jane', 'Project Manager', 'IT', [ dbsPayroll, intranetDeployment ] );
//const mark = new Employee( 3, 'Mark', 'System Administrator', 'Operations', [ intranetDeployment ] );
//```  
class Employee{
    constructor({id, name, role, department, projects}){
        this.id = id;
        this.name = name;
        this.role = role;
        this.department = department;
        if(projects.length == 0){
            this.projects = [];
        }
        else{
            this.projects = projects;
        }
    }

    addProject(newProject){
        this.projects.push(newProject);
    }
}

const john = new Employee( {id:1, name:'John', role:'Web Developer', department:'IT', projects: [ dbsPayroll ]});
const jane = new Employee( {id:2, name:'Jane', role:'Project Manager', department:'IT', projects:[ dbsPayroll, intranetDeployment ]});
console.log(john);
john.addProject(intranetDeployment);
console.log(john);
console.log(jane);