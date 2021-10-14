const { Console } = require('console');
const fs = require('fs');
const inquirer = require('inquirer');
//const generatePage = require('./src/page-template'); I need a readme

inquirer.prompt( [
{
    type:"input",
    name:"title",
    message: "What is the project's title?"
    
}
]).then((answers) => {
console.log(JSON.stringify(answers))
var title = JSON.stringify(answers)
fs.writeFile('readmeSample.md', title, (err) => {
if (err) {console.error(err)
    return
}

})})