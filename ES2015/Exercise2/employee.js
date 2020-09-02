import Project from "./project.js"
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
const dbsPayroll = new Project( {id:1001, name:'DBS payroll', client:'DBS' });
const intranetDeployment = new Project( {id:2001, name:'Intranet v2 deployment', client:'Internal'} );
const john = new Employee( {id:1, name:'John', role:'Web Developer', department:'IT', projects: [ dbsPayroll ]});
const jane = new Employee( {id:2, name:'Jane', role:'Project Manager', department:'IT', projects:[ dbsPayroll, intranetDeployment ]});

export {Employee as default}