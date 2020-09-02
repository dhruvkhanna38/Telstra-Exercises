6. Define a Project class with id (number), name (string), client (string). Define some Project objects (suggest using sample data below).  
```
const dbsPayroll = new Project( 1001, 'DBS payroll', 'DBS' );
const intranetDeployment = new Project( 2001, 'Intranet v2 deployment', 'Internal' );
```  

7. Define an Employee class with id (number), name (string), role (string), department (string), projects (array of Projects). Define some Employee objects (suggest using sample data below).  
```
const john = new Employee( 1, 'John', 'Web Developer', 'IT', [ dbsPayroll ] );
const jane = new Employee( 2, 'Jane', 'Project Manager', 'IT', [ dbsPayroll, intranetDeployment ] );
const mark = new Employee( 3, 'Mark', 'System Administrator', 'Operations', [ intranetDeployment ] );
```  

8. Define Project and Employee classes in separate modules (as default exports in those modules). Create another module that creates an array of projects, and an array of employee objects, and exports these (as named exports). Create an HTML page that imports projects and employees and shows the list of projects and employees in 2 separate tables.