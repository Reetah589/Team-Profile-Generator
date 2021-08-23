var inquirer = require('inquirer')
const Employee = require("./lib/Employee");
const Engineer = require("./lib/Engineer");
const Manager = require("./lib/Manager");
const Intern = require("./lib/Intern");

const fs = require("fs")

//set up an array of questions 
var questions = [
{
    name: "employeeName",
    message: "Please enter the team member's name",
    type: "input"
},
{
    name: "lists",
    message: "Please enter the team member's position",
    type: "input"
},
{
    name: "email",
    message: "Please enter the team member's email",
    type: "input"
},
{
    name: "id",
    message: "Please enter the team member's id number",
    type: "input"
},
{
    name: "intern",
    message: "If Intern, please enter the school",
    type: "input"
},
{
    name: "manager",
    message: "If Manager, please enter the office number",
    type: "input"
},
{
    name: "engineer",
    message: "If Engineer, please enter the GitHub username",
    type: "input"
}  
];

function init (){
    inquirer
    .prompt(questions)
    .then(data => {
      console.log(data)
      console.log(data.title)
      console.log(data.description)
      console.log(data.installation)
      console.log(data.usage)
      console.log(data.contributing)
      console.log(data.tests)
      const html = '<html><body><div style="border-size: 2px; border-color: blue">'
      + 'Name: ' + data.employeeName + '<br />'
      + 'email: ' + data.email + '<br />'
      + 'id: ' + data.id + '<br />'
      + 'lists: ' + data.lists + '<br />'
      + 'School: ' + data.intern + '<br />'
      + 'Office: ' + data.manager + '<br />'
      + 'Github Username: ' + data.engineer + '<br />'
      +'</div></body></html>';

      fs.writeFile('dist/team.html', html, function (err) {
        if (err) throw err;
        console.log('Saved!');
      });
    })
}    
init();
