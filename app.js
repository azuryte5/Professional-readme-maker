const { Console } = require('console');
const fs = require('fs');
const inquirer = require('inquirer');
//const generatePage = require('./src/page-template'); I need a readme

inquirer.prompt( [
{
    type:"input",
    name:"title",
    message: "What is the project's title?"    
},
{
    type:"input",
    name:"email",
    message: "What is your e-mail Address?"    
},
{
    type:"input",
    name:"user",
    message: "What is your Github name?"    
},
{
    type:"input",
    name:"description",
    message: "Provide a quick description of the project.."    
},
{
    type:"list",
    name:"license",
    message: "What kind of license would you like?",
    choices:['MIT', 'Apache 2.0', 'GPL 3.0', 'BSD 3', 'None'],
    default: 'none'    
},
{
    type:"input",
    name:"dependency",
    message: "What dependencies need to be installed first?", 
    default:'npm i'   
},
{
    type:"input",
    name:"test",
    message: "What command should be used to test?",    
    default:'npm test'
},
{
    type:"input",
    name:"moreInfo",
    message: "What else does the user need to know about this project?"    
},
{
    type:"input",
    name:"contribute",
    message: "What does the user need to know about contributing to the repo?"    
},

]).then(function(data) {
      //Filename is WHAT IS IT GOing to be called.
      var filename = "answers.json"
      fs.writeFile(filename, JSON.stringify(data, null, '\t'), function(err) {
        if (err) {
          return console.log(err);
        }
        console.log("Success!");
      })
    })
// This was too store in a readme
// function(data) {
//     console.log(JSON.stringify(data))
//     //saw this from 9.2 activitiy
//     var title = JSON.stringify(data, null, '\t')
//     fs.writeFile('readmeSample.md', title, (err) => {
//     if (err) {console.error(err)
//         return
//     }
    
//     })})