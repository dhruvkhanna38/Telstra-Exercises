import Project from "./project.js"
import Employee from "./employee.js"

const dbsPayroll = new Project( {id:1001, name:'DBS payroll', client:'DBS' });
const intranetDeployment = new Project( {id:2001, name:'Intranet v2 deployment', client:'Internal'} );
const john = new Employee( {id:1, name:'John', role:'Web Developer', department:'IT', projects: [ dbsPayroll ]});
const jane = new Employee( {id:2, name:'Jane', role:'Project Manager', department:'IT', projects:[ dbsPayroll, intranetDeployment ]});


let projects = [dbsPayroll , intranetDeployment];
let employees = {john, jane};

console.log(projects);
console.log(employees);

let tbody = document.querySelector("tbody");

for(let i=0;i<projects.length;i++){
    tbody.innerHTML += `
                            <tr>
                                    <td>${projects[i].id}</td>
                                    <td>${projects[i].name}</td>
                                    <td>${projects[i].client}</td>
                            </tr>
                        `
}
